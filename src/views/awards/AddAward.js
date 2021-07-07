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
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import dateFormat from 'dateformat'
import DatePicker from 'react-date-picker';
import YearPicker from "react-year-picker";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router';
import Switch from "react-switch";
const axios = require('axios').default;

const schema = yup.object().shape({
    title: yup.string().required(),
    name: yup.string().required(),
    // year: yup.string().required(),
    // year: yup.date(),
    // eventEndDate: yup
    //     .date()
    //     .when(
    //         "startDate",
    //         (eventStartDate, schema) => eventStartDate && schema.min(eventStartDate))
});


const AddAward = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [startDate, setStartDate] = useState(new Date());
    const [year, setYear] = useState(new Date());

    const jwtToken = sessionStorage.getItem("token");


    const onChangeIsActive = (e) => {
        setIsActive(e);
    }

    const yearOnChange = (startDate) => {
        setStartDate(startDate);
        // console.log(dateFormat(startDate, "yyyy"));
    }
    const handleYearOnChange = (date) => {
        // console.log(date);
        setYear(date)
    }

    const onHandlerSubmit = (e) => {
        // { dateFormat(item.year, "yyyy") }
        // console.log(dateFormat(startDate, "yyyy"));
        const formData = new FormData();
        let status = isActive ? 1 : 0;
        formData.append('status', status);
        formData.append('title', e.title);
        formData.append('name', e.name);
        formData.append('year', "2021");
        // formData.append('year', dateFormat(startDate, "yyyy"));

        setError(null);
        setLoading(true)

        axios.post('http://markbran.in/apis/admin/award', formData, {
            headers: {
                // 'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/awards')
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
                            Add Award
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
                                            <CLabel htmlFor="size">Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput {...register('title')} type="text" placeholder="Add title" autoComplete="title" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="size">Name</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput {...register('name')} type="text" placeholder="Add name" autoComplete="name" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.name && errors.name.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="size">Year</CLabel>
                                            <CInputGroup className="mb-3">
                                                <DatePicker
                                                    // {...register('year')}
                                                    onChange={yearOnChange}
                                                    value={startDate}
                                                />
                                            </CInputGroup>      
                                            <CFormText className="help-block text-danger" color="red">{errors.year && errors.year.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="size">Year</CLabel>
                                            <CInputGroup className="mb-3">
                                                <YearPicker onChange={handleYearOnChange} />
                                            </CInputGroup>      
                                            <CFormText className="help-block text-danger" color="red">{errors.year && errors.year.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="is_active">Is Active</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={onChangeIsActive} checked={isActive} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add Award'}</button>
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

export default AddAward
