import React, { useEffect, useState, Fragment } from 'react'
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
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import Switch from "react-switch";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const axios = require('axios').default;

const schema = yup.object().shape({
    title: yup.string().required(),
    buttonText: yup.string().required(),
    buttonLink: yup.string().required(),
    sortOrder: yup.number().positive(),
});

const EditServiceBanner = () => {
    let serviceBannerId = useParams();

    const { control, handleSubmit, setValue, register, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });

    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isFeatured, setIsFeatured] = useState(true);
    const [serviceBannerState, setServiceBannerState] = useState([]);
    const [categoryImage, setCategoryImage] = useState('');
    const [description, setDescription] = useState('');

    //* description
    const descriptionOnChange = (e) => {
        setDescription(e.target.value);
    }
    //* category image
    const categoryOnChange = (e) => {
        setCategoryImage(e.target.files[0]);
    }

    //* status
    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }

    // const categoryOnChange = (e) => {
    //     setCategory(e.target.value);
    // }

    let jwtToken = sessionStorage.getItem("token");
    //* get category
    const getServiceBannerAxios = () => {
        axios.get(`http://markbran.in/apis/admin/service-banner/${serviceBannerId.id}`, {
            headers: {
                'auth-token': jwtToken
            }
        })
            .then(function (response) {
                setServiceBannerState(response.data.banner);
                console.log(response.data.banner)
            })
            .catch(function (error) {
                // handle error
                if (error.response.data.message) {
                    setError(error.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }

    useEffect(() => {
        getServiceBannerAxios();
        if (serviceBannerState) {
            setValue("title", serviceBannerState.title)
            setValue("buttonText", serviceBannerState.buttonText)
            setValue("buttonLink", serviceBannerState.buttonLink)
            setValue("sortOrder", serviceBannerState.sortOrder)
        }
        setIsFeatured((serviceBannerState.status === 1 ? true : false ));
        // setButtonLink(serviceBannerState.buttonLink);
        setDescription(serviceBannerState.description);

    }, [serviceBannerState.title, serviceBannerState.status, serviceBannerState.buttonLink, serviceBannerState.buttonText, serviceBannerState.description]);

    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        const status = isFeatured ? 1 : 0 ;
        formData.append('status', status);
        formData.append('title', e.title);
        formData.append('image', categoryImage);
        formData.append('buttonText', e.buttonText);
        formData.append('buttonLink', e.buttonLink);
        formData.append('description', description);
        formData.append('sortOrder', e.sortOrder);
        // console.log('value', value.categoryName);
        setError(null);
        setLoading(true);

        axios.patch(`http://markbran.in/apis/admin/service-banner/${serviceBannerId.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'auth-token': jwtToken
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/service-homepage')
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

    return (
        <div>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Edit Service Banner
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
                                            <CLabel htmlFor="category">Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="title"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Categoty is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="title" autoComplete="title" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="5">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="categoryImage" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={categoryOnChange} custom id="categoryImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs="1">
                                        {/* <img src={`${window.location.origin}/images/category/${serviceBannerState.image}`} className="img-fluid" alt="" /> */}
                                        <img src={`${process.env.REACT_APP_BASE_URL}${serviceBannerState.image}`} className="img-fluid" alt="" />
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="Button Text">Button Text</CLabel>
                                            <CInputGroup>
                                                <Controller
                                                    name="buttonText"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Categoty is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput  {...field} type="text"  placeholder="Button Text" autoComplete="Button Text" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.buttonText && errors.buttonText.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="Button Link">Button Link</CLabel>
                                            <CInputGroup>
                                                <Controller
                                                    name="buttonLink"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Categoty is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Button Link" autoComplete="Button Link" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.buttonLink && errors.buttonLink.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Sort Order</CLabel>
                                            <CInputGroup>
                                                <Controller
                                                    name="sortOrder"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Categoty is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Sort Order" autoComplete="Sort Order" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.sortOrder && errors.sortOrder.message}</CFormText>
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
                                    <CCol xl="8">
                                        <CFormGroup>
                                            <CInputGroup>
                                                {/* <CSwitch onChange={switch2} checked={switchState} className={'mx-1'} color={'success'} defaultChecked variant="opposite" /> */}
                                                <Switch onChange={onChangeIsFeatured} checked={isFeatured} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Update Banner'}</button>
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

export default EditServiceBanner
