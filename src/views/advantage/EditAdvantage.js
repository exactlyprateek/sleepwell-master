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

const EditAdvantage = () => {
    let advantageId = useParams();

    const { control, handleSubmit, setValue, register, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);


    const [advantageIcon, setAdvantageIcon] = useState('')
    const [advantageState, setAdvantageState] = useState([]);
    const [advantageVideo, setAdvantageVideo] = useState('');

    const jwtToken = sessionStorage.getItem("token");


    const benefitVideoOnChange = (e) => {
        setAdvantageVideo(e.target.files[0]);
    }
    const onChangeIsActive = (e) => {
        setIsActive(e);
    }

    const advantageIconOnChange = (e) => {
        setAdvantageIcon(e.target.files[0]);
    }


    const getAdvantageAxios = () => {
        axios.get(`http://markbran.in/apis/admin/advantage/${advantageId.id}`, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                console.log(response.data);
                setAdvantageState(response.data.advantage);
            })
            .catch(function (error) {
                // handle error
                if (error.response) {
                    if (error.response.data.message) {
                        setError(error.response.data.message);
                    } else {
                        setError("Something went wrong!");
                    }
                } else {
                    setError("Something went wrong!");
                }
            });
    }

    useEffect(() => {
        getAdvantageAxios();
        if (setAdvantageState) {
            setValue("name", advantageState.advantage)
        }
        setIsActive(advantageState.status);
    }, [advantageState.status, advantageState.advantage]);

    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        let status = isActive ? 1 : 0;
        formData.append('status', status);
        formData.append('advantage', e.name);
        formData.append('icon', advantageIcon);
        formData.append('video', advantageVideo);

        setError(null);
        setLoading(true);

        axios.patch(`http://markbran.in/apis/admin/advantage/${advantageId.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/advantages')
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
        <div>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Edit Advantage
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
                                            <CLabel htmlFor="benifit">Advantage</CLabel>
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
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Benifit" autoComplete="Benifit" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.name && errors.name.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>

                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="size">Advantage Icon</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CLabel htmlFor="advantageImage" variant="custom-file">
                                                    Choose image...
                                                </CLabel>
                                                <CInputFile onChange={advantageIconOnChange} custom id="advantageImage" type="file" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="2">
                                        <img src={`${process.env.REACT_APP_BASE_URL}${advantageState.icon}`} className="img-fluid" alt="" />
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="size">Advantage Video</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CLabel htmlFor="categoryVideo" variant="custom-file">
                                                    Choose video...
                                                </CLabel>
                                                <CInputFile onChange={benefitVideoOnChange} custom id="categoryVideo" type="file" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="1">
                                        <p>{advantageState.videos}</p>
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
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Update advantage'}</button>
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

export default EditAdvantage
