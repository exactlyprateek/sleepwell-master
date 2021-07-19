import React, { useState, useEffect } from 'react';
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
	
} from '@coreui/react';
import axios from 'axios';
import dateFormat from 'dateformat';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Container, FormLabel } from '@material-ui/core';
import ServicePageBanner from './ServicePageBanner';
import ServicePageActionCards from './ServicePageActionCards/ServicePageActionCards';
import ServicePageCards from './ServicePageCards/ServicePageCards';

const ServicePage = () => {
	const [ alertSuccess, setAlertSuccess ] = useState(false);
	const [ alertDanger, setAlertDanger ] = useState(false);
	const jwtToken = sessionStorage.getItem('token');
	const [ page, setPage ] = useState(1);
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
			.then(function(response) {
				setAlertSuccess('Deleted Successfully');
				setAlertDanger('');
			
				console.log(response);
			})
			.catch(function(error) {
				setAlertSuccess('');
				setAlertDanger('Request Failed' + error.toString());
				console.log(error);
			});
	};


	useEffect(() => {
		
	}, []);
	return (
		<CRow>
			<CCol xl={12}>
				<CCard>
					<CCardHeader>
						Service page
						<CLink style={{ float: 'right' }} className="btn btn-success" to="/service-page/add">
							Add service page
						</CLink>
						{/* <small  className="text-muted"> example</small> */}
					</CCardHeader>
					<CCardBody>
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
						<ul className="nav">
							<li className="nav-item">
								<button onClick={() => setPage(1)} className="nav-link active btn btn-primary mx-2">
									Banner
								</button>
							</li>
							<li className="nav-item">
								<button onClick={() => setPage(2)} className="nav-link btn btn-primary mx-2">
									Cards
								</button>
							</li>
							<li className="nav-item">
								<button onClick={() => setPage(3)} className="nav-link btn btn-primary mx-2">
									Action Cards
								</button>
							</li>
						
						</ul>
						{page === 1 && (
							<ServicePageBanner
								// alertSuccess={alertSuccess}
								setAlertSuccess={setAlertSuccess}
								// alertDanger={alertDanger}
								setAlertDanger={setAlertDanger}
							/>
						)}
						{page === 2 &&<ServicePageCards
								// alertSuccess={alertSuccess}
								setAlertSuccess={setAlertSuccess}
								// alertDanger={alertDanger}
								setAlertDanger={setAlertDanger}
							/>}
						{page === 3 &&<ServicePageActionCards
								// alertSuccess={alertSuccess}
								setAlertSuccess={setAlertSuccess}
								// alertDanger={alertDanger}
								setAlertDanger={setAlertDanger}
							/>}
						
					</CCardBody>
				</CCard>
			</CCol>
		</CRow>
	);
};

export default ServicePage;
