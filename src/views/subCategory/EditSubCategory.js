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
import { useHistory, useParams } from 'react-router';
import Switch from 'react-switch';
const axios = require('axios').default;

const EditSubCategory = () => {
	let subCategoryId = useParams();

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
	const [ subCategoryImage, setSubCategoryImage ] = useState('');
	const [ image, setImage ] = useState('');
	// const [ buttonText, setButtonText ] = useState('');
	const [ buttonLink, setButtonLink ] = useState('');
	const [ description, setDescription ] = useState('');

	let jwtToken = sessionStorage.getItem('token');

	//* description
	const descriptionOnChange = (e) => {
		setDescription(e.target.value);
	};
	//* button text

	//* button text
	const buttonLinkOnChange = (e) => {
		setButtonLink(e.target.value);
	};

	//* category image
	const subCategoryOnChange = (e) => {
		setSubCategoryImage(e.target.files[0]);
	};

	const onChangeIsFeatured = (e) => {
		setIsFeatured(e);
	};

	// const categoryOnChange = (e) => {
	//     setCategory(e.target.value);
	// }

	const onChangeCateId = (e) => {
		setCategoryId(e.target.value);
		// console.log(e);
		// console.log(categoryId);
	};

	//* get sub category
	const getSubCategoryAxios = () => {
		axios
			.get(`http://markbran.in/apis/admin/subcategory/${subCategoryId.id}`, {
				headers: {
					'auth-token': jwtToken
				}
			})
			.then(function(response) {
				setTitle(response.data.subcategory.title);
				setIsFeatured(response.data.subcategory.status);
				setCategoryId(response.data.subcategory.categoryId);
				setDescription(response.data.subcategory.description);
				setSubCategoryImage(response.data.subcategory.image);
				// setButtonText(response.data.subCategory.buttonText);
				setButtonLink(response.data.subcategory.buttonLink);
				console.log(response.data);
			})
			.catch(function(error) {
				// handle error
				// console.log('error', error);
				// setError(error);
			});
	};

	//* get category
	const axiosCategories = () => {
		axios
			.get('http://markbran.in/apis/admin/category', {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				// console.log(response.data);
				setCategories(response.data.categories);
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			});
	};

	useEffect(() => {
		getSubCategoryAxios();
		axiosCategories();
		// if (categoryState) {
		// 	setValue('subCategory', subCategory.title);
		// }
	}, []);

	const handleSubmit = () => {
		const formData = new FormData();
		formData.append('status', isFeatured?1:0);
		formData.append('categoryId', categoryId);
		formData.append('title', title);
		formData.append('image', image);
		// formData.append('buttonText', buttonText);
		formData.append('buttonLink', buttonLink);
		formData.append('description', description);

		setError(null);
		setLoading(true);

		axios
			.patch(`http://markbran.in/apis/admin/subcategory/${subCategoryId.id}`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then((response) => {
				setLoading(false);
				history.push('/sub-categories');
			})
			.catch((err) => {
				setLoading(false);
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
						<CCardHeader>Add Category</CCardHeader>
						<CCardBody>
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
												value={categoryId}
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
								<CCol xs="1">
									<img
										src={`${process.env.REACT_APP_BASE_URL}/${subCategoryImage}`}
										className="img-fluid"
										alt="CurrentImage"
									/>
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
								{/* <CCol xl="6">
										<CFormGroup>
											<CLabel htmlFor="Button Text">Button Text</CLabel>
											<CInputGroup>
												<CInput
													type="text"
													onChange={e => setButtonText(e.target.value)}
													value={buttonText}
													placeholder="Button Text"
													autoComplete="Button Text"
												/>
											</CInputGroup>
										</CFormGroup>
									</CCol> */}
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
										<CInputGroup>
											<Switch onChange={onChangeIsFeatured} checked={isFeatured} />
										</CInputGroup>
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
										{loading ? 'Loading...' : 'Update Category'}
									</button>
								</CCol>
							</CRow>
						</CCardBody>
					</CCard>
				</CCol>
			</CRow>
		</Fragment>
	);
};

export default EditSubCategory;
