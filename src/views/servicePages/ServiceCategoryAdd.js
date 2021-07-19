import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
	// CBadge,
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	// CDataTable,
	CRow,
	// CPagination,
	CLink,
	CTabs,
	CContainer,
	CFormGroup,
	CLabel,
	CInputGroup,
	CInput,
	CForm,
	CInputFile
} from '@coreui/react';
import axios from 'axios';
import dateFormat from 'dateformat';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import ReactSwitch from 'react-switch';

const ServiceCategoryAdd = () => {
	const [serviceCategories, setServiceCategories] = useState([]);
	const [showAlertSuccess, setShowAlertSuccess] = useState(false);
	const [showAlertDanger, setShowAlertDanger] = useState(false);
	const jwtToken = sessionStorage.getItem('token');
	const [view, setView] = useState(0);
	const [title, setTitle] = useState('');
	const [link, setLink] = useState('');
	const [sortOrder, setSortOrder] = useState('');
	const [image, setImage] = useState(null);
	const [status, setStatus] = useState(false);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const onHandlerSubmit = () => {
		// alert(categoryId)
		setLoading(true);
		let formData = new FormData();
		formData.append('title', title);
		formData.append('link', link);
		formData.append('image', image);
		formData.append('sortOrder', sortOrder);
		formData.append('status', status ? 1 : 0);
		axios
			.post('http://markbran.in/apis/admin/service-category/',formData, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then((response) => {
				console.log(response.data.category);
				setShowAlertSuccess(true);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				setShowAlertDanger(true);
			})
			.finally(() => setLoading(false));
	};


	useEffect(() => {

	}, []);
	return (
		<CRow>
			<CCol xl={12}>
				<CCard>
					<CCardHeader>
						Add New Service Category


					</CCardHeader>
					<CCardBody>
						{showAlertSuccess ? (
							<div className="alert alert-success alert-dismissible fade show" role="alert">
								<strong>SAVED</strong> Your item has been saved successfully.
								<button onClick={() => setShowAlertSuccess(false)} type="button" className="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						) : null}
						{showAlertDanger ? (
							<div className="alert alert-warning alert-dismissible fade show" role="alert">
								<strong>Alert</strong> Something went wrong try again later !.
								<button onClick={() => setShowAlertDanger(false)} type="button" className="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						) : null}

						<CForm encType="multipart/form-data" onSubmit={onHandlerSubmit}>
							<br />
							{error && <p className="text-danger">{error}</p>}
							<CRow>
								<CCol xl="6">
									<CFormGroup>
										<CLabel htmlFor="shortItem">Category Ttile</CLabel>
										<CInputGroup className="mb-3">
											<CInput
												type="text"
												onChange={(e) => setTitle(e.target.value)}
												value={title}
												placeholder="Title"
												autoComplete="title"
											/>
										</CInputGroup>
									</CFormGroup>
								</CCol>
								<CCol xs="5">
									<CLabel htmlFor="category">Category Image</CLabel>
									<CInputGroup className="mb-3">
										<CLabel htmlFor="categoryImage" variant="custom-file">
											Choose Image...
										</CLabel>
										{/* <Controller
                                                name="bannerImage"
                                                control={control}
                                                defaultValue={''}
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: "Image file is required"
                                                    },
                                                }}
                                                render={({ field }) => <CInputFile {...field} onChange={onChange} custom id="bannerImage" />}
                                            /> */}
										<CInputFile
											onChange={(e) => setImage(e.target.files[0])}
											custom
											id="categoryImage"
											type="file"
										/>
									</CInputGroup>
									{/* <CFormText className="help-block text-danger" color="red">{errors.categoryId && errors.categoryId.message}</CFormText> */}
								</CCol>
								<CCol xs="1">
									<img
										src={`${process.env.REACT_APP_BASE_URL}/${image}`}
										className="img-fluid"
										width="120px"
										alt=""
									/>
								</CCol>
							</CRow>
							<CRow>
								<CCol xl="6">
									<CFormGroup>
										<CLabel htmlFor="shortItem">Link</CLabel>
										<CInputGroup className="mb-3">
											<CInput
												type="text"
												onChange={(e) => setLink(e.target.value)}
												value={link}
												placeholder="Link"
												autoComplete="Link"
											/>
										</CInputGroup>
									</CFormGroup>
								</CCol>
								<CCol xl="6">
									<CFormGroup>
										<CLabel htmlFor="shortItem">Sort Order</CLabel>
										<CInputGroup className="mb-3">
											<CInput
												type="text"
												onChange={(e) => setSortOrder(e.target.value)}
												value={sortOrder}
												placeholder="Sort order"
												autoComplete="Sort Order"
											/>
										</CInputGroup>
									</CFormGroup>
								</CCol>

							</CRow>

							<CRow>
								<CCol xl="6">
									<CFormGroup>
										<CLabel htmlFor="category">Status</CLabel>
										<CInputGroup>
											<ReactSwitch onChange={() => setStatus(!status)} checked={status} />
										</CInputGroup>
									</CFormGroup>
								</CCol>
							</CRow>
							<CRow>
								<CCol xs="8">
									<button
										className="btn btn-success"
										disabled={loading ? true : false}
										type="submit"
									>
										{loading ? 'Loading...' : 'Add Category'}
									</button>
								</CCol>
							</CRow>
						</CForm>
					</CCardBody>
				</CCard>
			</CCol>
		</CRow>
	);
}

export default ServiceCategoryAdd;
