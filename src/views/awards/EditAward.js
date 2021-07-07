import React, { useEffect, useState, Fragment } from 'react'
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
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory, useParams } from 'react-router';
import Switch from "react-switch";

import dateFormat from 'dateformat'
import DatePicker from 'react-date-picker';
import YearPicker from "react-year-picker";

const axios = require('axios').default;

const schema = yup.object().shape({
    title: yup.string().required(),
    name: yup.string().required(),
});

const EditAward = () => {
    let awardId = useParams();

    const { control, handleSubmit, setValue, register, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [awardState, setAwardState] = useState([]);
    const [startDate, setStartDate] = useState();
    const [year, setYear] = useState();

    const jwtToken = sessionStorage.getItem("token");


    const handleYearOnChange = (date) => {
        console.log(date);
        setYear(date)
    }
    const onChangeIsActive = (e) => {
        setIsActive(e);
    }

    const yearOnChange = (startDate) => {
        setStartDate(startDate);

        // console.log(dateFormat(startDate, "yyyy"));
    }

    const getAwardAxios = () => {
        axios.get(`http://markbran.in/apis/admin/award/${awardId.id}`, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                console.log(response.data);
                setAwardState(response.data.award);
                setError(null);
            })
            .catch(function (err) {
                if (err.response.data.message) {
                    setError(err.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }

    useEffect(() => {
        getAwardAxios();
        if (awardState) {
            setValue("title", awardState.title)
            setValue("name", awardState.name)
        }
        setIsActive(awardState.status);
        setYear(new Date().getFullYear());
        // setYear(awardState.year);
        setStartDate(dateFormat(awardState.year, "dddd/mmmm/yyyy"));
    }, [awardState.status, awardState.title, awardState.name, awardState.year]);

    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        let status = isActive ? 1 : 0;
        formData.append('status', status);
        formData.append('title', e.title);
        formData.append('name', e.name);
        formData.append('year', startDate);

        setError(null);
        setLoading(true);

        axios.patch(`http://markbran.in/apis/admin/award/${awardId.id}`, formData, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/awards')
                setError(null);
            })
            .catch(err => {
                setLoading(false);
                // console.log(err);
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
                            Edit Award
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
                                                <Controller
                                                    name="title"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Size is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Size" autoComplete="size" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="size">Name</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="name"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Size is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Size" autoComplete="size" />}
                                                />
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
                                                <YearPicker onChange={handleYearOnChange} value={year} />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.year && errors.year.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="8">
                                        <CFormGroup>
                                            <CInputGroup>
                                                <Switch onChange={onChangeIsActive} checked={isActive} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Update award'}</button>
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

export default EditAward
