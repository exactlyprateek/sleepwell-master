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
	CContainer
} from '@coreui/react';
import axios from 'axios';
import dateFormat from 'dateformat';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const ServiceCategory = () => {
	const [ serviceCategories, setServiceCategories ] = useState([]);
	const [ showAlertSuccess, setShowAlertSuccess ] = useState(false);
	const [ showAlertDanger, setShowAlertDanger ] = useState(false);
	const jwtToken = sessionStorage.getItem('token');
	const [ view, setView ] = useState(0);
	//
	const clickOnDelete = (categoryId) => {
		confirmAlert({
			title: 'Are you sure?',
			message: 'You want to delete this item?',
			buttons: [
				{
					label: 'Yes, Delete it',
					onClick: () => handleDelete(categoryId)
				},
				{
					label: 'No'
					// onClick: () => alert('Click No')
				}
			]
		});
	};
	//* call delete api
	const handleDelete = (categoryId) => {
		// alert(categoryId)
		axios
			.delete(`http://markbran.in/apis/admin/service-category/${categoryId}`, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				setShowAlertSuccess(true);
				setShowAlertDanger(false);
				getServiceCategories();
				console.log(response);
			})
			.catch(function(error) {
				setShowAlertSuccess(false);
				setShowAlertDanger(true);
				console.log(error);
			});
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
			.catch(function(error) {
				// handle error
				console.log(error);
				setShowAlertDanger('Something went wrong');
			});
	};
	useEffect(() => {
		getServiceCategories();
	}, []);
	return (
		<CRow>
			<CCol xl={12}>
				<CCard>
					<CCardHeader>
						Service Category
						<CLink style={{ float: 'right' }} className="btn btn-success" to="/service-category/add">
							Add service category
						</CLink>
						{/* <small  className="text-muted"> example</small> */}
					</CCardHeader>
					<CCardBody>
						{showAlertSuccess ? (
							<div className="alert alert-success alert-dismissible fade show" role="alert">
								<strong>Deleted</strong> Your item has been deleted successfully.
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

				
						
							<table className="table table-striped">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">Title</th>
										<th scope="col">Link</th>
										<th scope="col">Sort Order</th>
										<th scope="col">Image</th>
										<th scope="col">Status</th>
										<th scope="col">Action</th>
									</tr>
								</thead>
								<tbody>
									{serviceCategories.map((item, idx) => (
										<tr>
											<th scope="row">{idx + 1}</th>
											<td>{item.title}</td>
											<td>{item.link}</td>
											<td>{item.sortOrder}</td>
											<td><img 
											src={`${process.env.REACT_APP_BASE_URL}/${item.image}`}
											className="img-fluid"
                                            
											width="50px"
											alt=""
										/></td>
											<td>{item.status}</td>
											<td>
												{' '}
												<CLink
													className="btn btn-sm btn-outline-warning mr-2"
													to={`/service-category/edit/${item.id}`}
												>
													Edit
												</CLink>
                                                <CLink
												disabled={true}
												onClick={() => clickOnDelete(item.id)}
                                                className="btn btn-sm btn-outline-danger"
													// to={`/service-category/edit/${item.id}`}
												>
													Delete
												</CLink>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						
					</CCardBody>
				</CCard>
			</CCol>
		</CRow>
	);
};

export default ServiceCategory;
