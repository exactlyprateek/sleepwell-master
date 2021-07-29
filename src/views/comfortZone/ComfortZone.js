import React, { useState, useEffect, Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import dateFormat from 'dateformat';

import { CBadge, CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow, CPagination, CLink } from '@coreui/react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Multiselect } from 'multiselect-react-dropdown';
const axios = require('axios').default;
require('dotenv').config();

const ComfortZone = () => {
	const [ comfortZone, setComfortZone ] = useState([]);
	const [ showAlertSuccess, setShowAlertSuccess ] = useState(false);
	const [ showAlertDanger, setShowAlertDanger ] = useState(false);
	const [ messageText, setMessageText ] = useState(null);
	const jwtToken = sessionStorage.getItem('token');

	const clickOnDelete = (comfortId) => {
		confirmAlert({
			title: 'Are you sure?',
			message: 'You want to delete this item?',
			buttons: [
				{
					label: 'Yes, Delete it',
					onClick: () => deleteComfort(comfortId)
				},
				{
					label: 'No'
					// onClick: () => alert('Click No')
				}
			]
		});
	};

	//* call delete api
	const deleteComfort = (comfortId) => {
		// alert(comfortId)
		axios
			.delete(`http://markbran.in/apis/admin/comfort/${comfortId}`, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(e) {
				// console.log(response);
				getComfotZone();
				setShowAlertSuccess(true);
				setShowAlertDanger(false);
				// if (e.response && e.response.data.message) setMessageText(e.response.data.message)
			})
			.catch(function(e) {
				setShowAlertSuccess(false);
				setShowAlertDanger(true);
				if (e.response && e.response.data.message) setMessageText(e.response.data.message);
			});
	};

	//* get banner data
	const getComfotZone = () => {
		axios
			.get('http://markbran.in/apis/admin/home/comfort-zone', {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(e) {
				console.log(e.data.comfortZone);
				setComfortZone(e.data.comfortZone);
				// setShowAlertSuccess(false);
				// setShowAlertDanger(false);
			})
			.catch(function(error) {
				setShowAlertSuccess(false);
				setShowAlertDanger(true);
			});
	};
	useEffect(() => {
		getComfotZone();
	}, []);

	return (
		<CRow>
			<CCol xl={12}>
				<CCard>
					<CCardHeader>
                    Select Multiple Comfort Zone
						{/* <CLink style={{ float: 'right' }} className="btn btn-success" to="/comfort-home/add">
							Select Multiple Comfort Zone
						</CLink> */}
						{/* <small  className="text-muted"> example</small> */}
					</CCardHeader>
					<CCardBody>
						<Multiselect
						options={comfortZone} // Options to display in the dropdown
						// selectedValues={benifits.filter((i) =>
						// 	productBenifits.includes(i.id)
						// )} // Preselected value to persist in dropdown
						// onSelect={(e) => handleBenifits(e)} // Function will trigger on select event
						// displayValue="benifit" // Property name to display in the dropdown options
						/>
					</CCardBody>
				</CCard>
			</CCol>
		</CRow>
	);
};

export default ComfortZone;
