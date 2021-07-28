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
	CInput
} from '@coreui/react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import AddWhatGoesInside from './AddWhatGoesInside.js';
import ReactSwitch from 'react-switch';
const WhatGoesInside = () => {
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ status, setStatus ] = useState(false);
	const [ showAlertSuccess, setShowAlertSuccess ] = useState(false);
	const [ showAlertDanger, setShowAlertDanger ] = useState(false);
	const [ cards, setCards ] = useState([]);
	const jwtToken = sessionStorage.getItem('token');
	//
	const clickOnDelete = (cardId) => {
		confirmAlert({
			title: 'Are you sure?',
			message: 'You want to delete this item?',
			buttons: [
				{
					label: 'Yes, Delete it',
					onClick: () => deleteCard(cardId)
				},
				{
					label: 'No'
					// onClick: () => alert('Click No')
				}
			]
		});
	};
	//* call delete api
	const deleteCard = (cardId) => {
		// alert(categoryId)
		axios
			.delete(`http://markbran.in/apis/admin/what-goes-inside/card/${cardId}`, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				setShowAlertSuccess(true);
				setShowAlertDanger(false);
				getCards();
				console.log(response);
			})
			.catch(function(error) {
				setShowAlertSuccess(false);
				setShowAlertDanger(true);
				console.log(error);
			});
	};
	const getCards = () => {
		axios
			.get('http://markbran.in/apis/admin/what-goes-inside/card', {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				// console.log(response.data.categories);
				setCards(response.data.cards);
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			});
	};

	const addCard = () => {
		let formData = new FormData();
		formData.append('title', title);
		formData.append('description', description);
		formData.append('status', status ? 1 : 0);
		// formData.append('image', image);
		axios
			.post('http://markbran.in/apis/admin/what-goes-inside/card', formData, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				setShowAlertSuccess(true);
				setShowAlertDanger(false);
				getCards();
				console.log(response);
			})
			.catch(function(error) {
				setShowAlertSuccess(false);
				setShowAlertDanger(true);
				console.log(error);
			});
	};
	useEffect(() => {
		getCards();
	}, []);
	return (
		<CRow>
			<CCol xl={12}>
				<CCard>
					<CCardHeader>What Goes Inside</CCardHeader>
					{/* <CCard>
                        <CCardBody>
                        </CCardBody>
                    </CCard> */}
					<AddWhatGoesInside />
					<CCardHeader>Manage Cards</CCardHeader>
					<CCardBody>
						{showAlertSuccess ? (
							<div className="alert alert-success alert-dismissible fade show" role="alert">
								<strong>Success</strong> Request Successfull.
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
						<table className="table table-hover">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Title</th>
									<th scope="col">Description</th>
									<th scope="col">Status</th>
									<th scope="col">Action</th>
								</tr>
							</thead>
							<tbody>
								{cards.map((item, index) => (
									<tr key={item.id}>
										<th scope="row">{index + 1}</th>
										<td>{item.title}</td>
										<td>{item.description}.</td>
										<td>{item.status ? 'Active' : 'InActive'}</td>
										<td>
											<CLink
												className="btn btn-sm btn-outline-warning"
												to={`/what-goes-inside/card/${item.id}`}
											>
												Edit
											</CLink>
											<button
												onClick={() => clickOnDelete(item.id)}
												type="button"
												className="btn btn-sm btn-outline-danger"
											>
												Delete
											</button>
										</td>
									</tr>
								))}
								<tr>
									<th scope="row">Add New</th>
									<td>
										<CInput
											placeholder="Card Title"
											value={title}
											onChange={(e) => setTitle(e.target.value)}
										/>
									</td>
									<td>
										<CInput
											placeholder="Card Description"
											value={description}
											onChange={(e) => setDescription(e.target.value)}
										/>
									</td>

									<td>
										<ReactSwitch checked={status} onChange={() => setStatus(!status)} />
									</td>
									<td>
										<button onClick={addCard} className="btn btn-sm btn-outline-warning">
											Save
										</button>
										{/* <button onClick={() => clickOnDelete(item.id)} type="button" className="btn btn-sm btn-outline-danger">Delete</button> */}
									</td>
								</tr>
							</tbody>
						</table>
					</CCardBody>
				</CCard>
			</CCol>
		</CRow>
	);
};

export default WhatGoesInside;
