import React, { useState, Fragment } from 'react'
import {
    // CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CInputFile,
    CInputGroup,
    CLabel,
    CRow,
    CTextarea,
    CFormText,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'

import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Switch from "react-switch";

const axios = require('axios').default;

const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    author: yup.string().required(),
});

const AddBlog = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [blogImage, setBlogImage] = useState('');
    const [isActive, setIsActive] = useState(true);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [blogAuthor, setBlogAuthor] = useState('');

    const jwtToken = sessionStorage.getItem("token");

    const onChangeIsActive = (e) => {
        setIsActive(e);
    }
    //* blog image
    const blogOnChange = (e) => {
        setBlogImage(e.target.files[0]);
    }
    // //* banner button text
    // const blogAuthorOnChange = (e) => {
    //     setBlogAuthor(e.target.value);
    // }
    //* title 
    // const titleOnChange = (e) => {
    //     setTitle(e.target.value);
    // }
    // //* description 
    // const descriptionOnChange = (e) => {
    //     setDescription(e.target.value);
    // }

    const onHandlerSubmit = (e) => {


        // e.preventDefault();
        // console.log('value', value);
        // console.log('blogImage', blogImage);
        setError(null);
        setLoading(true);

        const formData = new FormData();
        let status = isActive ? 1 : 0;
        formData.append('status', status);
        formData.append('image', blogImage);
        formData.append('title', e.title);
        formData.append('description', e.description);
        formData.append('author', e.author);

        axios.post('http://markbran.in/apis/admin/blog', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                // setUserSession(response.data.token, response.data.user);
                history.push('/blogs')
                // console.log(response);
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
    // console.log(errors);
    return (
        <div>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add Blog
                        </CCardHeader>
                        <CCardBody>
                            <CForm encType="multipart/form-data" onSubmit={handleSubmit(onHandlerSubmit)}>
                                <br />
                                {
                                    error &&
                                    <p className="text-danger">
                                        {error}
                                    </p>
                                }
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" {...register('title')} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Blog Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="blogImage" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={blogOnChange} custom id="blogImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="blogAuthor">Blog Author</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" id="blogAuthor" {...register('author')} placeholder="Blog Author" autoComplete="Blog Author" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.author && errors.author.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>

                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Description</CLabel>
                                            <CInputGroup className="mb-3">
                                                {/* <CInput type="text" onChange={shortOrderOnChange} value={shortOrder} placeholder="Sort Order" autoComplete="Sort Order" /> */}
                                                <CTextarea
                                                    {...register('description')}
                                                    // component="textarea"
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
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add blog'}</button>
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

export default AddBlog
