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
    CLabel,
    CInput,
    CButton,
    CFormGroup,
    CInputGroup
} from '@coreui/react';
import Switch from "react-switch";
import axios from 'axios';
import dateFormat from 'dateformat';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import AddInnovationComponent from './AddInnovationComponent.js';
const InnovationComponent = () => {
    const [innovations, setInnovations] = useState([]);
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertDanger, setShowAlertDanger] = useState(false);
    const jwtToken = sessionStorage.getItem('token');
    const [buttonLink, setButtonLink] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(false);
    //
    const clickOnDelete = (categoryId) => {
        confirmAlert({
            title: 'Are you sure?',
            message: 'You want to delete this item?',
            buttons: [
                {
                    label: 'Yes, Delete it',
                    onClick: () => deleteInnovation(categoryId)
                },
                {
                    label: 'No'
                    // onClick: () => alert('Click No')
                }
            ]
        });
    };
    //* call delete api
    const deleteInnovation = (categoryId) => {
        // alert(categoryId)
        axios
            .delete(`http://markbran.in/apis/admin/innovation/`, {
                headers: {
                    'auth-token': jwtToken //the token is a variable which holds the token
                }
            })
            .then(function (response) {
                setShowAlertSuccess(true);
                setShowAlertDanger(false);
                getInnovation();
                console.log(response);
            })
            .catch(function (error) {
                setShowAlertSuccess(false);
                setShowAlertDanger(true);
                console.log(error);
            });
    };

    const getInnovation = () => {
        axios
            .get('http://markbran.in/apis/admin/innovation', {
                headers: {
                    'auth-token': jwtToken //the token is a variable which holds the token
                }
            })
            .then(function (response) {
                // console.log(response.data.innovation);
                setInnovations(response.data.innovation);
                setButtonLink(response.data.innovation.buttonLink);
                setButtonText(response.data.innovation.buttonText);
                setTitle(response.data.innovation.title);
                setDescription(response.data.innovation.description);
                setStatus(response.data.innovation.status ? true : false);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    };
    const saveInnovation = () => {
        let formData = new FormData();
        formData.append('buttonLink', buttonLink);
        formData.append('buttonText', buttonText);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('id', 1);
        formData.append('status', status?1:0);
        axios
            .post('http://markbran.in/apis/admin/innovation', formData, {
                headers: {
                    'auth-token': jwtToken //the token is a variable which holds the token
                }
            })
            .then(function (response) {
                console.log(response);
                getInnovation();
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    };
    useEffect(() => {
        getInnovation();
    }, []);
    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>Innovation</CCardHeader>
                    <CCardBody>
                        <CRow className="my-4">
                            <CCol>
                                <CLabel>Title</CLabel>
                                <CInput
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Innovation Title"
                                />
                            </CCol>
                        </CRow>
                        <CRow className="my-4">
                            <CCol>
                                <CLabel>Description</CLabel>
                                <CInput
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Innovation Description"
                                />
                            </CCol>
                        </CRow>
                        <CRow className="my-4">
                            <CCol>
                                <CLabel>Button Link</CLabel>
                                <CInput
                                    value={buttonLink}
                                    onChange={(e) => setButtonLink(e.target.value)}
                                    placeholder="Button Link"
                                />
                            </CCol>
                        </CRow>
                        <CRow className="my-4">
                            <CCol>
                                <CLabel>Button Text</CLabel>
                                <CInput
                                    value={buttonText}
                                    onChange={(e) => setButtonText(e.target.value)}
                                    placeholder="Button Text"
                                />
                            </CCol>
                        </CRow>
                    </CCardBody>
                    {/* <AddInnovationComponent /> */}
                    <CRow>
                        <CCol className="ml-4" xl="6">
                            <CFormGroup>
                                <CLabel htmlFor="is_active">Status</CLabel>
                                <CInputGroup>
                                    {/* <CSwitch onChange={switch2} checked={switchState} className={'mx-1'} color={'success'} defaultChecked variant="opposite" /> */}
                                    <Switch onChange={()=> setStatus(!status)} checked={status} />
                                </CInputGroup>
                            </CFormGroup>
                        </CCol>
                    </CRow>
                    <CButton className="m-4 btn btn-success" style={{ maxWidth: '10rem' }} onClick={saveInnovation}>
                        Save Innovation
                    </CButton>
                </CCard>
            </CCol>
        </CRow>
    );
};

export default InnovationComponent;
