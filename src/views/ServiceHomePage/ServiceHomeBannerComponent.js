import React, { useState } from 'react'
import {
  
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CInputFile,
    CInputGroup,
    CLabel,
    CRow,
    CFormText,
    CTextarea
} from '@coreui/react'
import Switch from "react-switch";
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const axios = require('axios').default;

const schema = yup.object().shape({
    title: yup.string().required(),
    buttonText: yup.string().required(),
    buttonLink: yup.string().required(),
    sortOrder: yup.number().positive(),
});

const ServiceHomeBannerComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });

    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    // const [content, setContent] = useState('');

    //* section 1
    const [sectionOneTitle, setSectionOneTitle] = useState('');
    const [sectionOneImage, setSectionOneImage] = useState('');
    const [sectionOneButtonText, setSectionOneButtonText] = useState('');
    const [sectionOneButtonLink, setSectionOneButtonLink] = useState('');
    const [sectionOneDescription, setSectionOneDescription] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [isActive, setIsActive] = useState(true);

    const jwtToken = sessionStorage.getItem("token");

    const onChangeIsActive = (e) => {
        setIsActive(e);
    }
    const sortOrderOnChange = (e) => {
        setSortOrder(e.target.value);
    }
    //* section 1
    const sectionOneImageOnChange = (e) => {
        setSectionOneImage(e.target.files[0]);
    }
    const sectionOneTitleOnChange = (e) => {
        setSectionOneTitle(e.target.value);
    }
    const sectionOneDescriptionOnChange = (e) => {
        setSectionOneDescription(e.target.value);
    }
    const sectionOneButtonTextOnChange = (e) => {
        setSectionOneButtonText(e.target.value);
    }
    const sectionOneButtonLinkOnChange = (e) => {
        setSectionOneButtonLink(e.target.value);
    }




    const onHandlerSubmit = (e) => {
        // e.preventDefault();
        // console.log('value', value);
        // console.log('bannerImage', bannerImage);
        setError(null);
        setLoading(true);

        const formData = new FormData();
        const status = isActive ? 1 : 0;
        formData.append('title', e.title);
        formData.append('image', sectionOneImage);
        formData.append('buttonText', e.buttonText);
        formData.append('buttonLink', e.buttonLink);
        formData.append('description', sectionOneDescription);
        formData.append('sortOrder', e.sortOrder);
        formData.append('status', status);
        // formData.append('content', content);
        // console.log(formData);

        axios.post('http://markbran.in/apis/admin/service-banner', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token

            }
        })
            .then(response => {
                setLoading(false);
                // setUserSession(response.data.token, response.data.user);
                history.push('/service-homepage')
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
        <>
            <CRow>
                <CCol xs="12" sm="12">
                    <CForm encType="multipart/form-data" onSubmit={handleSubmit(onHandlerSubmit)}>
                        <br />
                        {
                            error &&
                            <p className="text-danger">
                                {error}
                            </p>
                        }
                        <CRow>
                            <CCol xs="12" className="mb-3">
                                <h2>Banner section</h2>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol xl="6">
                                <CFormGroup>
                                    <CLabel htmlFor="shortItem">Banner title</CLabel>
                                    <CInputGroup className="mb-3">
                                        <CInput type="text" {...register('title')} placeholder="Title" autoComplete="title" />
                                    </CInputGroup>
                                    <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText>
                                </CFormGroup>
                            </CCol>
                            <CCol xs="6">
                                <CLabel htmlFor="category">Banner image</CLabel>
                                <CInputGroup className="mb-3">
                                    <CLabel htmlFor="cardOneImage" variant="custom-file">
                                        Choose Image...
                                    </CLabel>
                                    <CInputFile onChange={sectionOneImageOnChange} custom id="cardOneImage" type="file" />
                                </CInputGroup>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol xl="6">
                                <CFormGroup>
                                    <CLabel htmlFor="shortItem">Button text</CLabel>
                                    <CInputGroup className="mb-3">
                                        <CInput type="text" {...register('buttonText')} placeholder="Button text" autoComplete="Button text" />
                                    </CInputGroup>
                                    <CFormText className="help-block text-danger" color="red">{errors.buttonText && errors.buttonText.message}</CFormText>
                                </CFormGroup>
                            </CCol>
                            <CCol xl="6">
                                <CFormGroup>
                                    <CLabel htmlFor="shortItem">Button link</CLabel>
                                    <CInputGroup className="mb-3">
                                        <CInput type="text" {...register('buttonLink')} placeholder="Button link" autoComplete="Button link" />
                                    </CInputGroup>
                                    <CFormText className="help-block text-danger" color="red">{errors.buttonLink && errors.buttonLink.message}</CFormText>
                                </CFormGroup>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol xl="6">
                                <CFormGroup>
                                    <CLabel htmlFor="shortItem">Sort Order</CLabel>
                                    <CInputGroup className="mb-3">
                                        <CInput type="text" {...register('sortOrder')} placeholder="Sort Order" autoComplete="Sort Order" />
                                    </CInputGroup>
                                    <CFormText className="help-block text-danger" color="red">{errors.sortOrder && errors.sortOrder.message}</CFormText>
                                </CFormGroup>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol xl="12">
                                <CFormGroup>
                                    <CLabel htmlFor="shortItem">Description</CLabel>
                                    <CInputGroup className="mb-3">
                                        <CTextarea
                                            // component="textarea"
                                            id="content"
                                            rows="3"
                                            onChange={sectionOneDescriptionOnChange} value={sectionOneDescription}
                                        ></CTextarea>
                                    </CInputGroup>
                                </CFormGroup>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol xl="6">
                                <CFormGroup>
                                    <CLabel htmlFor="is_active">Status</CLabel>
                                    <CInputGroup>
                                        <Switch onChange={onChangeIsActive} checked={isActive} />
                                    </CInputGroup>
                                </CFormGroup>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol xs="8">
                                <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Save'}</button>
                            </CCol>
                        </CRow>
                    </CForm>
                </CCol>
            </CRow>

        </>
    )
}

export default ServiceHomeBannerComponent
