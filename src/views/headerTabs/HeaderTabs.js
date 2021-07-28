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

const HeaderTabs = () => {
	const jwtToken = sessionStorage.getItem('token');

	const [ serviceCategories, setServiceCategories ] = useState([]);
	const [ showAlertSuccess, setShowAlertSuccess ] = useState(false);
	const [ showAlertDanger, setShowAlertDanger ] = useState(false);
	const [ headerTabs, setHeaderTabs ] = useState([]);
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
			<CCardHeader>Header Tabs <CLink to={"/header-tabs/add/"} style={{float:"right"}} className="btn btn-success">Add Header Tab</CLink></CCardHeader>

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
										<th scope="col">Title</th>
										<th scope="col">Link</th>
										<th scope="col">Icon</th>
										<th scope="col">Status</th>
										<th scope="col">Sort Order</th>
									</tr>
								</thead>
								<tbody>
									{headerTabs.map((tab, idx) => (
										<tr>
											{' '}
											<th scope="col">{idx + 1}</th>
											<th scope="col">{tab.title}</th>
											<th scope="col">{tab.link}</th>
											<th scope="col">
												<img
													alt="banner img"
													src={`${process.env.REACT_APP_BASE_URL}/${tab.icon}`}
													className="img-fluid"
													width="50px"
												/>
											</th>
											<th scope="col">{tab.status ? 'Active' : 'Inactive'}</th>
											<th scope="col">{tab.sortOrder}</th>
											<th scope="col">
												{' '}
												<CLink
													to={`/header-tabs/edit/${tab.id}`}
													className="btn btn-sm btn-outline-warning"
												>
													Edit
												</CLink>
												<button
													type="button"
													onClick={() => clickOnDelete(tab.id)}
													className="btn btn-sm btn-outline-danger"
												>
													Delete
												</button>
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

export default HeaderTabs;
