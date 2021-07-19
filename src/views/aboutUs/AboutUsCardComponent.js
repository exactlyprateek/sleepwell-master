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
	CTextarea,
	CAlert
} from '@coreui/react';
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { yupResolver } from '@hookform/resolvers/yup';
// import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import axios from 'axios';
import ReactSwitch from 'react-switch';

const AboutUsCardComponent = () => {
	// const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });

	const [ status, setStatus ] = useState(false);
	const [ error, setError ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const [ success, setSuccess ] = useState(false);
	const [ id, setId ] = useState('');
	const [ description, setDescription ] = useState('');

	let jwtToken = sessionStorage.getItem('token');

	const handleDescription = (data) => {
		setDescription(data);
	};
	useEffect(() => {
		getSection();
	}, []);
	const getSection = () => {
		axios
			.get('http://markbran.in/apis/admin/aboutUsSection', {
				headers: {
					'auth-token': jwtToken
				}
			})
			.then((res) => {
				// setUserSession(response.data.token, response.data.user);
				// console.log(res.data.section);
				setDescription(res.data.section.description);
				setId(res.data.section.id);
				setStatus(res.data.section.status ? true : false);
			})
			.catch((err) => {
				// console.log(err.response.data.message);
				if (err.response && err.response.data.message) {
					setError(err.response.data.message);
				} else {
					setError('Something went wrong!');
				}
			})
			.finally(() => setLoading(false));
	};
	const handleSubmit = () => {
		const formData = new FormData();
		formData.append('status', status ? 1 : 0);
		formData.append('id', id);
		formData.append('description', description);
		setSuccess(false);

		setError(null);
		setLoading(true);

		axios
			.post('http://markbran.in/apis/admin/aboutUsSection', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					'auth-token': jwtToken
				}
			})
			.then((res) => {
				
				// setUserSession(response.data.token, response.data.user);
				// console.log(res);
				setSuccess(true);
				console.log(success);
				setLoading(false);
			})
			.catch((err) => {
				// console.log(err);
				setLoading(false);
				if (err.response && err.response.data.message) {
					setError(err.response.data.message);
				} else {
					setError('Something went wrong!');
				}
			});
	};

	return (
		<div>
			<CRow>
				<CCol xs="12" sm="12">
					<CForm>
						<br />
						<CRow>
							<CCol xs="6">
								<CFormGroup>
									<CLabel htmlFor="category">Description</CLabel>
									<CTextarea
										value={description}
										onChange={(e) => setDescription(e.target.value)}
										placeholder="Description"
									/>
								</CFormGroup>
								
							</CCol>
							{/* <CCol xs="6">
								<CFormGroup>
									<CLabel htmlFor="category">Id</CLabel>
									<CInput value={id} onChange={(e) => setId(e.target.value)} placeholder="Description" />
								</CFormGroup>
							</CCol> */}
							<CCol xs="6">
								<CFormGroup>
									<CLabel htmlFor="category">Status</CLabel>
									<div>
										<ReactSwitch checked={status} onChange={(e) => setStatus(e)} />
									</div>
								</CFormGroup>
							</CCol>
						</CRow>
						<CRow>
							<CCol xs="8">
								<button className="btn btn-success" disabled={loading ? true : false} onClick={handleSubmit}>
									{loading ? 'Loading...' : 'Save'}
								</button>
                                {error && <div style={{color:"red"}}>Something went wrong</div>}
								{success && <div style={{color:"green"}}>Saved</div>}
							</CCol>
                           
                                
						</CRow>
					</CForm>
				</CCol>
			</CRow>
		</div>
	);
};

export default AboutUsCardComponent;
