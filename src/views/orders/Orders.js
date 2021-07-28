import React, { useEffect, useState } from 'react';
import {
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CForm,
	CFormGroup,
	CFormText,
	CInput,
	CInputGroup,
	CLabel,
	CLink,
	CRow,
	CSelect,
	CTextarea
} from '@coreui/react';
import axios from 'axios';
import { FormLabel } from '@material-ui/core';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const Orders = () => {
	const jwtToken = sessionStorage.getItem('token');

	const [ serviceCategories, setServiceCategories ] = useState([]);
	const [ showAlertSuccess, setShowAlertSuccess ] = useState(false);
	const [ showAlertDanger, setShowAlertDanger ] = useState(false);
	const [ orders, setHeaderTabs ] = useState([]);
	const [ error, setError ] = useState(null);
	const clickOnDelete = (tabId) => {
		confirmAlert({
			title: 'Are you sure?',
			message: 'You want to delete this item?',
			buttons: [
				{
					label: 'Yes, Delete it',
					onClick: () => deleteTab(tabId)
				},
				{
					label: 'No'
					// onClick: () => alert('Click No')
				}
			]
		});
	};
	//* call delete api
	const deleteTab = (tabId) => {
		axios
			.delete(`http://markbran.in/apis/admin/category-tab/${tabId}`, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				setShowAlertSuccess(true);
				setShowAlertDanger(false);
				getHeaderTabs();
			})
			.catch(function(error) {
				setShowAlertSuccess(false);
				setShowAlertDanger(true);
			});
	};
	const getHeaderTabs = () => {
		axios
			.get('http://markbran.in/apis/admin/category-tab', {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				// console.log(response.data);
				setHeaderTabs(response.data.tabs);
			})
			.catch(function(err) {
				// console.log(error);
				if (err.response && err.response.data.message) {
					setError(err.response.data.message);
				} else {
					setError('Something went wrong!');
				}
			});
	};
	useEffect(() => {
		getHeaderTabs();
	}, []);

	return (
		<CCard>
			<CCardHeader>
				Orders
				{/* <CLink to={"/header-tabs/add/"} style={{float:"right"}} className="btn btn-success">Add Header Tab</CLink> */}
			</CCardHeader>

			<CRow>
				<CCol xs="12" sm="12">
					<CCardBody>
						<CRow>
							<CCol>
								<FormLabel>Tabs</FormLabel>
							</CCol>
						</CRow>
						<CRow>
							<table className="table table-striped">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">Order ID</th>
										<th scope="col">Name</th>
										<th scope="col">Type</th>
										<th scope="col">Size</th>
										<th scope="col">State</th>
										<th scope="col">Amount</th>
										<th scope="col">Status</th>
										<th scope="col">Mode</th>
										<th scope="col">Dealer Details</th>
										<th scope="col">Date</th>
										<th scope="col">Acion</th>
									</tr>
								</thead>
								<tbody>
									{orders.map((order, idx) => (
										<tr>
											{' '}
											<th scope="col">#</th>
											<th scope="col">Order ID</th>
											<th scope="col">Name</th>
											<th scope="col">Type</th>
											<th scope="col">Size</th>
											<th scope="col">State</th>
											<th scope="col">Amount</th>
											<th scope="col">Status</th>
											<th scope="col">Mode</th>
											<th scope="col">Dealer Details</th>
											<th scope="col">Date</th>
											<th scope="col">
												<button className="btn btn-outline-warning btn-sm mx-1">Edit</button>
												<button className="btn btn-outline-warning btn-sm mx-1">Delete</button>
											</th>
										</tr>
									))}
								</tbody>
							</table>
						</CRow>
					</CCardBody>
				</CCol>
			</CRow>
		</CCard>
	);
};

export default Orders;
