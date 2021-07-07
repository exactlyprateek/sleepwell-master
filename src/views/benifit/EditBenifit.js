import React, { useEffect, useState, Fragment } from 'react';
import {
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
const axios = require('axios').default;

const schema = yup.object().shape({
    name: yup.string().required(),
});

const EditBenifit = () => {
    let benifitId = useParams();

    const { control, handleSubmit, setValue, register, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const jwtToken = sessionStorage.getItem("token");



    const [benifitIcon, setBenifitIcon] = useState('')
    const [benifitState, setBenifitState] = useState([]);

    const onChangeisActive = (e) => {
        setIsActive(e);
    }

    const benifitOnChange = (e) => {
        setBenifitIcon(e.target.files[0]);
    }


    //* get benifit
    const getBenifitAxios = () => {
        axios.get(`http://markbran.in/apis/admin/benifit/${benifitId.id}`, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                console.log(response.data.benifit);
                setBenifitState(response.data.benifit);
            })
            .catch(function (err) {
                // handle error
                if (err.response.data.message) {
                    setError(err.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }

    useEffect(() => {
        getBenifitAxios();
        if (setBenifitState) {
            setValue("name", benifitState.benifit)
        }
        setIsActive(benifitState.status);
        // setBenifitIcon(benifitState.icon);
    }, [benifitState.status, benifitState.benifit]);

    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        let status = isActive ? 1 : 0;
        formData.append('status', status);
        formData.append('benifit', e.name);
        formData.append('image', benifitIcon);

        setError(null);
        setLoading(true);

        axios.patch(`http://markbran.in/apis/admin/benifit/${benifitId.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/benifits')
            })
            .catch(err => {
                setLoading(false);
                if (err.response) {
                    if (err.response.data.message) {
                        setError(err.response.data.message);
                    } else {
                        setError("Something went wrong!");
                    }
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
                            Edit Benefit
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
                                            <CLabel htmlFor="benifit">Benefit</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="name"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Name is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Benefit" autoComplete="Benefit" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.name && errors.name.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>

                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="size">Benefit Icon</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CLabel htmlFor="categoryImage" variant="custom-file">
                                                    Choose image...
                                                </CLabel>
                                                <CInputFile onChange={benifitOnChange} custom id="categoryImage" type="file" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="1">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/${benifitState.image}`} className="img-fluid" alt="" />
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="8">
                                        <CFormGroup>
                                            <CInputGroup>
                                                <Switch onChange={onChangeisActive} checked={isActive} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Update benefit'}</button>
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

export default EditBenifit
