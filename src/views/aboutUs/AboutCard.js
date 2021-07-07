import React, { useState, useEffect, Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import dateFormat from 'dateformat';

import {
	CFormGroup,
	CInputGroup,
	CFormText,
	CLabel,
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CDataTable,
	CRow,
	CPagination,
	CLink
} from '@coreui/react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import CkEditor from '../../components/CkEditor5.js';
import CardComponent from './AboutUsCardComponent.js';
const axios = require('axios').default;
require('dotenv').config();

const AboutCard = () => {
	const [ aboutUsCard, setAboutUsCard ] = useState([]);
	const [ showAlertSuccess, setShowAlertSuccess ] = useState(false);
	const [ showAlertDanger, setShowAlertDanger ] = useState(false);
	const [ sectionDescription, setSectionDescription ] = useState('');
	const [ textMessage, setTextMessage ] = useState('');

	const jwtToken = sessionStorage.getItem('token');

	const handleSectionDescription = (data) => {
		setSectionDescription(data);
	};

	const clickOnDelete = (cardId) => {
		confirmAlert({
			title: 'Are you sure?',
			message: 'You want to delete this item?',
			buttons: [
				{
					label: 'Yes, Delete it',
					onClick: () => deleteBanner(cardId)
				},
				{
					label: 'No'
					// onClick: () => alert('Click No')
				}
			]
		});
	};

	//* call delete api
	const deleteBanner = (cardId) => {
		// alert(cardId)
		axios
			.delete(`http://markbran.in/apis/admin/aboutUsCard/${cardId}`, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				setShowAlertSuccess(true);
				setShowAlertDanger(false);
				bannerAxios();
			})
			.catch(function(error) {
				setShowAlertSuccess(false);
				setShowAlertDanger(true);
				setTextMessage(error.response.data.message);
			});
	};

	//* get banner data
	const bannerAxios = () => {
		axios
			.get('http://markbran.in/apis/admin/aboutUsCard', {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				setAboutUsCard(response.data.cards);
				console.log(response.data.cards);
			})
			.catch(function(error) {
				setShowAlertSuccess(false);
				setShowAlertDanger(true);
				setTextMessage(error.response.data.message);
			});
	};
	useEffect(() => {
		bannerAxios();
	}, []);

	return (
		<CRow>
			<CCol xl={12}>
				<CCard>
					<CCardHeader>
						About Us
						<CLink style={{ float: 'right' }} className="btn btn-success" to="/about-us-card/add-about-us">
							Add Content
						</CLink>
						{/* <small  className="text-muted"> example</small> */}
					</CCardHeader>
					<CCardBody>
						<div>
							<CardComponent />
						</div>
					</CCardBody>
					<CCardBody>
						{/* <CDataTable>

                        </CDataTable> */}
						{showAlertSuccess ? (
							<div className="alert alert-success alert-dismissible fade show" role="alert">
								<strong>Deleted</strong> Your item has been deleted successfully.
								<button type="button" className="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						) : null}
						{showAlertDanger ? (
							<div className="alert alert-warning alert-dismissible fade show" role="alert">
								<strong>Alert </strong>{' '}
								{textMessage ? textMessage : 'Something went wrong try again later !.'}
								<button type="button" className="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						) : null}

						<table className="table table-hover">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Title</th>
									<th scope="col">Tagline</th>
									<th scope="col">Sort Order</th>
									<th scope="col">Create at</th>
									<th scope="col">Action</th>
								</tr>
							</thead>
							<tbody>
								{aboutUsCard.map((item, index) => (
									<tr key={item.id}>
										<th scope="row">{index + 1}</th>
										<th>{item.title}</th>
										<td width="50%">{item.tagLine}</td>
										<td>{item.sortOrder}</td>
										<td>{dateFormat(item.createdAt, 'mmmm dS, yyyy')}</td>
										<td>
											<CLink
												className="btn btn-sm btn-outline-warning"
												to={`/about-us-card/edit/${item.id}`}
											>
												Edit
											</CLink>
											<button
												type="button"
												onClick={() => clickOnDelete(item.id)}
												className="btn btn-sm btn-outline-danger"
											>
												Delete
											</button>
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

export default AboutCard;
