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
    CInputFile,
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
    name: yup.string().required(),
});


const AddAdvantage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [advantageIcon, setAdvantageIcon] = useState('')
    const [advantageVideo, setAdvantageVideo] = useState('');

    const jwtToken = sessionStorage.getItem("token");


    const onChangeIsActive = (e) => {
        setIsActive(e);
    }

    const benefitOnChange = (e) => {
        setAdvantageIcon(e.target.files[0]);
    }
    const benefitVideoOnChange = (e) => {
        setAdvantageVideo(e.target.files[0]);
    }

    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        let status = isActive ? 1 : 0;
        formData.append('status', status);
        formData.append('advantage', e.name);
        formData.append('icon', advantageIcon);
        formData.append('video', advantageVideo);

        setError(null);
        setLoading(true)

        axios.post('http://markbran.in/apis/admin/advantage', formData, {
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
                console.log(err.response.data.message);
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
                            Add Advantage
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
                                            <CLabel htmlFor="size">Advantage</CLabel>
                                            <CInputGroup className="mb-3">
                                                {/* <Controller
                                                    name="size"
                                                    control={control}
                                                    defaultValue={''}
                                                    render={({ field }) => <CInput {...register('size')} type="text" placeholder="Add size" autoComplete="size" />}
                                                /> */}
                                                <CInput {...register('name')} type="text" placeholder="Add Advantage" autoComplete="Advantage" />
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
                                                <CLabel htmlFor="categoryImage" variant="custom-file">
                                                    Choose image...
                                                </CLabel>
                                                <CInputFile onChange={benefitOnChange} custom id="categoryImage" type="file" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
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
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add Advantage'}</button>
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

export default AddAdvantage
