import React, { useEffect, useState, Fragment } from 'react';
import {
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CForm,
	CFormGroup,
	CFormText,
	CInput,
	CInputFile,
	CInputGroup,
	CLabel,
	CRow,
	CSelect,
	CTextarea
} from '@coreui/react';
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import Switch from 'react-switch';
const axios = require('axios').default;

const AddSubCategory = () => {
	const { control, handleSubmit, register, formState: { errors } } = useForm({ mode: 'all' });
	let history = useHistory();
	const [ error, setError ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const [ isFeatured, setIsFeatured ] = useState(false);
	const [ categoryState, setCategoryState ] = useState([]);
	const [ category, setCategory ] = useState('');
	const [ title, setTitle ] = useState('');
	const [ subCategory, setSubCategory ] = useState([]);
	const [ categoryId, setCategoryId ] = useState('');
	const [ categories, setCategories ] = useState([]);
	const [ image, setImage ] = useState('');
	const [ buttonText, setButtonText ] = useState('');
	const [ buttonLink, setButtonLink ] = useState('');
	const [ description, setDescription ] = useState('');

	let jwtToken = sessionStorage.getItem('token');

	//* description
	const descriptionOnChange = (e) => {
		setDescription(e.target.value);
	};
	//* button text
	const buttonTextOnChange = (e) => {
		setButtonText(e.target.value);
	};
	//* button text
	const buttonLinkOnChange = (e) => {
		setButtonLink(e.target.value);
	};

	//* category image
	// const subCategoryOnChange = (e) => {
	// 	setSubCategoryImage(e.target.files[0]);
	// };

	const onChangeIsFeatured = (e) => {
		setIsFeatured(e);
		// console.log(isFeatured);
	};

	const onChangeCateId = (e) => {
		setCategoryId(e.target.value);
	};

	// get category
	const axiosCategories = () => {
		axios
			.get('http://markbran.in/apis/admin/category', {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(e) {
				// console.log(e.data);
				setCategories(e.data.categories);
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			});
	};
	useEffect(() => {
		axiosCategories();
	}, []);

	const onHandlerSubmit = (value) => {
		// console.log('value', value);
		setError(null);
		setLoading(true);
		const formData = new FormData();
		formData.append('status', isFeatured ? 1 : 0);
		formData.append('categoryId', categoryId);
		formData.append('title', title);
		formData.append('image', image);
		// formData.append('buttonText', buttonText);
		formData.append('buttonLink', buttonLink);
		formData.append('description', description);

		axios
			.post('http://markbran.in/apis/admin/subcategory', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					'auth-token': jwtToken
				}
			})
			.then((response) => {
				setLoading(false);
				// setUserSession(response.data.token, response.data.user);
				history.push('/sub-categories');
				// console.log(response);
			})
			.catch((err) => {
				setLoading(false);
				// console.log(err.response);
				if (err.response && err.response.data.message) {
					setError(err.response.data.message);
				} else {
					setError('Something went wrong!');
				}
			});
	};

	return (
		<Fragment>
			<CRow>
				<CCol xs="12" sm="12">
					<CCard>
						<CCardHeader>Add Sub Category</CCardHeader>
						<CCardBody>
							<CForm onSubmit={handleSubmit(onHandlerSubmit)}>
								<br />
								{error && <p className="text-danger">{error}</p>}
								<CRow>
									<CCol xs="6">
										<CFormGroup>
											<CLabel htmlFor="category">Category</CLabel>
											<CInputGroup className="mb-3">
												<CSelect
													custom
													name="categoryId"
													onChange={onChangeCateId}
													id="categoryId"
												>
													<option value="">Select Category</option>
													{categories.map((item) => (
														<option key={item.id} value={item.id}>
															{item.title}
														</option>
													))}
												</CSelect>
											</CInputGroup>
											<CFormText className="help-block text-danger" color="red">
												{errors.categoryId && errors.categoryId.message}
											</CFormText>
										</CFormGroup>
									</CCol>
								</CRow>
								<CRow>
								<CCol xs="6">
									<CFormGroup>
										<CLabel htmlFor="category">Sub Category</CLabel>
										<CInputGroup className="mb-3">
											<CInput value={title} onChange={(e) => setTitle(e.target.value)} />
										</CInputGroup>
									</CFormGroup>
								</CCol>
									<CCol xs="5">
										<CLabel htmlFor="category">Sub Category Image</CLabel>
										<CInputGroup className="mb-3">
											<CLabel htmlFor="categoryImage" variant="custom-file">
												Choose image...
											</CLabel>
											<CInputFile
												onChange={(e) => setImage(e.target.files[0])}
												custom
												id="categoryImage"
												type="file"
											/>
										</CInputGroup>
									</CCol>

									<CCol xs="1">
										{image && (
											<img
												src={URL.createObjectURL(image)}
												className="img-fluid"
												alt="SelectedImage"
											/>
										)}
									</CCol>
								</CRow>
								<CRow>
									<CCol xl="6">
										<CFormGroup>
											<CLabel htmlFor="Button Text">Button Text</CLabel>
											<CInputGroup>
												<CInput
													type="text"
													onChange={buttonTextOnChange}
													value={buttonText}
													placeholder="Button Text"
													autoComplete="Button Text"
												/>
											</CInputGroup>
										</CFormGroup>
									</CCol>
									<CCol xl="6">
										<CFormGroup>
											<CLabel htmlFor="Button Link">Button Link</CLabel>
											<CInputGroup>
												<CInput
													type="text"
													onChange={buttonLinkOnChange}
													value={buttonLink}
													placeholder="Button Link"
													autoComplete="Button Link"
												/>
											</CInputGroup>
										</CFormGroup>
									</CCol>
								</CRow>
								<CRow>
									<CCol xl="12">
										<CFormGroup>
											<CLabel htmlFor="category">Description</CLabel>
											<CInputGroup>
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
									<CCol xl="8">
										<CFormGroup>
											<CLabel htmlFor="category">Status</CLabel>
											<CInputGroup className="mb-3">
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
											{loading ? 'Loading...' : 'Add Sub Category'}
										</button>
									</CCol>
								</CRow>
							</CForm>
						</CCardBody>
					</CCard>
				</CCol>
			</CRow>
		</Fragment>
	);
};

export default AddSubCategory;
