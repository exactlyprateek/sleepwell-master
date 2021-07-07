import React, { useState, Fragment, useEffect } from 'react'
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
    CSelect,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router';
import Switch from "react-switch";
const axios = require('axios').default;

const schema = yup.object().shape({
    city: yup.string().required(),
});


const AddCity = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [states, setStates] = useState([]);
    let jwtToken = sessionStorage.getItem("token");



    const onChangeIsActive = (e) => {
        setIsActive(e);
    }

    const axiosCategories = () => {
        axios.get('http://markbran.in/apis/admin/state', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                setStates(response.data.states);
            })
            .catch(function (error) {
                if (error.response && error.response.data.message) {
                    setError(error.response.data.message);
                }
            });
    }
    useEffect(() => {
        axiosCategories();
    }, []);
    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        formData.append('is_active', isActive);
        formData.append('city', e.city);

        setError(null);
        setLoading(true)

        axios.post('/size/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/sizes')
            })
            .catch(err => {
                setLoading(false);
                if (err.response.data.errorMessage) {
                    setError(err.response.data.errorMessage);
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
                            Add City
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
                                            <CLabel htmlFor="category">State</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CSelect name="stateId" >
                                                    <option value="">
                                                        Select State
                                                    </option>
                                                    {states.map(item =>
                                                        <option key={item.id} value={item.id}>
                                                            {item.state}
                                                        </option>
                                                    )}
                                                </CSelect>

                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.stateId && errors.stateId.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="size">City</CLabel>
                                            <CInputGroup className="mb-3">
                                                {/* <Controller
                                                    name="size"
                                                    control={control}
                                                    defaultValue={''}
                                                    render={({ field }) => <CInput {...register('size')} type="text" placeholder="Add size" autoComplete="size" />}
                                                /> */}
                                                <CInput {...register('city')} type="text" placeholder="Add city" autoComplete="city" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.city && errors.city.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="is_active">Status</CLabel>
                                            <CInputGroup>
                                                {/* <CSwitch onChange={switch2} checked={switchState} className={'mx-1'} color={'success'} defaultChecked variant="opposite" /> */}
                                                <Switch onChange={onChangeIsActive} checked={isActive} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add city'}</button>
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

export default AddCity
