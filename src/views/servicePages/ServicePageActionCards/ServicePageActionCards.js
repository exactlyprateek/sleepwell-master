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
import Switch from 'react-switch';
function ServicePageActionCards(props) {
	const [serviceCategories, setServiceCategories] = useState([]);
	const [title, setBannerTitle] = useState('');
	const [description, setDescription] = useState('');
	const [buttonText, setButtonText] = useState('');
	const [buttonLink, setButtonLink] = useState('');
	const [sortOrder, setSortOrder] = useState('');
	const [categoryId, setCategoryId] = useState('');
	const [status, setStatus] = useState(false);
	const [addView, setAddView] = useState(false);
	const [servicePageActionCard, setServicePageActionCard] = useState([]);
	const jwtToken = sessionStorage.getItem('token');

	const [image, setImage] = useState('');
	//
	const clickOnDelete = (id) => {
		confirmAlert({
			title: 'Are you sure?',
			message: 'You want to delete this item?',
			buttons: [
				{
					label: 'Yes, Delete it',
					onClick: () => deleteActionCard(id)
				},
				{
					label: 'No'
					// onClick: () => alert('Click No')
				}
			]
		});
	};
	//* call delete api

	const deleteActionCard = (id) => {
		// alert(categoryId)
		axios
			.delete(`http://markbran.in/apis/admin/service-action-card/${id}`, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function (response) {
				props.setAlertSuccess('Deleted Successfully');
				props.setAlertDanger('');
				// axiosCategories();
				// console.log(response);
			})
			.catch(function (error) {
				props.setAlertSuccess('');
				props.setAlertDanger('Request Failed' + error.toString());
				// console.log(error);
			});
	};

	const postServiceActionCard = () => {
		let formData = new FormData();
		formData.append('title', title);
		formData.append('description', description);
		formData.append('buttonText', buttonText);
		formData.append('buttonLink', buttonLink);
		// formData.append('categoryId', categoryId);
		formData.append('status', status ? 1 : 0);
		formData.append('sortOrder', sortOrder);
		formData.append('image', image);
		axios
			.post('http://markbran.in/apis/admin/service-action-card/', formData, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function (response) {
				console.log(response.data.categories);
				props.setAlertSuccess('Added Successfully');
				setAddView(false);
				getServicePageActionCard();
				// setCategories(response.data.categories);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	};
	const handleServiceCategorySelect = (e) => {
		setCategoryId(e.target.value);
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
	const getServicePageActionCard = () => {
		axios
			.get('http://markbran.in/apis/admin/service-action-card', {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function (response) {
				// console.log(response.data.banners);
				// props.setAlertSuccess('Added Successfully');
				setServicePageActionCard(response.data.actionCards);
				setCategoryId(response.data.actionCard[0].id ? response.data.actionCard[0].id : 0);
				setAddView(false);
			})
			.catch(function (error) {
				// handle error
				// console.log(error);
			});
	};
	useEffect(() => {
		getServiceCategories();
		getServicePageActionCard();
	}, []);
	return (
		<div>
			<CButton className="btn btn-info my-4 mx-2" onClick={() => setAddView(!addView)}>
				{!addView ? 'Add Action Card' : 'View All Action Cards'}
			</CButton>
			{addView ? (
				<CContainer className="m-2 p-2">
					<CCardHeader className="mb-4">Add Service Page Banner</CCardHeader>
					<CRow>
						<CCol md="6" sm="12">
							<FormLabel className="mt-4">Title</FormLabel>
							<CInput
								value={title}
								onChange={(e) => setBannerTitle(e.target.value)}
								placeholder="Title"
							/>
						</CCol>
						<CCol md="6" sm="12">
							<FormLabel className="mt-4">Description</FormLabel>
							<CInput
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								placeholder="Description"
							/>
						</CCol>
						<CCol md="6" sm="12">
							<FormLabel className="mt-4">Button Text</FormLabel>
							<CInput
								value={buttonText}
								onChange={(e) => setButtonText(e.target.value)}
								placeholder="Button Text"
							/>
						</CCol>
						<CCol md="6" sm="12">
							<FormLabel className="mt-4">Button Link</FormLabel>
							<CInput
								value={buttonLink}
								onChange={(e) => setButtonLink(e.target.value)}
								placeholder="Button Link"
								name="buttonLink"
							/>
						</CCol>
						<CCol md="6" sm="12">
							<FormLabel className="mt-4">Card Sort Order</FormLabel>
							<CInput
								value={sortOrder}
								onChange={(e) => setSortOrder(e.target.value)}
								placeholder="Sort Order"
								name="sortOrder"
							/>
						</CCol>
						<CCol md="6" sm="12">
							<FormLabel className="mt-4">Status</FormLabel>
							<div>

								<Switch
									checked={status}
									onChange={(e) => setStatus(e)}
									placeholder="Status"
									variant="status"
								/>
							</div>
						</CCol>
						<CCol md="6" sm="12">
							<FormLabel className="mt-4">Image</FormLabel>

							<CInputGroup className="">
								<CLabel htmlFor="categoryImage" variant="custom-file">
									Choose Image...
								</CLabel>
								<CInputFile
									onChange={(e) => setImage(e.target.files[0])}
									custom
									id="categoryImage"
									type="file"
								/>
							</CInputGroup>
						</CCol>
						<CCol md="6" sm="12">
							<FormLabel className="mt-4">Category</FormLabel>

							<select onChange={handleServiceCategorySelect} value={categoryId} className="custom-select mb-3" aria-label="Category Select">

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
					<CButton onClick={postServiceActionCard} className="mt-4 btn-outline-success">
						Add Action Card
					</CButton>
				</CContainer>
			) : (
				<CContainer>
					<CCardHeader className="mb-4">All Service Page Action Cards</CCardHeader>
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Title</th>
								<th scope="col">Description</th>
								<th scope="col">Button Link</th>
								<th scope="col">Button Text</th>
								<th scope="col">Sort Order</th>
								<th scope="col">Status</th>
								<th scope="col">Image</th>
								<th scope="col">Actions</th>
							</tr>
						</thead>
						<tbody>
							{servicePageActionCard.map((actionCard, idx) => (
								<tr>
									{' '}
									<th scope="col">{idx + 1}</th>
									<th scope="col">{actionCard.title}</th>
									<th scope="col">{actionCard.description}</th>
									<th scope="col">{actionCard.buttonLink}</th>
									<th scope="col">{actionCard.buttonText}</th>
									<th scope="col">{actionCard.sortOrder}</th>
									<th scope="col">{actionCard.status ? "Active" : "Inactive"}</th>
									<th scope="col">
										<img
											alt="action card img"
											src={`${process.env.REACT_APP_BASE_URL}/${actionCard.image}`}
											className="img-fluid"
											width="50px"
										/>
									</th>
									<th scope="col">
										<CLink className="btn btn-sm btn-outline-warning"
										//  to={`/banners/edit-banner/${item.id}`}
										 >
											Edit
										</CLink>
										<button type="button" onClick={() => clickOnDelete(actionCard.id)} className="btn btn-sm btn-outline-danger">Delete</button>

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

export default ServicePageActionCards;
