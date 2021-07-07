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
    CTextarea,
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
    sectionTitle: yup.string().required(),
    name        : yup.string().required(),
    description : yup.string().required(),
});


const AddSection = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [description, setDescription] = useState('');



    //* description
    const descriptionOnChange = (e) => {
        setDescription(e.target.value);
    }

    const onChangeIsActive = (e) => {
        setIsActive(e);
    }


    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        formData.append('is_active', isActive);
        formData.append('size', e.size);

        setError(null);
        setLoading(true)

        // axios.post('/size/', formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
        //     .then(response => {
        //         setLoading(false);
        //         history.push('/sizes')
        //     })
        //     .catch(err => {
        //         setLoading(false);
        //         if (err.response.data.errorMessage) {
        //             setError(err.response.data.errorMessage);
        //         } else {
        //             setError("Something went wrong!");
        //         }
        //     });
    }

    return (
        <Fragment>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add Section
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
                                            <CLabel htmlFor="size">Section Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput {...register('sectionTitle')} type="text" placeholder="Add Section Title" autoComplete="Section Title" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.sectionTitle && errors.sectionTitle.message}</CFormText>
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
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Description</CLabel>
                                            <CInputGroup>
                                                <CTextarea
                                                    // component="textarea"
                                                    id="content"
                                                    rows="3"
                                                    onChange={descriptionOnChange} value={description}
                                                ></CTextarea>
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
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add section'}</button>
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

export default AddSection
