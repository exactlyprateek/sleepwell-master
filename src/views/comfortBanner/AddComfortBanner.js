import React, { useEffect, useState } from 'react'
import {
    // CButton,
    CFormText,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CInputFile,
    CInputGroup,
    CLabel,
    CRow,
    CTextarea
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import Switch from "react-switch";
import { Multiselect } from 'multiselect-react-dropdown';

import { useForm, Controller } from 'react-hook-form';


import { useHistory } from 'react-router';
const axios = require('axios').default;


const AddComfortBanner = () => {
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [bannerImage, setBannerImage] = useState('');
    const [shortOrder, setShortOrder] = useState('');
    // const [content, setContent] = useState('');
    const [isFeatured, setIsFeatured] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [stateArray, setStateArray] = useState();
    const [states, setStates] = useState([]);
    const [textMessage, setTextMessage] = useState('');


    const jwtToken = sessionStorage.getItem("token");


    //* banner
    const bannerOnChange = (e) => {
        setBannerImage(e.target.files[0]);
    }
    //* title 
    const titleOnChange = (e) => {
        setTitle(e.target.value);
    }
    //* Sort Order 
    const shortOrderOnChange = (e) => {
        setShortOrder(e.target.value);
    }
    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }
    //* description 
    const descriptionOnChange = (e) => {
        setDescription(e.target.value);
    }

    const handleStateSelect = (e) => {
        setStates(e.map((i,idx) => (i.id.toString())));
        console.log(states);
    }

    //* Get state api
    const axiosGetState = () => {
        axios.get('http://markbran.in/apis/admin/state', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                console.log(response.data.states);
                // { name: 'Srigar', id: 1 }, { name: 'Sam', id: 2 }
                setStateArray(response.data.states);
            })
            .catch(function (error) {
                // console.log(error.response);
                if (error.response && error.response.data.message) {
                    setError(error.response.data.message);
                }
            });
    }
    useEffect(() => {
        axiosGetState();
    }, []);
    const onHandlerSubmit = (e) => {
        e.preventDefault();
        // console.log('value', value);
        // console.log('bannerImage', bannerImage);
        setError(null);
        setLoading(true);

        const formData = new FormData();
        const status = isFeatured ? 1 : 0;
        formData.append('status', status);
        formData.append('image', bannerImage);
        formData.append('sortOrder', shortOrder);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('states', states);
        // formData.append('content', content);
        // console.log(formData);
        // axios.post(, formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         "auth-token": jwtToken //the token is a variable which holds the token

        //     }
        // }) 
        axios({
            url: 'http://markbran.in/apis/admin/comfort/banner',
            method: "POST",
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token

            },
            data: formData

        }).then(response => {
                
                // setUserSession(response.data.token, response.data.user);
                history.push('/comfort-banner')
                // console.log(response);
            })
            .catch(err => {
                
                if (err.response && err.response.data.message) {
                    setError(err.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            }).finally(()=>setLoading(false));
    }
    // console.log(errors);
    return (
        <div>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add Banner
                        </CCardHeader>
                        <CCardBody>
                            <CForm encType="multipart/form-data">
                                <br />
                                {
                                    error &&
                                    <p className="text-danger">
                                        {error}
                                    </p>
                                }
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={titleOnChange} value={title} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Banner</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="bannerImage" variant="custom-file">
                                                Choose banner...
                                            </CLabel>
                                            <CInputFile onChange={bannerOnChange} custom id="bannerImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>

                                {/* <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Button Text</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={bannerButtonTextOnChange} value={bannerButtonText} placeholder="Button Text" autoComplete="Button Text" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Button Link</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={bannerButtonLinkOnChange} value={bannerButtonLink} placeholder="Button Link" autoComplete="Button Link" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow> */}
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Select State</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Multiselect
                                                    options={stateArray} // Options to display in the dropdown
                                                    // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                    onSelect={(e) => handleStateSelect(e)} // Function will trigger on select event
                                                    onRemove={(e) => handleStateSelect(e)} // Function will trigger on select event
                                                    displayValue="state" // Property name to display in the dropdown options
                                                />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Sort Order</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={shortOrderOnChange} value={shortOrder} placeholder="Sort Order" autoComplete="Sort Order" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Description</CLabel>
                                            <CInputGroup className="mb-3">
                                                {/* <CInput type="text" onChange={shortOrderOnChange} value={shortOrder} placeholder="Sort Order" autoComplete="Sort Order" /> */}
                                                <CTextarea
                                                    // component="textarea"
                                                    id="content"
                                                    rows="5"
                                                    onChange={descriptionOnChange} value={description}
                                                ></CTextarea>
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Status</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={onChangeIsFeatured} checked={isFeatured} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                {/* <CRow>
                                    <CCol xl="8">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Content</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CTextarea
                                                    // component="textarea"
                                                    id="content"
                                                    rows="3"
                                                    onChange={contentOnChange} value={content}
                                                ></CTextarea>
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow> */}
                                <CRow>
                                    <CCol xs="8">
                                        <button  onClick={onHandlerSubmit }className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add Banner'}</button>
                                    </CCol>
                                </CRow>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

        </div>
    )
}

export default AddComfortBanner
