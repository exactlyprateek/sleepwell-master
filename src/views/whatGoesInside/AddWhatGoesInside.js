import React, { useEffect, useState } from 'react';
import {
	// CButton,
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CForm,
	CFormGroup,
	CFormText,
	CInput,
	CLink,
	CInputFile,
	CInputGroup,
	CLabel,
	CRow,
	CTextarea
} from '@coreui/react';
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../App.css';
import CkEditor from '../../components/CkEditor5.js';
import ReactSwitch from 'react-switch';

const axios = require('axios').default;

const schema = yup.object().shape({
	sectionTitle: yup.string().required(),
	sectionSubTitle: yup.string().required()
});

const AddWhatGoesInside = () => {
	// const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
	// let history = useHistory();
	const [ error, setError ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	// const [isFeatured, setIsFeatured] = useState(false);
	const [ image, setImage ] = useState('');
	const [ productImage, setProductImage ] = useState('');
	const [ status, setStatus ] = useState(false);
	const [ success, setSuccess ] = useState('');
	// const [description, setDescription] = useState('');
	const [ sectionTitle, setSectionTitle ] = useState();
	// const [ description, setDescription ] = useState('');
	const [ sectionDescription, setSectionDescription ] = useState('');

	let jwtToken = sessionStorage.getItem('token');
	const getWhatGoesInside = () => {
		axios
			.get('http://markbran.in/apis/admin/what-goes-inside', {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				// console.log(response.data.categories);
				setSectionDescription(response.data.section.description);
				setSectionTitle(response.data.section.title);
				setProductImage(response.data.section.image);
				setStatus(response.data.section.status ? true : false);
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			});
	};
	useEffect(() => {
		getWhatGoesInside();
	}, []);
	const handleSubmit = () => {
		console.log(sectionTitle + sectionDescription);
		let formData = new FormData();
		formData.append('title', sectionTitle);
		formData.append('description', sectionDescription);
		formData.append('status', status ? 1 : 0);
		formData.append('image', image);
		axios
			.patch('http://markbran.in/apis/admin/what-goes-inside/1',formData, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				// console.log(response.data.categories);
				setSuccess("Saved");
				getWhatGoesInside();
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			});
	};
	return (
		<div>
			<CRow>
				<CCol xs="12" sm="12">
					<CCard>
						<CCardHeader>What Goes Inside Section</CCardHeader>
						<CCardBody>
							<br />
							{error && <p className="text-danger">{error}</p>}
							{success && <p className="text-success">{success}</p>}
							<CRow>
								<CCol md="6" sm="12">
									{/* <CkEditor /> */}
									<CFormGroup>
										<CLabel htmlFor="category">Section Title</CLabel>
										<CInputGroup className="mb-3">
											<CInput
												required
												value={sectionTitle}
												onChange={(e) => setSectionTitle(e.target.value)}
												placeholder="Title"
											/>
										</CInputGroup>
									</CFormGroup>
								</CCol>
								<CCol md="6" sm="12">
									<CFormGroup>
										<CLabel htmlFor="category">Description</CLabel>
										<CTextarea
											required
											value={sectionDescription}
											onChange={(e) => setSectionDescription(e.target.value)}
											placeholder="Description"
										/>
									</CFormGroup>
								</CCol>
							</CRow>
							<CRow>
								<CCol xs="6">
									<CLabel htmlFor="category">Image</CLabel>
									{console.log(productImage)}
									{productImage && (
										<div>
											<CLabel>Current image</CLabel>
											<img
												src={`${process.env.REACT_APP_BASE_URL}/${productImage}`}
												className="img-fluid p-1"
												style={{
													maxWidth: '150px',
													maxHeight: '150px'

												}}
												alt=""
											/>
										</div>
									)}
									<CInputGroup className="mb-3">
										<CLabel htmlFor="Image" variant="custom-file">
											Choose image...
										</CLabel>
										<CInputFile
											onChange={(e) => setImage(e.target.files ? e.target.files[0] : '')}
											custom
											id="Image"
											type="file"
											multiple="true"
										/>
										{image && (
											<img
												className="img-fluid"
												style={{
													maxWidth: '150px',
													maxHeight: '150px'

												}}
												src={URL.createObjectURL(image)}
												alt="selected_image"
											/>
										)}
									</CInputGroup>
								</CCol>
							</CRow>

						
								
					
							<CRow>
								<CCol xl="12">
									<CFormGroup>
										<CLabel htmlFor="category">Status</CLabel>
										<div>

										<ReactSwitch
											// required
											checked={status}
											onChange={() => setStatus(!status)}
											// placeholder="Description"
											/>
											</div>
									</CFormGroup>
								</CCol>
							</CRow>
							<CRow>
								<CCol xs="8">
									<button
										onClick={handleSubmit}
										className="btn btn-success"
										disabled={loading ? true : false}
										type="submit"
									>
										{loading ? 'Loading...' : 'Save'}
									</button>
								</CCol>
							</CRow>
						</CCardBody>
					</CCard>
				</CCol>
			</CRow>
		</div>
	);
};

export default AddWhatGoesInside;
