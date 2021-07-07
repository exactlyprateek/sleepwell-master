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
const axios = require('axios').default;

const schema = yup.object().shape({
    thickness: yup.number().required().positive(),
});

const EditThickness = () => {
    let thicknessId = useParams();

    const { control, handleSubmit, setValue, register, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [thicknessState, setThicknessState] = useState([]);

    const jwtToken = sessionStorage.getItem("token");



    const onChangeIsActive = (e) => {
        setIsActive(e);
    }

    //* get thickness
    const getThicknessAxios = () => {
        axios.get(`http://markbran.in/apis/admin/thickness/${thicknessId.id}`, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                setThicknessState(response.data.thickness);
                setError(null);
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
        getThicknessAxios();
        if (thicknessState) {
            setValue("thickness", thicknessState.thickness)
        }
        setIsActive((thicknessState.status ? true : false));
    }, [thicknessState.status, thicknessState.thickness]);

    const onHandlerSubmit = (e) => {
        // console.log(e);
        const formData = new FormData();
        let status = isActive ? 1 : 0;
        formData.append('status', status);
        formData.append('thickness', e.thickness);

        setError(null);
        setLoading(true);

        axios.patch(`http://markbran.in/apis/admin/thickness/${thicknessId.id}`, formData, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/thickness')
                // console.log(response);
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
                            Edit Size
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
                                                <Controller
                                                    name="thickness"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Thickness is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Thickness" autoComplete="Thickness" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.thickness && errors.thickness.message}</CFormText>
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
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Update Size'}</button>
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

export default EditThickness
