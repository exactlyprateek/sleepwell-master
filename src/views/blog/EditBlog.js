import React, { useEffect, useState, Fragment } from 'react'
import {
    // CButton,
    CFormText,
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
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Switch from "react-switch";

const axios = require('axios').default;

const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    author: yup.string().required(),
});

const EditBlog = () => {
    let blogId = useParams();

    const { control, handleSubmit, setValue, register, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });

    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [blogImage, setBlogImage] = useState('');
    const [shortOrder, setShortOrder] = useState('');
    // const [content, setContent]         = useState('');
    const [blog, setBlog] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [blogAuthor, setBlogAuthor] = useState('');
    const [isActive, setIsActive] = useState(false);


    const jwtToken = sessionStorage.getItem("token");

    const onChangeIsActive = (e) => {
        setIsActive(e);
    }
    //* title 
    const titleOnChange = (e) => {
        setTitle(e.target.value);
    }

    //* blog author
    const blogAuthorOnChange = (e) => {
        setBlogAuthor(e.target.value);
    }
    //* description 
    const descriptionOnChange = (e) => {
        setDescription(e.target.value);
    }
    //* blog
    const bannerOnChange = (e) => {
        setBlogImage(e.target.files[0]);
    }
    //* get blog
    const getBannerAxios = () => {
        axios.get(`http://markbran.in/apis/admin/blog/${blogId.id}`, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                setBlog(response.data.blog);
                console.log(response.data.blog);
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
        getBannerAxios();
        if (blog) {
            setValue("title", blog.title)
            setValue("description", blog.description)
            setValue("author", blog.author)
        }
        setIsActive((blog.status ? 1 : 0));
    }, [blog.title, blog.description, blog.author]);




    const onHandlerSubmit = (e) => {
        // e.preventDefault();
        setError(null);
        setLoading(true);

        const formData = new FormData();
        let status = isActive ? 1 : 0;
        formData.append('status', status);
        formData.append('image', blogImage);
        formData.append('title', e.title);
        formData.append('description', e.description);
        formData.append('author', e.blogAuthor);

        axios.patch(`http://markbran.in/apis/admin/blog/${blogId.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/blogs')
                console.log(response);
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
                                                <Controller
                                                    name="title"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "title is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Title" autoComplete="title" />}
                                                />
                                                {/* <CInput type="text" onChange={titleOnChange} value={title} placeholder="Title" autoComplete="title" /> */}
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="5">
                                        <CLabel htmlFor="category">Blog Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="blogImage" variant="custom-file">
                                                Choose image...
                                            </CLabel>

                                            <CInputFile onChange={bannerOnChange} custom id="blogImage" type="file" />
                                        </CInputGroup>
                                        {/* <CFormText className="help-block text-danger" color="red">{errors.categoryId && errors.categoryId.message}</CFormText> */}
                                    </CCol>
                                    <CCol xs="1">
                                        <img src={`${process.env.REACT_APP_BASE_URL}${blog.image}`} className="img-fluid" width="120px" alt="" />
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Blog Author</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="author"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "author is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput type="text" {...field} placeholder="Author" autoComplete="author" />}
                                                />
                                                {/* <CInput type="text" onChange={blogAuthorOnChange} value={blogAuthor} placeholder="Button Text" autoComplete="Button Text" /> */}
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.author && errors.author.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="8">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Description</CLabel>
                                            <CInputGroup className="mb-3">
                                                {/* <CInput type="text" onChange={shortOrderOnChange} value={shortOrder} placeholder="Sort Order" autoComplete="Sort Order" /> */}
                                                <Controller
                                                    name="description"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "description is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CTextarea {...field} id="content" rows="4" ></CTextarea>}
                                                />
                                                {/* <CTextarea id="content" rows="3" onChange={descriptionOnChange} value={description}></CTextarea> */}
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.description && errors.description.message}</CFormText>
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
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Update Blog'}</button>
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

export default EditBlog
