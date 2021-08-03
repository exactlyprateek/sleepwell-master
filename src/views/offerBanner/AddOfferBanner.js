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


const AddOfferBanner = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [bannerImage, setBannerImage] = useState('');
    const [isFeatured, setIsFeatured] = useState(true);
    const [showInHome, setShowInHome] = useState(false);
    const [title, setTitle] = useState('');
    const [stateArray, setStateArray] = useState();
    const [states, setStates] = useState([]);

    const [textMessage, setTextMessage] = useState('');


    const jwtToken = sessionStorage.getItem("token");

    const handleStateSelect = (e) => {
        setStates(e);
    }
    //* banner
    const bannerOnChange = (e) => {
        setBannerImage(e.target.files[0]);
    }
    //* title 
    const titleOnChange = (e) => {
        setTitle(e.target.value);
    }
    
    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }
    const onChangeShowInHome = (e) => {
        setShowInHome(e);
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
        // setLoading(true);

        const formData = new FormData();
        formData.append('image', bannerImage);
        formData.append('title', title);
        formData.append('status', isFeatured);
        // formData.append('content', content);
        // console.log(formData);

        // axios.post('http://markbran.in/apis/admin/banner', formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         "auth-token": jwtToken //the token is a variable which holds the token

        //     }
        // })
        //     .then(response => {
        //         setLoading(false);
        //         // setUserSession(response.data.token, response.data.user);
        //         history.push('/banners')
        //         // console.log(response);
        //     })
        //     .catch(err => {
        //         setLoading(false);
        //         if (err.response && err.response.data.message) {
        //             setError(err.response.data.message);
        //         } else {
        //             setError("Something went wrong!");
        //         }
        //     });
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
                            <CForm encType="multipart/form-data" onSubmit={onHandlerSubmit}>
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
                                            <CLabel htmlFor="shortItem">Link</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={titleOnChange} value={title} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="bannerImage" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={bannerOnChange} custom id="bannerImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Select State</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Multiselect
                                                    options={stateArray} // Options to display in the dropdown
                                                    // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                    onSelect={handleStateSelect} // Function will trigger on select event
                                                    onRemove={handleStateSelect} // Function will trigger on select event
                                                    displayValue="state" // Property name to display in the dropdown options
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
                                                <Switch onChange={onChangeIsFeatured} checked={isFeatured} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Show in home</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={onChangeShowInHome} checked={showInHome} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add Banner'}</button>
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

export default AddOfferBanner
