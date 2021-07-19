import React, { useEffect, useState } from 'react';
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
	CInput,
	CTabContent,
	CButton,
	CInputGroup,
	CLabel,
	CInputFile
} from '@coreui/react';
import axios from 'axios';
import { Multiselect } from 'multiselect-react-dropdown';
import dateFormat from 'dateformat';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Container, FormLabel } from '@material-ui/core';
function ServicePageBanner(props) {
	const [serviceCategories, setServiceCategories] = useState([]);
	const [bannerTitle, setBannerTitle] = useState('');
	const [bannerDescription, setBannerDescription] = useState('');
	const [bannerButtonText, setBannerButtonText] = useState('');
	const [bannerButtonLink, setBannerButtonLink] = useState('');
	const [bannerCategoryId, setBannerCategoryId] = useState('');
	const [addView, setAddView] = useState(false);
	const [servicePageBanners, setServicePageBanners] = useState([]);
	const jwtToken = sessionStorage.getItem('token');

	const [bannerImage, setBannerImage] = useState('');
	//
	const clickOnDelete = (id) => {
		confirmAlert({
			title: 'Are you sure?',
			message: 'You want to delete this item?',
			buttons: [
				{
					label: 'Yes, Delete it',
					onClick: () => deleteBanner(id)
				},
				{
					label: 'No'
					// onClick: () => alert('Click No')
				}
			]
		});
	};
	//* call delete api

	const deleteBanner = (id) => {
		// alert(categoryId)
		axios
			.delete(`http://markbran.in/apis/admin/service-page/banner/${id}`, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function (response) {
				props.setAlertSuccess('Deleted Successfully');
				props.setAlertDanger('');
				getServicePageBanners();
				// axiosCategories();
				// console.log(response);
			})
			.catch(function (error) {
				props.setAlertSuccess('');
				props.setAlertDanger('Request Failed' + error.toString());
				// console.log(error);
			});
	};

	const postServiceBanner = () => {
		let formData = new FormData();
		formData.append('title', bannerTitle);
		formData.append('description', bannerDescription);
		formData.append('buttonText', bannerButtonText);
		formData.append('buttonLink', bannerButtonLink);
		formData.append('categoryId', bannerCategoryId);
		formData.append('image', bannerImage);
		axios
			.post('http://markbran.in/apis/admin/service-page/banner', formData, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function (response) {
				console.log(response.data.categories);
				props.setAlertSuccess('Added Successfully');
				setAddView(false);
				getServicePageBanners();
				// setCategories(response.data.categories);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	};
	const handleServiceCategorySelect = (e) => {
		setBannerCategoryId(e.target.value);
	};
	const getServiceCategories = () => {
		axios
			.get('http://markbran.in/apis/admin/service-category', {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then((response) => {
				// console.log(response.data.categories);
				setServiceCategories(response.data.categories);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				props.setAlertDanger('Something went wrong');
			});
	};
	const getServicePageBanners = () => {
		axios
			.get('http://markbran.in/apis/admin/service-page/banner', {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function (response) {
				// console.log(response.data.banners);
				// props.setAlertSuccess('Added Successfully');
				setServicePageBanners(response.data.banners);
				setBannerCategoryId(response.data.banners[0].id ? response.data.banners[0].id : 0);
			})
			.catch(function (error) {
				// handle error
				// console.log(error);
			});
	};
	useEffect(() => {
		getServiceCategories();
		getServicePageBanners();
	}, []);
	return (
		<div>
			<CButton className="btn btn-info my-4 mx-2" onClick={() => setAddView(!addView)}>
				{!addView ? 'Add Banner' : 'View All Banners'}
			</CButton>
			{addView ? (
				<CContainer className="m-2 p-2">
					<CCardHeader className="mb-4">Add Service Page Banner</CCardHeader>
					<CRow>
						<CCol md="6" sm="12">
							<FormLabel className="mt-4">Title</FormLabel>
							<CInput
								value={bannerTitle}
								onChange={(e) => setBannerTitle(e.target.value)}
								placeholder="Title"
							/>
						</CCol>
						<CCol md="6" sm="12">
							<FormLabel className="mt-4">Description</FormLabel>
							<CInput
								value={bannerDescription}
								onChange={(e) => setBannerDescription(e.target.value)}
								placeholder="Description"
							/>
						</CCol>
						<CCol md="6" sm="12">
							<FormLabel className="mt-4">Button Text</FormLabel>
							<CInput
								value={bannerButtonText}
								onChange={(e) => setBannerButtonText(e.target.value)}
								placeholder="Button Text"
							/>
						</CCol>
						<CCol md="6" sm="12">
							<FormLabel className="mt-4">Button Link</FormLabel>
							<CInput
								value={bannerButtonLink}
								onChange={(e) => setBannerButtonLink(e.target.value)}
								placeholder="Button Link"
								name="buttonLink"
							/>
						</CCol>
						<CCol md="6" sm="12">
							<FormLabel className="mt-4">Banner Image</FormLabel>

							<CInputGroup className="">
								<CLabel htmlFor="categoryImage" variant="custom-file">
									Choose Image...
								</CLabel>
								<CInputFile
									onChange={(e) => setBannerImage(e.target.files[0])}
									custom
									id="categoryImage"
									type="file"
								/>
							</CInputGroup>
						</CCol>
						<CCol md="6" sm="12">
							<FormLabel className="mt-4">Category</FormLabel>

							<select onChange={handleServiceCategorySelect} value={bannerCategoryId} className="custom-select mb-3" aria-label="Category Select">

								{serviceCategories.map((cat, idx) => (
									<option key={idx} value={cat.id}>
										{cat.title}
									</option>
								))}
							</select>
							{/* <Multiselect
								options={serviceCategories.map((cat) => cat.title)} // Options to display in the dropdown
								selectedValues={selectedCategories} // Preselected value to persist in dropdown
								onSelect={(e) => handleServiceCategorySelect(e)} // Function will trigger on select event
								displayValue="Service Category" // Property name to display in the dropdown options
							/> */}
							{/* <CInput
                                value={bannerCategoryId}
                                
                                placeholder="Category Id"
                            /> */}
						</CCol>
					</CRow>
					<CButton onClick={postServiceBanner} className="mt-4 btn-outline-success">
						Add Banner
					</CButton>
				</CContainer>
			) : (
				<CContainer>
					<CCardHeader className="mb-4">All Service Page Banners</CCardHeader>
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Title</th>
								<th scope="col">Description</th>
								<th scope="col">ButtonLink</th>
								<th scope="col">ButtonText</th>
								<th scope="col">CategoryId</th>
								<th scope="col">Image</th>
							</tr>
						</thead>
						<tbody>
							{servicePageBanners.map((banner, idx) => (
								<tr>
									{' '}
									<th scope="col">{idx + 1}</th>
									<th scope="col">{banner.title}</th>
									<th scope="col">{banner.description}</th>
									<th scope="col">{banner.buttonLink}</th>
									<th scope="col">{banner.buttonText}</th>
									<th scope="col">{banner.categoryId}</th>
									<th scope="col">
										<img
											alt="banner img"
											src={`${process.env.REACT_APP_BASE_URL}/${banner.image}`}
											className="img-fluid"
											width="50px"
										/>
									</th>
									<th scope="col"><CLink className="btn btn-sm btn-outline-warning"
									//  to={`/banners/edit-banner/${item.id}`}
									>
										Edit
									</CLink>
										<button type="button" onClick={() => clickOnDelete(banner.id)} className="btn btn-sm btn-outline-danger">Delete</button>
									</th>
								</tr>
							))}
						</tbody>
					</table>
				</CContainer>
			)}
		</div>
	);
}

export default ServicePageBanner;
