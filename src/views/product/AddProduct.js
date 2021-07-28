import React, { useEffect, useState } from 'react';
import {
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CFormGroup,
	CInput,
	CLabel,
	CSelect,
	CRow,
	CInputGroup,
	CInputFile,
	CTextarea,
	CFormText,
	CForm,
	CButton
	// CSwitch
} from '@coreui/react';
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import Switch from 'react-switch';
// import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Multiselect } from 'multiselect-react-dropdown';
import { Redirect, useHistory, useParams } from 'react-router-dom';

const axios = require('axios').default;

const schema = yup.object().shape({
	categoryId1: yup.string().required()
	// categoryId: yup.string().matches(/^[aA-zZ\s \\ ]+$/, "Only alphabets are allowed for this field ").required(),
});

const AddProduct = () => {
	const [ page, setPage ] = useState(1);
	const [ errors, setErrors ] = useState('');
	const [ alertSuccess, setAlertSuccess ] = useState(false);
	const [ alertDanger, setAlertDanger ] = useState(false);
	const [ selectedImages, setSelectedImages ] = useState([]);
	const [ giftDetail, setGiftDetail ] = useState('');
	//GET
	const [ categories, setCategories ] = useState([]);
	const [ benifits, setBenifits ] = useState([]);
	const [ product, setProduct ] = useState([]);
	const [ materials, setMaterials ] = useState([]);
	const [ statesArray, setStatesArray ] = useState([]);
	const [ advantages, setAdvantages ] = useState([]);
	const [ productAdvantageImage, setProductAdvantageImage ] = useState('');
	const [ productAdvantageVideo, setProductAdvantageVideo ] = useState('');
	const [ subCategories, setSubCategories ] = useState([]);
	const [ subSubCategories, setSubSubCategories ] = useState([]);
	const [ productImages, setProductImages ] = useState([]);
	//First Form
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ discount, setDiscount ] = useState('');
	const [ category, setCategory ] = useState('');
	const [ subCategory, setSubCategory ] = useState('');
	const [ subSubCategory, setSubSubCategory ] = useState('');
	const [ isActive, setIsActive ] = useState(true);

	//Second Form
	const [ advantageImage, setAdvantageImage ] = useState('');
	const [ advantageVideo, setAdvantageVideo ] = useState('');
	const [ productId, setProductId ] = useState(null);
	const [ productAdvantages, setProductAdvantages ] = useState([]);
	const [ productBenifits, setProductBenifits ] = useState([]);
	const [ productStates, setProductStates ] = useState([]);
	const [ productMaterials, setProductMaterials ] = useState([]);
	// const [ thickness, setThickness ] = useState('');
	//Third Form

	const [ thumbnailImage, setThumbnailImage ] = useState('');
	const [ productBanner, setProductBanner ] = useState('');
	const [ bannerImage, setBannerImage ] = useState('');
	const [ productThumbnail, setProductThumbnail ] = useState('');

	const [ categoryId, setCategoryId ] = useState('');
	const [ bestSeller, setBestSeller ] = useState(true);

	const jwtToken = sessionStorage.getItem('token');

	const onChangeIsActive = (e) => {
		setIsActive(e);
	};
	const onChangeBestSeller = (e) => {
		setBestSeller(e);
	};

	// get category
	const getCategories = () => {
		console.log();
		axios
			.get(`http://markbran.in/apis/admin/category`, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				// console.log(response.data.categories);
				setCategories(response.data.categories);
			})
			.catch(function(error) {
				// handle error
				console.log(error);
				setErrors(error.toLocaleString());
			});
	};
	// get sub category
	const getSubCategories = () => {
		console.log();
		axios
			.get(`http://markbran.in/apis/admin/subCategory`, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				// console.log(response.data.subcategories);
				setSubCategories(response.data.subcategories);
			})
			.catch(function(error) {
				// handle error
				setErrors(error.toLocaleString());
				console.log(error);
			});
	};
	const getSubSubCategories = () => {
		axios
			.get(`http://markbran.in/apis/admin/subSubCategory`, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				// console.log(response.data.subSubCategories);
				setSubSubCategories(response.data.subSubCategories);
			})
			.catch(function(error) {
				// handle error
				setErrors(error.toLocaleString());
				console.log(error);
			});
	};
	const getAdvantages = () => {
		axios
			.get(`http://markbran.in/apis/admin/advantage/`, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				// console.log(response.data.subSubCategories);
				setAdvantages(response.data.advantages);
			})
			.catch(function(error) {
				// handle error
				setErrors(error.toLocaleString());
				console.log(error);
			});
	};

	const getStatesArray = () => {
		axios
			.get(`http://markbran.in/apis/admin/state/`, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				// console.log(response.data.subSubCategories);
				setStatesArray(response.data.states);
			})
			.catch(function(error) {
				// handle error
				setErrors(error.toLocaleString());
				console.log(error);
			});
	};
	const getBenefits = () => {
		console.log(categoryId);
		axios
			.get(`http://markbran.in/apis/admin/benifit/`, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				// console.log(response.data.subSubCategories);
				setBenifits(response.data.benifits);
			})
			.catch(function(error) {
				// handle error
				setErrors(error.toLocaleString());
				console.log(error);
			});
	};
	const getMaterials = () => {
		console.log(categoryId);
		axios
			.get(`http://markbran.in/apis/admin/material/`, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				// console.log(response.data.subSubCategories);
				setMaterials(response.data.materials);
			})
			.catch(function(error) {
				// handle error
				setErrors(error.toLocaleString());
				console.log(error);
			});
	};
	
	const addProduct = () => {
		let formData = new FormData();
		formData.append('cid', category);
		formData.append('scid', subCategory);
		formData.append('sscid', subSubCategory);
		formData.append('title', title);
		formData.append('banner', bannerImage ? bannerImage : productBanner);
		formData.append('thumbnail', thumbnailImage ? thumbnailImage : productThumbnail);
		formData.append('discount', "0");
		formData.append('description', description);
		formData.append('status', isActive ? 1 : 0);

		axios
			.post(`http://markbran.in/apis/admin/product/details/`, formData, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				console.log(response.data);
				// setProductId(response.data.productId);
				setAlertSuccess('Saved Successfully');
				setProductId(response.data.productId);
				// setPage(2);

				// setCategories(response.data.categories);
			})
			.catch(function(error) {
				// handle error
				setErrors(error.toLocaleString());
				console.log(error);
			});
			
	};
	const descriptionOnChange = (e) => {
		setDescription(e.target.value);
	};

	const bannerOnChange = (e) => {
		setSelectedImages(Array.from(e.target.files));
		console.log(e.target.files);
	};
	const handleAdvantages = (advantages) => {
		console.log(advantages.map((i) => i.id));
		setProductAdvantages(advantages.map((i) => i.id));
		// let formData = new FormData();
		// formData.append('pid', productId);
		// formData.append('advantages', productAdvantages.toLocaleString());

		// console.log(ar);
	};
	const handleBenifits = (bnf) => {
		setProductBenifits(bnf.map((i) => i.id));
		// console.log(ar);
	};
	const handleMaterials = (mtr) => {
		setProductMaterials(mtr.map((i) => i.id));
		// console.log(ar);
	};

	const handleStates = (states) => {
		setProductStates(states.map((i) => i.id));
		// console.log(ar);
	};
	const saveStates = () => {
		let statesData = new FormData();
		statesData.append('pid', productId);
		statesData.append('stateIds', productStates);
		axios
			.post(`http://markbran.in/apis/admin/product/states/`, statesData, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				console.log(response.data);
				setAlertSuccess('saved');
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	const saveAdvantages = () => {
		let advantagesData = new FormData();
		// advantagesData.append('pid', productId);
		console.log(productAdvantages.map(i => i.toString()));
		advantagesData.append('pid', productId);
		advantagesData.append('advantageIds', productAdvantages.map(i => i.toString()));
		advantagesData.append('image', advantageImage ? advantageImage : productAdvantageImage);
		advantagesData.append('video', advantageVideo ? advantageVideo : productAdvantageVideo);

		axios
			.post(`http://markbran.in/apis/admin/product/advantages/`, advantagesData, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				console.log(response.data);
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	const saveMaterials = () => {
		let materialData = new FormData();
		// materialData.append('pid', productId);
		materialData.append('pid', productId);
		materialData.append('materialIds', productMaterials);

		axios
			.post(`http://markbran.in/apis/admin/product/materials/`, materialData, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				console.log(response.data);
				getMaterials();
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	const saveBenifits = () => {
		let benifitsData = new FormData();
		// benifitsData.append('pid', productId);
		benifitsData.append('pid', productId);
		benifitsData.append('benifitIds', productBenifits);

		axios
			.post(`http://markbran.in/apis/admin/product/benifits/`, benifitsData, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				console.log(response.data);
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	const saveImages = () => {
		let formData = new FormData();
		// formData.append('pid', productId);
		formData.append('pid', productId);
		for (let i = 0; i < selectedImages.length; i++) {
			formData.append('images', selectedImages[i]);
		}

		axios
			.post(`http://markbran.in/apis/admin/product/images/`, formData, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				console.log(response.data);
				setAlertSuccess('saved');
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	const saveMoreDetails = () => {
		saveStates();
		saveAdvantages();
		saveMaterials();
		saveBenifits();
		saveImages();
	};
	const saveBenifitMaterialStates = () => {
		saveStates();
		// saveAdvantages();
		saveMaterials();
		saveBenifits();
		// saveImages();
	};
	useEffect(
		() => {
			getCategories();
			getSubCategories();
			getSubSubCategories();
			getAdvantages();
			getBenefits();
			getStatesArray();
			getMaterials();
			// axiosSubCategories();
			// setValue("categoryId", categoryId)
			// console.log(getValues("categoryId"));
		},
		[ productId ]
	);
	const [ viewAll, setViewAll ] = useState(false);
	if (viewAll) {
		return <Redirect to="/products/" />;
	}
	return (
		<CRow>
			<CCol xs="12" sm="12">
				<CCard>
					<CCardHeader>
						Add New Product
						<CButton
							className="btn-success mx-2"
							style={{ float: 'right' }}
							variant="success"
							onClick={() => setViewAll(true)}
						>
							View All Products
						</CButton>
					
					</CCardHeader>

					{alertSuccess ? (
						<div className="alert alert-success alert-dismissible fade show" role="alert">
							<strong>{alertSuccess}</strong> .
							<button
								onClick={() => setAlertSuccess('')}
								type="button"
								className="close"
								data-dismiss="alert"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
					) : null}
					{alertDanger ? (
						<div className="alert alert-warning alert-dismissible fade show" role="alert">
							<strong>{alertDanger}</strong>.
							<button
								onClick={() => setAlertDanger('')}
								type="button"
								className="close"
								data-dismiss="alert"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
					) : null}

					<CCardBody>
						<ul className="nav">
							<li className="nav-item">
								<button
									onClick={() => setPage(1)}
									className={`nav-link active btn btn-${page === 1 ? `primary` : `secondary`} mx-2`}
								>
									Edit basic Details
								</button>
							</li>
							<li className="nav-item">
								<button
									onClick={() => setPage(2)}
									className={`nav-link active btn btn-${page === 2 ? `primary` : `secondary`} mx-2`}
								>
									Advantages
								</button>
							</li>
							<li className="nav-item">
								<button
									onClick={() => setPage(3)}
									className={`nav-link active btn btn-${page === 3 ? `primary` : `secondary`} mx-2`}
								>
									Images
								</button>
							</li>
							<li className="nav-item">
								<button
									onClick={() => setPage(4)}
									className={`nav-link active btn btn-${page === 4 ? `primary` : `secondary`} mx-2`}
								>
									Benifits, Materials and States
								</button>
							</li>
							{/* <li className="nav-item">
									{' '}
									<button
										onClick={() => setPage(3)}
										className={`nav-link active btn btn-${page === 3
											? `primary`
											: `secondary`} mx-2`}
									>
										Product Details 2
									</button>
								</li> */}
						</ul>
						{page === 1 && (
							<React.Fragment>
								<CRow>
									{/* <CFormText className="help-block text-danger" color="red">
										{errors}
									</CFormText> */}
								</CRow>
								<CRow className="mt-4">
									<CCol xs="6">
										<CFormGroup>
											<CLabel>Product Title</CLabel>
											<CInput
												id="title"
												value={title}
												onChange={(e) => setTitle(e.target.value)}
												placeholder="Enter your product"
												required
											/>
										</CFormGroup>
									</CCol>
									<CCol xs="6">
										<CFormGroup>
											<CLabel htmlFor="categories">Category</CLabel>
											<CSelect onChange={(e) => setCategory(e.target.value)}>
												{categories.map((item) => (
													<option key={item.id} value={item.id}>
														{item.title}
													</option>
												))}
											</CSelect>
										</CFormGroup>
									</CCol>
									<CCol xs="6">
										<CFormGroup>
											<CLabel htmlFor="categories">Sub Category</CLabel>
											<CSelect onChange={(e) => setSubCategory(e.target.value)}>
												{subCategories.map((item) => (
													<option key={item.id} value={item.id}>
														{item.title}
													</option>
												))}
											</CSelect>
										</CFormGroup>
									</CCol>
									<CCol xs="6">
										<CFormGroup>
											<CLabel>Sub Sub Category</CLabel>
											<CSelect onChange={(e) => setSubSubCategory(e.target.value)}>
												{subSubCategories.map((item) => (
													<option key={item.id} value={item.id}>
														{item.title}
													</option>
												))}
											</CSelect>
										</CFormGroup>
									</CCol>

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
									{/* <CCol xs="6">
										<CFormGroup>
											<CLabel htmlFor="name">Discount</CLabel>
											<CInput
												id="name"
												placeholder="Enter your Product Discount"
												onChange={(e) => setDiscount(e.target.value)}
												value={discount}
											/>
										</CFormGroup>
									</CCol> */}

									<CCol xs="6">
										<CLabel>Product Banner</CLabel>
										<div className="my-2" style={{ display: 'flex' }}>
											{productBanner && (
												<span>
													<img
														src={`${process.env.REACT_APP_BASE_URL}/${productBanner}`}
														className="img-fluid p-1"
														width="120px"
														alt=""
													/>
												</span>
											)}
										</div>
										<CInputGroup className="mb-3">
											<CLabel htmlFor="bannerImage" variant="custom-file">
												Choose Banner image...
											</CLabel>
											<CInputFile
												multiple
												onChange={(e) => setBannerImage(e.target.files[0])}
												custom
												id="bannerImage"
												type="file"
											/>
											<div style={{ display: 'flex' }}>
												{bannerImage && (
													<img
														src={URL.createObjectURL(bannerImage)}
														className="img-fluid p-1"
														width="120px"
														alt=""
													/>
												)}
											</div>
										</CInputGroup>
									</CCol>
									<CCol xs="6">
										<CLabel>Product Thumbnail</CLabel>
										<div className="my-2" style={{ display: 'flex' }}>
											{productThumbnail && (
												<span>
													<img
														src={`${process.env.REACT_APP_BASE_URL}/${productThumbnail}`}
														className="img-fluid p-1"
														width="120px"
														alt=""
													/>
												</span>
											)}
										</div>
										<CInputGroup className="mb-3">
											<CLabel htmlFor="bannerImage" variant="custom-file">
												Choose Thumbnail image...
											</CLabel>
											<CInputFile
												multiple
												onChange={(e) => setThumbnailImage(e.target.files[0])}
												custom
												id="bannerImage"
												type="file"
											/>
											<div style={{ display: 'flex' }}>
												{thumbnailImage && (
													<img
														src={URL.createObjectURL(thumbnailImage)}
														className="img-fluid p-1"
														width="120px"
														alt=""
													/>
												)}
											</div>
										</CInputGroup>
									</CCol>
									<CCol xl="6">
										<CFormGroup>
											<CLabel htmlFor="is_active">Status</CLabel>
											<CInputGroup>
												{/* <CSwitch onChange={switch2} checked={switchState} className={'mx-1'} color={'success'} defaultChecked variant="opposite" /> */}
												<Switch onChange={onChangeIsActive} checked={isActive} />
											</CInputGroup>
										</CFormGroup>
									</CCol>
									<CCol xs="8">
										<button onClick={addProduct} className="btn btn-success" type="button">
											Save Changes
										</button>
									</CCol>
								</CRow>
							</React.Fragment>
						)}
						{page === 2 && (
							<CRow className="mt-4">
								<CCol xs="6">
									<div className="my-2" style={{ display: 'flex' }}>
										{productAdvantageImage && (
											<span>
												<CLabel>Current Image</CLabel>
												<img
													src={`${process.env.REACT_APP_BASE_URL}/${productAdvantageImage}`}
													className="img-fluid p-1"
													width="120px"
													alt=""
												/>
											</span>
										)}
									</div>
									<CInputGroup className="mb-3">
										<CLabel htmlFor="bannerImage" variant="custom-file">
											Choose image...
										</CLabel>
										<CInputFile
											onChange={(e) => setAdvantageImage(e.target.files[0])}
											custom
											id="bannerImage"
											type="file"
										/>
										<div style={{ display: 'flex' }}>
											{advantageImage && (
												<img
													src={URL.createObjectURL(advantageImage)}
													className="img-fluid p-1"
													width="120px"
													alt=""
												/>
											)}
										</div>
									</CInputGroup>
								</CCol>
								<CCol xs="6">
									<CLabel>Current Video</CLabel>
									<div className="my-2" style={{ display: 'flex' }}>
										{productAdvantageVideo && (
											<span>
												<video
													controls="true"
													src={`${process.env.REACT_APP_BASE_URL}/${productAdvantageVideo}`}
													className="img-fluid p-1"
													width="120px"
													alt=""
												/>
											</span>
										)}
									</div>
									<CInputGroup className="mb-3">
										<CLabel htmlFor="bannerImage" variant="custom-file">
											Choose Video...
										</CLabel>
										<CInputFile
											onChange={(e) => setAdvantageVideo(e.target.files[0])}
											custom
											id="bannerImage"
											type="file"
										/>
										<div style={{ display: 'flex' }}>
											{advantageVideo && (
												<video
													controls="true"
													autoPlay="true"
													src={URL.createObjectURL(advantageVideo)}
													className="img-fluid p-1"
													width="120px"
													alt=""
												/>
											)}
										</div>
									</CInputGroup>
								</CCol>
								<CCol xs="6">
									<CFormGroup>
										<CLabel htmlFor="ccyear">Select Advantages</CLabel>
										{/* //Multiselect */}
										<CInputGroup className="mb-3">
											{advantages ? (
												<Multiselect
													options={advantages} // Options to display in the dropdown
													selectedValues={advantages.filter((i) =>
														productAdvantages.includes(i.id)
													)} // Preselected value to persist in dropdown
													onSelect={(e) => handleAdvantages(e)} // Function will trigger on select event
													displayValue="advantage" // Property name to display in the dropdown options
												/>
											) : (
												'Loading Advantages'
											)}
										</CInputGroup>
									</CFormGroup>
								</CCol>
								<CCol xs="8">
									<button onClick={saveAdvantages} className="btn btn-success" type="button">
										Save Advantage Data
									</button>
								</CCol>
							</CRow>
						)}
						{page === 3 && (
							<CRow className="mt-4">
								<CCol xs="6">
									<CLabel>Current Images</CLabel>
									<div className="my-2" style={{ display: 'flex' }}>
										{productImages &&
											productImages.map((item, idx) => (
												<span>
													<img
														key={idx}
														src={`${process.env.REACT_APP_BASE_URL}/${item.image}`}
														className="img-fluid p-1"
														width="120px"
														alt=""
													/>
												</span>
											))}
									</div>
									<CInputGroup className="mb-3">
										<CLabel htmlFor="bannerImage" variant="custom-file">
											Choose image...
										</CLabel>
										<CInputFile
											multiple
											onChange={bannerOnChange}
											custom
											id="bannerImage"
											type="file"
										/>
										<div style={{ display: 'flex' }}>
											{selectedImages &&
												selectedImages.map((item) => (
													<img
														src={URL.createObjectURL(item)}
														className="img-fluid p-1"
														width="120px"
														alt=""
													/>
												))}
										</div>
									</CInputGroup>
								</CCol>

								<CCol xs="8">
									<button onClick={saveImages} className="btn btn-success" type="button">
										Save Images
									</button>
								</CCol>
							</CRow>
						)}
						{page === 4 && (
							<CRow className="pt-4">
								<CCol xs="6">
									<CFormGroup>
										<CLabel htmlFor="ccyear">Select Benifits</CLabel>
										{/* //Multiselect */}
										<CInputGroup className="mb-3">
											{benifits ? (
												<Multiselect
													options={benifits} // Options to display in the dropdown
													selectedValues={benifits.filter((i) =>
														productBenifits.includes(i.id)
													)} // Preselected value to persist in dropdown
													onSelect={(e) => handleBenifits(e)} // Function will trigger on select event
													displayValue="benifit" // Property name to display in the dropdown options
												/>
											) : (
												'Loading Benifits'
											)}
										</CInputGroup>
									</CFormGroup>
									{/* <button onClick={saveBenifits} className="btn btn-success" type="button">
										Save States
									</button> */}
								</CCol>
								<CCol xs="6">
									<CFormGroup>
										<CLabel htmlFor="ccyear">Select Materials</CLabel>
										{/* //Multiselect */}
										<CInputGroup className="mb-3">
											{materials ? (
												<Multiselect
													options={materials} // Options to display in the dropdown
													selectedValues={materials.filter((mat) =>
														productMaterials.includes(mat.id)
													)} // Preselected value to persist in dropdown
													onSelect={(e) => handleMaterials(e)} // Function will trigger on select event
													displayValue="title" // Property name to display in the dropdown options
												/>
											) : (
												'Loading Materials'
											)}
										</CInputGroup>
									</CFormGroup>
								</CCol>
								<CCol xs="6">
									<CFormGroup>
										<CLabel htmlFor="ccyear">Select States</CLabel>
										{/* //Multiselect */}
										<CInputGroup className="mb-3">
											{statesArray ? (
												<Multiselect
													options={statesArray} // Options to display in the dropdown
													selectedValues={statesArray.filter((i) =>
														productStates.includes(i.id)
													)} // Preselected value to persist in dropdown
													onSelect={(e) => handleStates(e)} // Function will trigger on select event
													displayValue="state" // Property name to display in the dropdown options
												/>
											) : (
												'Loading States'
											)}
										</CInputGroup>
									</CFormGroup>
								</CCol>

								<CCol xs="8" className="mt-4">
									<button
										onClick={saveBenifitMaterialStates}
										className="btn btn-success"
										type="button"
									>
										Save Benefits, Material and States
									</button>
								</CCol>
							</CRow>
						)}
						<CForm>
							<CRow />
						</CForm>
					</CCardBody>
				</CCard>
			</CCol>
		</CRow>
	);
};

export default AddProduct;
