import React, { useState, Fragment } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CFormText,
    CInput,
    CInputGroup,
    CLabel,
    CRow,
} from '@coreui/react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router';
import Switch from "react-switch";
import CkEditor from '../../components/CkEditor5.js';

const axios = require('axios').default;

const schema = yup.object().shape({
    Heading: yup.string().required(),
});


const AddReturnPolicy = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [pageDescription, setPageDescription] = useState('');

    let jwtToken = sessionStorage.getItem("token");



    const handleDescription = (data) => {
        setPageDescription(data);
    }
    
    const onChangeIsActive = (e) => {
        setIsActive(e);
    }
   

    const onHandlerSubmit = (e) => {
        let status = isActive ? 1 : 0;
        const formData = new FormData();
        formData.append('heading', e.Heading);
        formData.append('description', pageDescription);
        formData.append('status', status);

        setError(null);
        setLoading(true)

        axios.post('http://markbran.in/apis/admin/returnPolicy', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/return-policy')
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

    return (
        <Fragment>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add Return Policy
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
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="Heading">Heading</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput {...register('Heading')} type="text" placeholder="Add Heading" autoComplete="Heading" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.Heading && errors.Heading.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow className="my-3">
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="is_active">Description</CLabel>
                                            <CkEditor onEditorValue={handleDescription}  />
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow className="my-3">
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="is_active">Status</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={onChangeIsActive} checked={isActive} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                
                                <CRow className="mt-4">
                                    {/* <hr /> */}
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add return policy'}</button>
                                    </CCol>
                                </CRow>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

        </Fragment>
    )
}

export default AddReturnPolicy
