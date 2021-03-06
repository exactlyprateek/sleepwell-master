import React, { useEffect, useState, Fragment } from 'react';
import {
	// CButton,
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CForm,
	CFormGroup,
	CInput,
	CInputFile,
	CInputGroup,
	CLabel,
	CRow,
	CTextarea
} from '@coreui/react';
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Switch from 'react-switch';
import { Multiselect } from 'multiselect-react-dropdown';

const axios = require('axios').default;

const EditComfortBanner = () => {
	let bannerId = useParams();
	// console.log(bannerId);
	const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });

	let history = useHistory();
	const [ error, setError ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const [ bannerImage, setBannerImage ] = useState('');
	const [ sortOrder, setSortOrder ] = useState('');
	// const [content, setContent]         = useState('');
	const [ stateArray, setStateArray ] = useState();
	const [ banner, setBanner ] = useState([]);
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ bannerButtonText, setBannerButtonText ] = useState('');
	const [ bannerButtonLink, setBannerButtonLink ] = useState('');
	const [ isFeatured, setIsFeatured ] = useState(true);
	const [ states, setStates ] = useState([]);

	const jwtToken = sessionStorage.getItem('token');

	//* get banner
	const getBannerAxios = () => {
		axios
			.get(`http://markbran.in/apis/admin/comfort/banner/${bannerId.id}`, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(res) {
				// handle success
				console.log(res);
				setBanner(res.data.banner);
			})
			.catch(function(error) {
				if (error.response && error.response.data.message) setError(error.response.data.message);
			});
	};
	useEffect(
		() => {
			axiosGetState();
			getBannerAxios();
			setSortOrder(banner.soortOrder);
			setStates(banner.states);
			setSortOrder(banner.sortOrder);
			// setContent(banner.content);
			// console.log(banner.image);
			setIsFeatured(banner.status);
			setTitle(banner.title);
			setDescription(banner.description);
			setBannerButtonText(banner.buttonText);
			setBannerButtonLink(banner.buttonLink);
		},
		[ banner.sortOrder, banner.status, banner.title, banner.description, banner.buttonText, banner.buttonLink ]
	);
	const handleStateSelect = (e) => {
		setStates(e.map((i, idx) => i.id.toString()));
		console.log(states);
	};
	const onChangeIsFeatured = (e) => {
		setIsFeatured(e);
	};
	//* title
	const titleOnChange = (e) => {
		setTitle(e.target.value);
	};
	//* banner button link
	const bannerButtonLinkOnChange = (e) => {
		setBannerButtonLink(e.target.value);
	};
	//* banner button text
	const bannerButtonTextOnChange = (e) => {
		setBannerButtonText(e.target.value);
	};
	//* description
	const descriptionOnChange = (e) => {
		setDescription(e.target.value);
	};
	//* banner
	const bannerOnChange = (e) => {
		setBannerImage(e.target.files[0]);
	};
	//* Sort Order
	const sortOrderOnChange = (e) => {
		setSortOrder(e.target.value);
	};
	//* content
	// const contentOnChange = (e) => {
	//     setContent(e.target.value);
	// }
	const axiosGetState = () => {
		axios
			.get('http://markbran.in/apis/admin/state', {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				console.log(response.data.states);
				// { name: 'Srigar', id: 1 }, { name: 'Sam', id: 2 }
				setStateArray(response.data.states);
			})
			.catch(function(error) {
				// console.log(error.response);
				if (error.response && error.response.data.message) {
					setError(error.response.data.message);
				}
			});
	};
	const onHandlerSubmit = (e) => {
		e.preventDefault();
		setError(null);
		setLoading(true);

		const formData = new FormData();
		formData.append('image', bannerImage);
		formData.append('sortOrder', sortOrder);
		formData.append('title', title);
		formData.append('description', description);
		formData.append('status', isFeatured);
		formData.append('states', states);
		// formData.append('content', content);
		// console.log(formData);
		// console.log(shortOrder);

		axios
			.patch(`http://markbran.in/apis/admin/comfort/banner/${bannerId.id}`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then((response) => {
				setLoading(false);
				history.push('/comfort-banner');
				// console.log(response);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
				if (err.response) {
					if (err.response.data.message) {
						setError(err.response.data.message);
					} else {
						setError('Something went wrong!');
					}
				} else {
					setError('Something went wrong!');
				}
			})
			.finally(() => setLoading(false));
	};
	// console.log(errors);
	return (
		<div>
			<CRow>
				<CCol xs="12" sm="12">
					<CCard>
						<CCardHeader>Edit Banner</CCardHeader>
						<CCardBody>
							<CForm encType="multipart/form-data" onSubmit={onHandlerSubmit}>
								<br />
								{error && <p className="text-danger">{error}</p>}
								<CRow>
									<CCol xl="6">
										<CFormGroup>
											<CLabel htmlFor="shortItem">Title</CLabel>
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
										<CLabel htmlFor="category">Banner</CLabel>
										<CInputGroup className="mb-3">
											<CLabel htmlFor="bannerImage" variant="custom-file">
												Choose banner...
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
											<CInputFile onChange={bannerOnChange} custom id="bannerImage" type="file" />
										</CInputGroup>
										{/* <CFormText className="help-block text-danger" color="red">{errors.categoryId && errors.categoryId.message}</CFormText> */}
									</CCol>
									<CCol xs="1">
										<img
											src={`${process.env.REACT_APP_BASE_URL}/${banner.image}`}
											className="img-fluid"
											width="120px"
											alt=""
										/>
									</CCol>
								</CRow>
								<CRow>
									{/* <CCol xl="6">
										<CFormGroup>
											<CLabel htmlFor="shortItem">Button Text</CLabel>
											<CInputGroup className="mb-3">
												<CInput
													type="text"
													onChange={bannerButtonTextOnChange}
													value={bannerButtonText}
													placeholder="Button Text"
													autoComplete="Button Text"
												/>
											</CInputGroup>
										</CFormGroup>
									</CCol>
									<CCol xl="6">
										<CFormGroup>
											<CLabel htmlFor="shortItem">Button Link</CLabel>
											<CInputGroup className="mb-3">
												<CInput
													type="text"
													onChange={bannerButtonLinkOnChange}
													value={bannerButtonLink}
													placeholder="Button Link"
													autoComplete="Button Link"
												/>
											</CInputGroup>
										</CFormGroup>
									</CCol> */}
									<CCol xs="6">
										<CFormGroup>
											<CLabel htmlFor="category">Select State</CLabel>
											<CInputGroup className="mb-3">
											{stateArray && states?
											
												<Multiselect
												options={stateArray} // Options to display in the dropdown
												selectedValues={stateArray.filter((i,index) => ( states.toString().includes(i.id) ))} // Preselected value to persist in dropdown
												onSelect={(e) => handleStateSelect(e)} // Function will trigger on select event
												onRemove={(e) => handleStateSelect(e)} // Function will trigger on select event
												displayValue="state" // Property name to display in the dropdown options
												/>
												:"Loading States"}
											</CInputGroup>
										</CFormGroup>
									</CCol>
								</CRow>
								<CRow>
									<CCol xl="6">
										<CFormGroup>
											<CLabel htmlFor="shortItem">Sort Order</CLabel>
											<CInputGroup className="mb-3">
												{/* <Controller
                                                    name="shortOrder"
                                                    control={control}
                                                    render={({ field }) => <CInput
                                                        {...field}
                                                        type="text" placeholder="Sort Order" autoComplete="Sort Order"
                                                    /> }
                                                /> */}
												<CInput
													type="text"
													onChange={sortOrderOnChange}
													value={sortOrder}
													placeholder="Sort Order"
													autoComplete="Sort Order"
												/>
											</CInputGroup>
										</CFormGroup>
									</CCol>
								</CRow>
								<CRow>
									<CCol xl="12">
										<CFormGroup>
											<CLabel htmlFor="shortItem">Description</CLabel>
											<CInputGroup className="mb-3">
												{/* <CInput type="text" onChange={shortOrderOnChange} value={shortOrder} placeholder="Sort Order" autoComplete="Sort Order" /> */}
												<CTextarea
													// component="textarea"
													id="content"
													rows="3"
													onChange={descriptionOnChange}
													value={description}
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
												<Switch onChange={onChangeIsFeatured} checked={isFeatured} />
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
											{loading ? 'Loading...' : 'Edit Banner'}
										</button>
									</CCol>
								</CRow>
							</CForm>
						</CCardBody>
					</CCard>
				</CCol>
			</CRow>
		</div>
	);
};

export default EditComfortBanner;
