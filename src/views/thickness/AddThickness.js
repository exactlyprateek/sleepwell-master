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
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router';
import Switch from "react-switch";
const axios = require('axios').default;

const schema = yup.object().shape({
    thickness: yup.number().required().positive(),
});


const AddThickness = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(true);

    const jwtToken = sessionStorage.getItem("token");



    const onChangeIsActive = (e) => {
        setIsActive(e);
    }


    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        let status = isActive ? 1 : 0;
        formData.append('status', status);
        formData.append('thickness', e.thickness);

        setError(null);
        setLoading(true)

        axios.post('http://markbran.in/apis/admin/thickness', formData, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/thickness')
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
                            Add Thickness
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
                                            <CLabel htmlFor="size">Thickness</CLabel>
                                            <CInputGroup className="mb-3">
                                                {/* <Controller
                                                    name="size"
                                                    control={control}
                                                    defaultValue={''}
                                                    render={({ field }) => <CInput {...register('size')} type="text" placeholder="Add size" autoComplete="size" />}
                                                /> */}
                                                <CInput {...register('thickness')} type="text" placeholder="Add thickness" autoComplete="thickness" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.thickness && errors.thickness.message}</CFormText>
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
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add Thickness'}</button>
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

export default AddThickness
