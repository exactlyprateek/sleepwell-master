import React, { useEffect, useState } from 'react';
import {
	CAlert,
	CButton,
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CForm,
	CFormGroup,
	CFormText,
	CInput,
	CInputFile,
	CInputGroup,
	CLabel,
	CLink,
	CRow,
	CSelect,
	CTextarea
} from '@coreui/react';
import axios from 'axios';
import { FormLabel } from '@material-ui/core';
import { useHistory } from 'react-router';
import ReactSwitch from 'react-switch';

const AddHeaderTab = () => {
	const jwtToken = sessionStorage.getItem('token');
	const history = useHistory();
	const [ categories, setCategories ] = useState([]);
	const [ alertDanger, setAlertDanger ] = useState();
	const [ showAlertSuccess, setShowAlertSuccess ] = useState(false);
	const [ error, setError ] = useState(null);
	const [ title, setTitle ] = useState('');
	const [ icon, setIcon ] = useState('');
	const [ tabIcon, setTabIcon ] = useState('');
	const [ link, setLink ] = useState('');
	const [ status, setStatus ] = useState(false);
	const [ categoryId, setCategoryId ] = useState('');
	const [ sortOrder, setSortOrder ] = useState('');
	const getServiceCategories = () => {
		setError(false);
		axios
			.get('http://markbran.in/apis/admin/category', {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then((response) => {
				// console.log(response.data.categories);
				setCategories(response.data.categories);
				setCategoryId(response.data.categories[0].id);
			})
			.catch(function(error) {
				// handle error
				console.log(error);
				setAlertDanger('Something went wrong');
			});
	};

	const saveHeaderTab = () => {
		setError(false);
		const formData = new FormData();
		formData.append('title', title);
		formData.append('icon', icon);
		formData.append('link', link);
		formData.append('status', status ? 1 : 0);
		formData.append('categoryId', categoryId);
		formData.append('sortOrder', sortOrder);
		axios
			.post(`http://markbran.in/apis/admin/category-tab/`, formData, {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				console.log(response.data);
				// setHeaderTabs(response.data.tabs);
				history.push('/header-tabs/');
				setShowAlertSuccess(true);
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
		getServiceCategories();
	}, []);

	return (
		<React.Fragment>
			<CRow>
				<CCol xs="12" sm="12">
					<CCard>
						<CCardHeader>Add Header Tab</CCardHeader>
						<CCardBody>
							{showAlertSuccess && (
								<CRow>
									<CAlert>Success</CAlert>
								</CRow>
							)}
							{alertDanger && (
								<CRow>
									<CAlert>Error</CAlert>
								</CRow>
							)}
							<CRow>
								<CCol className="my-2">
									<CLabel>Tab Title</CLabel>
									<CInput value={title} onChange={(e) => setTitle(e.target.value)} />
								</CCol>
							</CRow>
							<CRow>
								<CCol className="my-2" md="12">
									<p>Tab Icon</p>
									<CRow>
										<CCol md="4">
											<CLabel htmlFor="Image" variant="custom-file">
												Choose image...
											</CLabel>
											<CInputFile
												className="mt-4"
												custom
												id="Image"
												onChange={(e) => setIcon(e.target.files[0])}
											/>
										</CCol>
									</CRow>

									{icon && (
										<React.Fragment>
											<p variant="custom-file">Selected Icon</p>
											<img
												alt="banner img"
												src={URL.createObjectURL(icon)}
												className="img-fluid"
												width="50px"
											/>
										</React.Fragment>
									)}
								</CCol>
							</CRow>

							<CRow>
								<CCol className="my-2">
									<CLabel>Tab Sort Order</CLabel>
									<CInput value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} />
								</CCol>
							</CRow>
							<CRow>
								<CCol className="my-2">
									<CLabel>Tab Link</CLabel>
									<CInput value={link} onChange={(e) => setLink(e.target.value)} />
								</CCol>
							</CRow>
							<CRow>
								<CCol className="my-2">
									<CLabel>Tab Status</CLabel>
									<div>
										<ReactSwitch checked={status} onChange={() => setStatus(!status)} />
									</div>
								</CCol>
							</CRow>
							<CRow>
								<CCol className="my-2">
									<CLabel>Tab Category Id</CLabel>
									<select
										className="custom-select"
										defaultValue={categoryId}
										onChange={(e) => setCategoryId(e.target.value)}
									>
										{categories.map((cat, idx) => (
											<option key={idx} value={cat.id}>
												{cat.title}
											</option>
										))}
									</select>
								</CCol>
							</CRow>
							<CRow>
								<CCol className="my-2">
									<CButton onClick={saveHeaderTab} className="btn btn-success">
										Save Tab
									</CButton>
								</CCol>
							</CRow>
						</CCardBody>
					</CCard>
				</CCol>
			</CRow>
		</React.Fragment>
	);
};

export default AddHeaderTab;
