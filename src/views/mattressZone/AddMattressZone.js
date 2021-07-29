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
    CTextarea,
} from '@coreui/react'
import Switch from "react-switch";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import CkEditor from '../../components/CkEditor5.js';
import { useHistory } from 'react-router';

const axios = require('axios').default;

const schema = yup.object().shape({
    title: yup.string().required(),
    sortOrder: yup.number().positive(),
});

const AddMattressZone = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });

    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [bannerImage, setBannerImage] = useState('');
    const [isFeatured, setIsFeatured] = useState(true);
    const [bannerButtonText, setBannerButtonText] = useState('');
    const [bannerButtonLink, setBannerButtonLink] = useState('');
    const [description, setDescription] = useState('');



    const jwtToken = sessionStorage.getItem("token");

    //* banner button link
    const bannerButtonLinkOnChange = (e) => {
        setBannerButtonLink(e.target.value);
    }
    //* banner button text
    const bannerButtonTextOnChange = (e) => {
        setBannerButtonText(e.target.value);
    }
    //* banner
    const bannerOnChange = (e) => {
        setBannerImage(e.target.files[0]);
    }
    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }
    const handleDescription = (data) => {
        setDescription(data.target.value);
    }


    const onHandlerSubmit = (e) => {
        setError(null);
        setLoading(true);

        const formData = new FormData();
        const status = isFeatured ? 1 : 0;
        formData.append('image', bannerImage);
        formData.append('title', e.title);
        formData.append('buttonText', bannerButtonText);
        formData.append('buttonLink', bannerButtonLink);
        formData.append('status', status);
        formData.append('description', description);
        formData.append('sortOrder', e.sortOrder);

        axios.post('http://markbran.in/apis/admin/comfort', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token

            }
        })
            .then(response => {
                setLoading(false);
                // setUserSession(response.data.token, response.data.user);
                history.push('/comfort-home')
                // console.log(response);
            })
            .catch(err => {
                setLoading(false);
                if (err.response && err.response.data.message) {
                    setError(err.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }
    // console.log(errors);
    return (
        <div>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add Comfort Home
                        </CCardHeader>
                        <CCardBody>
                            <CForm encType="multipart/form-data" onSubmit={handleSubmit(onHandlerSubmit)}>
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
                                                <CInput {...register('title')} type="text" placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>

                                <CRow>
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
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="Sort Order">Sort Order</CLabel>
                                            <CInputGroup>
                                                <CInput type="text" {...register('sortOrder')} placeholder="Sort Order" autoComplete="Sort Order" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.sortOrder && errors.sortOrder.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="bannerImage" variant="custom-file">
                                                Choose banner...
                                            </CLabel>
                                            <CInputFile onChange={bannerOnChange} custom id="bannerImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Description</CLabel>
                                            <CTextarea onChange={handleDescription} value={description} />
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
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add comfort home'}</button>
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

export default AddMattressZone
