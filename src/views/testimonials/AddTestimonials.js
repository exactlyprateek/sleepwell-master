import React, { useState, Fragment } from 'react'
import {
    // CButton,
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

    // CInputGroupPrepend,

    // CInputGroupText,
    CLabel,
    CRow,
    CTextarea,
    // CSwitch
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import Switch from "react-switch";
const axios = require('axios').default;


const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
});

const AddTestimonial = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isFeatured, setIsFeatured] = useState(true);
    const [categoryImage, setCategoryImage] = useState('');

    const jwtToken = sessionStorage.getItem("token");

    //* category image
    const categoryOnChange = (e) => {
        setCategoryImage(e.target.files[0]);
    }

    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }

    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        let status = isFeatured ? 1 : 0;
        formData.append('status', status);
        formData.append('name', e.name);
        // formData.append('category', 'last long');
        formData.append('image', categoryImage);
        formData.append('description', e.description);
        // formData.append('status', 1);


        setError(null);
        setLoading(true)

        axios.post('http://markbran.in/apis/admin/testimonial', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'auth-token': jwtToken
            }
        })
            .then(res => {
                setLoading(false);
                // setUserSession(response.data.token, response.data.user);
                history.push('/testimonials')
            })
            .catch(err => {
                // console.log(err.response.data.message);
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
                            Add Testimonial
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
                                            <CLabel htmlFor="category">Name</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="name"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "name is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Name" autoComplete="Name" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.name && errors.name.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="categoryImage" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={categoryOnChange} custom id="categoryImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Description</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CTextarea
                                                    {...register('description')}
                                                    id="content"
                                                    rows="3"
                                                // onChange={descriptionOnChange} value={description}
                                                ></CTextarea>
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.description && errors.description.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Status</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={onChangeIsFeatured} checked={isFeatured} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add testimonial'}</button>
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

export default AddTestimonial
