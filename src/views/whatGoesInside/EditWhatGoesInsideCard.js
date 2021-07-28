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
import { useHistory, useParams } from 'react-router';

import CkEditor from '../../components/CkEditor5.js';
import ReactSwitch from 'react-switch';
const axios = require('axios').default;

const schema = yup.object().shape({
	title: yup.string().required()
});

const EditWhatGoesInsideCard = () => {
	const C = useParams();
	
	const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
	let history = useHistory();
	const [ error, setError ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ status, setStatus ] = useState(false);
	let jwtToken = sessionStorage.getItem('token');
	const [ showAlertSuccess, setShowAlertSuccess ] = useState(false);
	const [ showAlertDanger, setShowAlertDanger ] = useState(false);
	const getCard = (id) => {
		axios
			.get(`http://markbran.in/apis/admin/what-goes-inside/card/${id}`, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				// console.log(response.data.categories);
				setTitle(response.data.card.title);
				setDescription(response.data.card.description);
				setStatus(response.data.card.status ? true : false);
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			});
	};

	const editCard = () => {
		let formData = new FormData();
        console.log(title + description + status)
		formData.append('title', title);
		formData.append('description', description);
		formData.append('status', status ? 1 : 0);
		// formData.append('image', image);
		axios
			.patch(`http://markbran.in/apis/admin/what-goes-inside/card/${C.id}`, formData, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				setShowAlertSuccess(true);
				setShowAlertDanger(false);
                getCard(C.id);

				console.log(response);
			})
			.catch(function(error) {
				setShowAlertSuccess(false);
				setShowAlertDanger(true);
				console.log(error);
			});
	};
	useEffect(() => {
		getCard(C.id);
	}, []);
	return (
		<div>
			<CRow>
				<CCol xs="12" sm="12">
					<CCard>
						{/* <CCardHeader>
                            Add Innovation
                        </CCardHeader> */}
						<CCardBody>
							<br />
							{showAlertSuccess ? (
								<div className="alert alert-success alert-dismissible fade show" role="alert">
									<strong>Saved</strong> Request Successfull.
									<button
										onClick={() => setShowAlertSuccess(false)}
										type="button"
										className="close"
										data-dismiss="alert"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
							) : null}
							{showAlertDanger ? (
								<div className="alert alert-warning alert-dismissible fade show" role="alert">
									<strong>Alert</strong> Something went wrong try again later !.
									<button
										onClick={() => setShowAlertDanger(false)}
										type="button"
										className="close"
										data-dismiss="alert"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
							) : null}
							<CRow>
								<CCol xs="6">
									{/* <CkEditor /> */}
									<CFormGroup>
										<CLabel htmlFor="category">Title</CLabel>
										<CInputGroup className="mb-3">
											<CInput
												placeholder="Card Title"
												value={title}
												onChange={(e) => setTitle(e.target.value)}
											/>
										</CInputGroup>
										{/* <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText> */}
									</CFormGroup>
								</CCol>
							</CRow>
							<CRow>
								<CCol xl="12">
									<CFormGroup>
										<CLabel htmlFor="category">Description</CLabel>
										<CInput
											placeholder="Card Description"
											value={description}
											onChange={(e) => setDescription(e.target.value)}
										/>{' '}
									</CFormGroup>
								</CCol>
							</CRow>
							<CRow>
								<CCol xl="12">
									<CFormGroup>
										<CLabel htmlFor="category">Status</CLabel>
										<div>
											<ReactSwitch checked={status} onChange={() => setStatus(!status)} />
										</div>
									</CFormGroup>
								</CCol>
							</CRow>
							<CRow>
								<CCol xs="8">
									<button onClick={editCard} className="btn btn-success" disabled={loading ? true : false} type="submit">
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

export default EditWhatGoesInsideCard;
