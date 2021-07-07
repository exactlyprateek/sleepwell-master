import React, { useEffect, useState } from 'react'
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
    CTextarea
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Switch from "react-switch";

const axios = require('axios').default;


const EditAboutBanner = () => {
    let bannerId = useParams();
    // console.log(bannerId);
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });

    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [bannerImage, setBannerImage] = useState('');
    const [banner, setBanner] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isFeatured, setIsFeatured] = useState(true);

    const jwtToken = sessionStorage.getItem("token");

    //* get banner
    const getBannerAxios = () => {
        axios.get(`http://markbran.in/apis/admin/aboutUsBanner`, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (e) {
                // handle success
                console.log(e.data.banner);
                setBanner(e.data.banner);
            })
            .catch(function (error) {
                if (error.response && error.response.data.message) setError(error.response.data.message);
            });
    }


    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }
    //* title 
    const titleOnChange = (e) => {
        setTitle(e.target.value);
    }

    //* description 
    const descriptionOnChange = (e) => {
        setDescription(e.target.value);
    }
    //* image
    const bannerOnChange = (e) => {
        setBannerImage(e.target.files[0]);
    }

    useEffect(() => {
        getBannerAxios();
        setIsFeatured((banner.status === 1 ? true : false));
        setTitle(banner.title);
        setDescription(banner.description);
    }, [banner.status, banner.title, banner.description]);
    const onHandlerSubmit = (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const formData = new FormData();
        let status = isFeatured ? 1 : 0;
        formData.append('status', status);
        formData.append('image', bannerImage);
        formData.append('title', title);
        formData.append('description', description);
        // formData.append('content', content);
        // console.log(formData);
        // console.log(shortOrder);

        axios.patch(`http://markbran.in/apis/admin/aboutUsBanner/${banner.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/about-us-banner/edit')
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
                if (err.response && err.response.data.message) {
                    setError(err.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }
    // console.log(errors);
    return (
        <>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Edit Banner
                        </CCardHeader>
                        <CCardBody>
                            <CForm encType="multipart/form-data" onSubmit={onHandlerSubmit}>
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
                                                <CInput type="text" onChange={titleOnChange} value={title} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="5">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="bannerImage" variant="custom-file">
                                                Choose banner...
                                            </CLabel>
                                            {/* <Controller
                                                name="bannerImage"
                                                control={control}
                                                defaultValue={''}
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: "Image file is required"
                                                    },
                                                }}
                                                render={({ field }) => <CInputFile {...field} onChange={onChange} custom id="bannerImage" />}
                                            /> */}
                                            <CInputFile onChange={bannerOnChange} custom id="bannerImage" type="file" />
                                        </CInputGroup>
                                        {/* <CFormText className="help-block text-danger" color="red">{errors.categoryId && errors.categoryId.message}</CFormText> */}
                                    </CCol>
                                    <CCol xs="1">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/${banner.image}`} className="img-fluid" width="120px" alt="" />
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Description</CLabel>
                                            <CInputGroup className="mb-3">
                                                {/* <CInput type="text" onChange={shortOrderOnChange} value={shortOrder} placeholder="Sort Order" autoComplete="Sort Order" /> */}
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
                                            <CLabel htmlFor="category">Status</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={onChangeIsFeatured} checked={isFeatured} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Edit Banner'}</button>
                                    </CCol>
                                </CRow>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

        </>
    )
}

export default EditAboutBanner
