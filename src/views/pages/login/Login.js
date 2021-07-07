import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { setUserSession } from '../../../Util/Comman';
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormGroup,
    CFormText,
    CInput,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { useForm, Controller } from 'react-hook-form';
const axios = require('axios').default;

// "proxy": "http://localhost:8000"

const Login = (props) => {
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { control, handleSubmit, formState: { errors }, register } = useForm({ mode: 'all' });


    const onHandlerSubmit = (value) => {
        const {email, password} = value;
        // console.log("args", value);
        setError(null);
        setLoading(true);
        axios.post('http://markbran.in/apis/admin/login', {
            emailId: email,
            password: password
        })
        .then(response => {
            // console.log(response);
            setLoading(false);
            setUserSession(response.data.token, response.data.admin);
            history.push('/dashboard')
        })
        .catch(err => {
            setLoading(false);
            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError("Something went wrong!");
            }
        });
    }
    
    return (
        <div className="c-app c-default-layout flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md="8">
                        <CCardGroup>
                            <CCard className="p-4">
                                <CCardBody>
                                    <CForm onSubmit={handleSubmit(onHandlerSubmit)}>
                                        <h1>Login</h1>
                                        <p className="text-muted">Sign In to your account</p>
                                        <br />
                                        {
                                            error &&
                                            <p className="text-danger">
                                                {error}
                                            </p>
                                        }
                                        <CFormGroup>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupPrepend>
                                                    <CInputGroupText>
                                                        <CIcon name="cil-user" />
                                                    </CInputGroupText>
                                                </CInputGroupPrepend>
                                                {/* <CInput type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" autoComplete="email" /> */}
                                                <Controller
                                                    name="email"
                                                    control={control}
                                                    defaultValue={email}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Email is required"
                                                        },
                                                        pattern: {
                                                            value: /^\w+[\w-.]*@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/i,
                                                            message: "invalid email address"
                                                        }
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="email"  placeholder="Email" autoComplete="email" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.email && errors.email.message}</CFormText>
                                        </CFormGroup>
                                        <CFormGroup>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupPrepend>
                                                    <CInputGroupText>
                                                        <CIcon name="cil-lock-locked" />
                                                    </CInputGroupText>
                                                </CInputGroupPrepend>
                                                {/* <CInput type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" autoComplete="email" /> */}
                                                <Controller
                                                    name="password"
                                                    control={control}
                                                    defaultValue={password}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Password is required"
                                                        }
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="password"  placeholder="Password" autoComplete="password" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.password && errors.password.message}</CFormText>
                                        </CFormGroup>
                                        
                                        <CRow>
                                            <CCol xs="6">
                                                <CButton type="submit" color="primary" disabled={loading ? true : false} className="px-4">{loading ? 'Loading...' : 'Login'}</CButton>
                                            </CCol>
                                        </CRow>
                                    </CForm>
                                </CCardBody>
                            </CCard>
                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Login
