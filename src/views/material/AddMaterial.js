import React, { useState, Fragment } from 'react'
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
    CTextarea,
    // CSwitch
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import Switch from "react-switch";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const axios = require('axios').default;

const schema = yup.object().shape({
    title: yup.string().required(),
});

const AddMaterial = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });

    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isFeatured, setIsFeatured] = useState(true);
    const [materialImage, setMaterialImage] = useState('');


    let jwtToken = sessionStorage.getItem("token");

    //* category image
    const imageOnChange = (e) => {
        setMaterialImage(e.target.files[0]);
    }
    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }

    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        let status = isFeatured ? 1 : 0;
        formData.append('status', status);
        formData.append('title', e.title);
        formData.append('image', materialImage);


        setError(null);
        setLoading(true)

        axios.post('http://markbran.in/apis/admin/material', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'auth-token': jwtToken
            }
        })
            .then(res => {
                setLoading(false);
                // setUserSession(response.data.token, response.data.user);
                history.push('/material')
                console.log(res.response.data);
            })
            .catch(err => {
                // console.log(err.response.data.message);
                setLoading(false);
                if (err.response && err.response.data.message) {
                    setError(err.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }

    return (
        <div>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add Material
                        </CCardHeader>
                        <CCardBody>
                            <CForm onSubmit={handleSubmit(onHandlerSubmit)}>
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
                                            <CLabel htmlFor="Title">Title</CLabel>
                                            <CInputGroup>
                                                <CInput type="text" {...register('title')} placeholder="Title" autoComplete="Title" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="categoryImage" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={imageOnChange} custom id="categoryImage" type="file" />
                                        </CInputGroup>
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
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add material'}</button>
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

export default AddMaterial
