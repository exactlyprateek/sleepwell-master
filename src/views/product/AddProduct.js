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
	CForm
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
	const { register, formState: { errors } } = useForm({
		mode: 'all',
		resolver: yupResolver(schema)
	});

	const [ page, setPage ] = useState(1);
	const [ alertSuccess, setAlertSuccess ] = useState(false);
	const [ alertDanger, setAlertDanger ] = useState(false);
	const [ bannerImage, setBannerImage ] = useState();
	const [ giftDetail, setGiftDetail ] = useState('');
	//GET
	const [ categories, setCategories ] = useState([]);
	const [ benifits, setBenifits ] = useState([]);
	const [ materials, setMaterials ] = useState([]);
	const [ states, setStates ] = useState([]);
	const [ advantages, setAdvantages ] = useState([]);
	const [ subCategories, setSubCategories ] = useState([]);
	const [ subSubCategories, setSubSubCategories ] = useState([]);
	//First Form
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ discount, setDiscount ] = useState('');
	const [ category, setCategory ] = useState('');
	const [ subCategory, setSubCategory ] = useState('');
	const [ subSubCategory, setSubSubCategory ] = useState('');
	const [ isActive, setIsActive ] = useState(true);
	//Second Form
	const [ productId, setProductId ] = useState(null);
	const [ productAdvantages, setProductAdvantages ] = useState([]);
	const [ productBenifits, setProductBenifits ] = useState([]);
	const [ productStates, setProductStates ] = useState([]);
	const [ productMaterials, setProductMaterials ] = useState([]);
	// const [ thickness, setThickness ] = useState('');
	//Third Form

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
				console.log(error);
			});
	};
	const getStates = () => {
		axios
			.get(`http://markbran.in/apis/admin/state/`, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				// console.log(response.data.subSubCategories);
				setStates(response.data.states);
			})
			.catch(function(error) {
				// handle error
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
				console.log(error);
			});
	};
	const addProduct = () => {

		let formData = new FormData();
		formData.append('cid', category);
		formData.append('scid', subCategory);
		formData.append('sscid', subSubCategory);
		formData.append('title', title);
		formData.append('discount', discount);
		formData.append('description', description);
		formData.append('status', isActive ? 1 : 0);

		axios
			.post('http://markbran.in/apis/admin/product/details/', formData, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				console.log(response.data.productId);

				setAlertSuccess('Added Successfully now redirecting');
				// setPage(2);

				setProductId(response.data.productId);
				// setCategories(response.data.categories);
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			});
	};
	const descriptionOnChange = (e) => {
		setDescription(e.target.value);
	};
	const giftDetailOnChange = (e) => {
		setGiftDetail(e.target.value);
	};
	const bannerOnChange = (e) => {
		setBannerImage(e.target.files[0]);
	};
	const handleAdvantages = (advantages) => {
		setProductAdvantages(advantages.map((i) => i.id));
		let formData = new FormData();
		formData.append('pid', productId);
		formData.append('advantages', productAdvantages.toLocaleString());

		// console.log(ar);
	};
	const handleBenifits = (bnf) => {
		setProductBenifits(bnf.map((i) => i.id));
		// console.log(ar);
	};
	const handleStates = (states) => {
		setProductAdvantages(states.map((i) => i.id));
		// console.log(ar);
	};
	const handleMaterials = (mtr) => {
		setProductMaterials(mtr.map((i) => i.id));
		// console.log(ar);
	};
	useEffect(() => {
		getCategories();
		getSubCategories();
		getSubSubCategories();
		getAdvantages();
		getBenefits();
		getStates();
		getMaterials();

		// axiosSubCategories();
		// setValue("categoryId", categoryId)
		// console.log(getValues("categoryId"));
	}, []);

	if (productId) {
		return <Redirect to={`/edit-product/${productId}`} />;
	}

	return (
		<div>
			<CRow>
				<CCol xs="12" sm="12">
					<CCard>
						<CCardHeader>Add Product</CCardHeader>

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
							{/* <ul className="nav">
								<li className="nav-item">
									<button
										onClick={() => setPage(1)}
										className={`nav-link active btn btn-${page === 1
											? `primary`
											: `secondary`} mx-2`}
									>
										Add Product
									</button>
								</li>
								<li className="nav-item">
									<button
										onClick={() => setPage(2)}
										className={`nav-link active btn btn-${page === 2
											? `primary`
											: `secondary`} mx-2`}
									>
										Add Details
									</button>
								</li>
								<li className="nav-item">
									{' '}
									<button
										onClick={() => setPage(3)}
										className={`nav-link active btn btn-${page === 3
											? `primary`
											: `secondary`} mx-2`}
									>
										Product Details 2
									</button>
								</li>
							</ul> */}
							{page === 1 && (
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
											<CFormText className="help-block text-danger" color="red">
												{errors.categoryId && errors.categoryId.message}
											</CFormText>
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
											<CFormText className="help-block text-danger" color="red">
												{errors.categoryId && errors.categoryId.message}
											</CFormText>
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
											<CFormText className="help-block text-danger" color="red">
												{errors.categoryId && errors.categoryId.message}
											</CFormText>
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
									<CCol xs="6">
										<CFormGroup>
											<CLabel htmlFor="name">Discount</CLabel>
											<CInput
												id="name"
												placeholder="Enter your Product Discount"
												onChange={(e) => setDiscount(e.target.value)}
												value={discount}
											/>
										</CFormGroup>
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
											Save and Add more details
										</button>
									</CCol>
								</CRow>
							)}
							{page === 2 && (
								<CRow className="mt-4">
									<CCol xs="6">
										<CFormGroup>
											<CLabel htmlFor="ccyear">Select Advantages</CLabel>
											{/* //Multiselect */}
											<CInputGroup className="mb-3">
												{advantages ? (
													<Multiselect
														options={advantages} // Options to display in the dropdown
														// selectedValues={advantages.filter((i,index) => ( productAdvantages.includes(i.id) ))} // Preselected value to persist in dropdown
														onSelect={(e) => handleAdvantages(e)} // Function will trigger on select event
														displayValue="advantage" // Property name to display in the dropdown options
													/>
												) : (
													'Loading Advantages'
												)}
											</CInputGroup>
										</CFormGroup>
									</CCol>
									<CCol xs="6">
										<CFormGroup>
											<CLabel htmlFor="ccyear">Select Benifits</CLabel>
											{/* //Multiselect */}
											<CInputGroup className="mb-3">
												{benifits ? (
													<Multiselect
														options={benifits} // Options to display in the dropdown
														// selectedValues={advantages.filter((i,index) => ( productAdvantages.includes(i.id) ))} // Preselected value to persist in dropdown
														onSelect={(e) => handleBenifits(e)} // Function will trigger on select event
														displayValue="benifit" // Property name to display in the dropdown options
													/>
												) : (
													'Loading Benifits'
												)}
											</CInputGroup>
										</CFormGroup>
									</CCol>
									<CCol xs="6">
										<CFormGroup>
											<CLabel htmlFor="ccyear">Select Materials</CLabel>
											{/* //Multiselect */}
											<CInputGroup className="mb-3">
												{materials ? (
													<Multiselect
														options={materials} // Options to display in the dropdown
														// selectedValues={advantages.filter((i,index) => ( productAdvantages.includes(i.id) ))} // Preselected value to persist in dropdown
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
												{states ? (
													<Multiselect
														options={states} // Options to display in the dropdown
														// selectedValues={advantages.filter((i,index) => ( productAdvantages.includes(i.id) ))} // Preselected value to persist in dropdown
														onSelect={(e) => handleStates(e)} // Function will trigger on select event
														displayValue="state" // Property name to display in the dropdown options
													/>
												) : (
													'Loading States'
												)}
											</CInputGroup>
										</CFormGroup>
									</CCol>
									{/* <CCol xs="6">
										<CFormGroup>
											<CLabel htmlFor="ccmonth">Select Size</CLabel>
											<CSelect custom name="ccmonth" id="ccmonth">
												<option value="1">Size 1</option>
												<option value="2">Size 2</option>
											</CSelect>
										</CFormGroup>
									</CCol> */}
									<CCol xs="6">
										<CLabel htmlFor="category">Image</CLabel>
										<CInputGroup className="mb-3">
											<CLabel htmlFor="bannerImage" variant="custom-file">
												Choose image...
											</CLabel>
											<CInputFile onChange={bannerOnChange} custom id="bannerImage" type="file" />
										</CInputGroup>
									</CCol>
									{/* <CCol xs="6">
										<CFormGroup>
											<CLabel htmlFor="ccyear">Enter Thickness</CLabel>
											<CInput placeholder="Thickness" value={thickness} onChange={(e) => setThickness(e.target.value)} />
										</CFormGroup>
									</CCol> */}
									<CCol xs="8">
										<button onClick={() => setPage(3)} className="btn btn-success" type="button">
											Save and Next
										</button>
									</CCol>
								</CRow>
							)}
							{page === 3 && (
								<CRow className="mt-4">
									<CCol xs="6">
										<CFormGroup>
											<CLabel htmlFor="name">Design</CLabel>
											<CInput id="name" placeholder="Enter Design" required />
										</CFormGroup>
									</CCol>
									<CCol xs="6">
										<CFormGroup>
											<CLabel htmlFor="name">Colour</CLabel>
											<CInput id="name" placeholder="Enter Colour" required />
										</CFormGroup>
									</CCol>

									<CCol xl="12">
										<CFormGroup>
											<CLabel htmlFor="category">Gift Details</CLabel>
											<CInputGroup>
												<CTextarea
													// component="textarea"
													id="content"
													rows="3"
													onChange={giftDetailOnChange}
													value={giftDetail}
												/>
											</CInputGroup>
										</CFormGroup>
									</CCol>

									<CCol xl="6">
										<CFormGroup>
											<CLabel htmlFor="is_active">Best seller</CLabel>
											<CInputGroup>
												<Switch onChange={onChangeBestSeller} checked={bestSeller} />
											</CInputGroup>
										</CFormGroup>
									</CCol>
									<CCol xs="8">
										<button className="btn btn-success" type="button">
											Save and Submit
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
		</div>
	);
};

export default AddProduct;
