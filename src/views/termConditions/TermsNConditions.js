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
	CFormGroup,
	CLabel,
	CInputGroup,
	CInput,
	CFormText,
	CTextarea
} from '@coreui/react';
import axios from 'axios';
import dateFormat from 'dateformat';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const TermsNConditions = () => {
	let [ termsConditionsSections, setTermsConditionsSections ] = useState([]);
	const [ showAlertSuccess, setShowAlertSuccess ] = useState(false);
	const [ showAlertDanger, setShowAlertDanger ] = useState(false);
	const [ textMessage, setTextMessage ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ id, setId ] = useState('');
	const [ title, setTitle ] = useState('');
	let jwtToken = sessionStorage.getItem('token');
	const [ disabled, setDisabled ] = useState(true);

	//
	const clickOnDelete = (index) => {
		confirmAlert({
			title: 'Are you sure?',
			message: 'You want to delete this item?',
			buttons: [
				{
					label: 'Yes, Delete it',
					onClick: () => deleteTerms(index)
				},
				{
					label: 'No'
					// onClick: () => alert('Click No')
				}
			]
		});
	};
	//* call delete api
	const deleteTerms = (index) => {
        termsConditionsSections.splice(index,1);
        let arr = termsConditionsSections;
        setTermsConditionsSections(arr);
        console.log(arr);
        let formdata = new FormData();
        formdata.append("title", title);
        formdata.append("description", description);
        formdata.append("sections", arr);
        for(var pair of formdata.entries()) {
            console.log(pair[0]+ ', '+ pair[1]);
         }
		axios({
            url:`http://markbran.in/apis/admin/termsConditions`,
            method: "post",
            data: formdata
        })
			.then(function(response) {
				console.log(response)
				getTnc();
			})
			.catch(function(error) {
				console.error(error)
			});
	};
	const updateTnC = (e) => {
		console.log(e);
	};
	const getTnc = () => {
		axios
			.get('http://markbran.in/apis/admin/termsConditions', {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				setTermsConditionsSections(response.data.termsConditions.sections);
				console.log(response.data.termsConditions.sections);
				setTitle(response.data.termsConditions.title);
				setDescription(response.data.termsConditions.description);
				setId(response.data.termsConditions.id);
				// console.log(response.data.termsConditions);
			})
			.catch(function(error) {
				// console.log(error);
				if (error.response && error.response.data.message) {
					setShowAlertSuccess(false);
					setShowAlertDanger(true);
					setTextMessage(error.response.data.message);
				}
			});
	};
	useEffect(() => {
		getTnc();
	}, []);

	return (
		<CRow>
			<CCol xl={12}>
				<CCard>
					<CCardHeader>
						Terms and Conditions
						<CLink
							style={{ float: 'right' }}
							className="btn ml-2 btn-md btn-warning"
							onClick={() => setDisabled(!disabled)}
						>
							Edit
						</CLink>
						<CLink style={{ float: 'right' }} onClick={updateTnC} className="btn btn-success">
							Save Changes
						</CLink>
					</CCardHeader>
					<CCardBody>
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
						<CCardBody>
							<CRow>
								<CCol>
									<CFormGroup>
										<CLabel htmlFor="shortItem">TnC Title</CLabel>
										<CInputGroup className="mb-3">
											{/* <CInput type="text" onChange={goingGreenSectionTitleOnChange} value={goingGreenSectionTitle} placeholder="Title" autoComplete="title" /> */}
											<CInput
												disabled={disabled}
												value={title}
												onChange={(e) => setTitle(e.target.value)}
												type="text"
												placeholder="Title"
												autoComplete="title"
											/>
										</CInputGroup>
										<CLabel htmlFor="shortItem">TnC Description</CLabel>
										<CInputGroup className="mb-3">
											{/* <CInput type="text" onChange={goingGreenSectionTitleOnChange} value={goingGreenSectionTitle} placeholder="Title" autoComplete="title" /> */}
											<CTextarea
                                            rows="4" cols="50"
												disabled={disabled}
												value={description}
												onChange={(e) => setDescription(e.target.value)}
												type="text"
												placeholder="Title"
												autoComplete="title"
											/>
										</CInputGroup>
										{/* <CFormText className="help-block text-danger" color="red">
												{errors.size && errors.size.message}
											</CFormText> */}
									</CFormGroup>
								</CCol>
							</CRow>
						</CCardBody>
						<table className="table table-hover">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Title</th>
									<th scope="col">Description</th>
									{/* <th scope="col">Is Active</th> */}
									{/* <th scope="col">Create at</th> */}
									<th scope="col">Action</th>
								</tr>
							</thead>
							<tbody>
								{termsConditionsSections.map((item, index) => (
									<tr key={index + 1}>
										<th scope="row">{index + 1}</th>
										<td>
											<CTextarea rows="4" cols="50" disabled={disabled} value={item.heading} />
										</td>
										<td>
											<CTextarea rows="4" cols="50"  disabled={disabled} value={item.description} />
										</td>

										{/* <td>{item.status ? 'Anabel' : 'Disable'}</td> */}
										{/* <td>{dateFormat(item.createdAt, 'mmmm dS, yyyy')}</td> */}
										<td>
											<button
												onClick={() => {clickOnDelete(index)}}
												type="button"
												className="btn btn-sm btn-outline-danger"
											>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<button
							style={{ float: 'right' }}
							onClick={() => {
								setTermsConditionsSections([
									...termsConditionsSections,
									{ heading: '', description: '', status: 1 }
								]);
								console.log(termsConditionsSections);
							}}
							className="btn btn-success mr-4"
						>
							Add New
						</button>
					</CCardBody>
				</CCard>
			</CCol>
		</CRow>
	);
};

export default TermsNConditions;
