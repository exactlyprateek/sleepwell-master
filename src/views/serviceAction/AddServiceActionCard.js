import React, { useState } from 'react';
import {
	// CButton,
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

	// CInputGroupPrepend,

	// CInputGroupText,
	CLabel,
	CRow,
	CTextarea
	// CSwitch
} from '@coreui/react';
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import Switch from 'react-switch';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const axios = require('axios').default;

const schema = yup.object().shape({
	title: yup.string().required()
});

const AddServiceActionCard = () => {
	// const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });

	let history = useHistory();
	const [ alert, setAlert ] = useState('');
	const [ loading, setLoading ] = useState(false);
	// const [actionCards, setActionCards] = useState([]);
	const [ title, setTitle ] = useState('');
	const [ buttonLink, setButtonLink ] = useState('');
	const [ buttonText, setButtonText ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ sortOrder, setSortOrder ] = useState('');
	const [ image, setImage ] = useState('');
	const [ status, setStatus ] = useState(false);
	let jwtToken = sessionStorage.getItem('token');
	const onHandlerSubmit = () => {
		// e.preventDefault();
		// console.log('value', e);
		const formData = new FormData();
		formData.append('status', status ? 1 : 0);
		formData.append('title', title);
		formData.append('image', image);
		formData.append('buttonText', buttonText);
		formData.append('sortOrder', sortOrder);
		formData.append('buttonLink', buttonLink);
		formData.append('description', description);
		// formData.append('status', 1);

		setAlert(null);
		setLoading(true);

		axios
			.post('http://markbran.in/apis/admin/service-action-card', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					'auth-token': jwtToken
				}
			})
			.then((res) => {
				// setUserSession(response.data.token, response.data.user);
				// history.push('/service-action');
				console.log(res.response.data);
				setAlert("Card Added SuccessFully")
			})
			.catch((err) => {
				console.log(err);
				if (err.response && err.response.data.message) {
					setAlert(err.response.data.message);
				} else {
					setAlert('Something went wrong!');
				}
			})
			.finally(() => setLoading(false));
	};

	return (
		<CRow>
			<CCol xs="12" sm="12">
				<CCard>
					<CCardHeader>Add service action card</CCardHeader>
					<CCardBody>
						<div>
							<br />
							{alert ? (
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>Alert</strong> {alert}.
                                <button onClick={() => setAlert('')} type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        ) : null}
							
							<CRow>
								<CCol xs="12" md="6">
									<CFormGroup>
										<CLabel htmlFor="category">Title</CLabel>
										<CInputGroup className="mb-3">
											<CInput
												value={title}
												required
												onChange={(e) => setTitle(e.target.value)}
												placeholder="Title"
												name="Title"
											/>
											{/* <Controller
                                                    name="title"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Categoty is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Category" autoComplete="category" />}
                                                /> */}
										</CInputGroup>
										{/* <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText> */}
									</CFormGroup>
								</CCol>

								<CCol md="6" xm="12">
									<CFormGroup>
										<CLabel htmlFor="category">Description</CLabel>
										<CInputGroup>
											<CTextarea
												// component="textarea"
												id="content"
												rows="3"
												onChange={(e) => setDescription(e.target.value)}
												value={description}
											/>
										</CInputGroup>
									</CFormGroup>
								</CCol>

								<CCol xs="6">
									<CLabel htmlFor="category">Image</CLabel>
									<CInputGroup className="mb-3">
										<CLabel htmlFor="categoryImage" variant="custom-file">
											Choose image...
										</CLabel>
										<CInputFile
											onChange={(e) => {
												setImage(e.target.files[0]);
												console.log(e.target.files[0]);
											}}
											custom
											id="categoryImage"
											type="file"
										/>
									</CInputGroup>
								</CCol>
							</CRow>
							<CRow>
								<CCol xl="6">
									<CFormGroup>
										<CLabel htmlFor="Button Text">Button Text</CLabel>
										<CInputGroup>
											<CInput
												type="text"
												onChange={(e) => setButtonText(e.target.value)}
												value={buttonText}
												placeholder="Button Text"
												autoComplete="Button Text"
											/>
										</CInputGroup>
									</CFormGroup>
								</CCol>
								<CCol xl="6">
									<CFormGroup>
										<CLabel htmlFor="Button Link">Button Link</CLabel>
										<CInputGroup>
											<CInput
												type="text"
												onChange={(e) => setButtonLink(e.target.value)}
												value={buttonLink}
												placeholder="Button Link"
												autoComplete="Button Link"
											/>
										</CInputGroup>
									</CFormGroup>
								</CCol>
							</CRow>
							{/* sortOderOnChange */}
							<CRow>
								<CCol xl="6">
									<CFormGroup>
										<CLabel htmlFor="Button Link">Sort Order</CLabel>
										<CInputGroup>
											<CInput
												type="text"
												onChange={(e) => setSortOrder(e.target.value)}
												value={sortOrder}
												placeholder="Button Link"
												autoComplete="Button Link"
											/>
										</CInputGroup>
									</CFormGroup>
								</CCol>
							</CRow>
							<CRow>
								<CCol xl="6">
									<CFormGroup>
										<CLabel htmlFor="category">Status</CLabel>
										<CInputGroup>
											<Switch onChange={() => setStatus(!status)} checked={status} />
										</CInputGroup>
									</CFormGroup>
								</CCol>
							</CRow>
							<CRow>
								<CCol xs="8">
									<button className="btn btn-success" onClick={onHandlerSubmit} disabled={loading ? true : false} type="submit">
										{loading ? 'Loading...' : 'Add card'}
									</button>
								</CCol>
							</CRow>
						</div>
					</CCardBody>
				</CCard>
			</CCol>
		</CRow>
	);
};

export default AddServiceActionCard;
