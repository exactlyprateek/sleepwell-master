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
    CSelect,
    CTextarea,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import Switch from "react-switch";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CkEditor from '../../components/CkEditor5.js';

const axios = require('axios').default;

const schema = yup.object().shape({
    title: yup.string().required(),
    sortOrder: yup.number().positive(),
});

const EditComfort = () => {
    let comfortId = useParams();

    const { register, control, handleSubmit, setValue, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });


    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isFeatured, setIsFeatured] = useState(false);
    const [comfortsImage, setComfortsImage] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [buttonLink, setButtonLink] = useState('');
    const [description, setDescription] = useState('');
    const [comforts, setComforts] = useState([]);
    const [shortOrder, setShortOrder] = useState('');
    const [editorData, setEditorData] = useState('');
    // const [comfortsState, setComforts] = useState([]);

    let jwtToken = sessionStorage.getItem("token");

    const handleDescription = (data) => {
        setDescription(data);
    }
    const handleShortOrderOnChange = (e) => {
        setShortOrder(e.target.value);
    }
    //* button text
    const buttonTextOnChange = (e) => {
        setButtonText(e.target.value);
    }
    //* button text
    const buttonLinkOnChange = (e) => {
        setButtonLink(e.target.value);
    }

    //* image
    const imageOnChange = (e) => {
        setComfortsImage(e.target.files[0]);
    }

    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }

    //* get comforts
    const getComfortsAxios = () => {
        axios.get(`http://markbran.in/apis/admin/comfort/${comfortId.id}`, {
            headers: {
                'auth-token': jwtToken
            }
        })
            .then(function (response) {
                setComforts(response.data.comfort);
                console.log(response.data.comfort);
                setError(null);
            })
            .catch(function (err) {
                if (err.response && err.response.data.message) {
                    setError(err.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }

    useEffect(() => {
        getComfortsAxios()
        if (comforts) {
            setValue("title", comforts.title)
            setValue("sortOrder", comforts.sortOrder)
        }
        setIsFeatured((comforts.status === 1 ? true : false));
        setEditorData(comforts.description);
        setButtonText(comforts.buttonText);
        setButtonLink(comforts.buttonLink);
        setShortOrder(comforts.sortOrder);
    }, [comforts.status, comforts.sortOrder, comforts.description, comforts.buttonText, comforts.buttonLink]);

    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        let status = isFeatured ? 1 : 0;
        formData.append('status', status);
        formData.append('title', e.title);
        formData.append('image', comfortsImage);
        formData.append('buttonText', buttonText);
        formData.append('buttonLink', buttonLink);
        formData.append('description', description);
        formData.append('sortOrder', e.sortOrder);
        // sort
        setError(null);
        setLoading(true);

        axios.patch(`http://markbran.in/apis/admin/comfort/${comfortId.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/comfort-home')
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
        <Fragment>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Edit Comfort
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
                                                            message: "Title is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput  {...field} type="text" placeholder="Title" autoComplete="Title" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>

                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="Sort Order">Sort Order</CLabel>
                                            <CInputGroup>
                                                <Controller
                                                    name="sortOrder"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Title is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput type="text" {...field} placeholder="Sort Order" autoComplete="Sort Order" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.sortOrder && errors.sortOrder.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="5">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="categoryImage" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={imageOnChange} custom id="categoryImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs="1">
                                        <img src={`${process.env.REACT_APP_BASE_URL}${comforts.image}`} className="img-fluid" alt="" />
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="Button Text">Button Text</CLabel>
                                            <CInputGroup>
                                                <CInput type="text" onChange={buttonTextOnChange} value={buttonText} placeholder="Button Text" autoComplete="Button Text" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="Button Link">Button Link</CLabel>
                                            <CInputGroup>
                                                <CInput type="text" onChange={buttonLinkOnChange} value={buttonLink} placeholder="Button Link" autoComplete="Button Link" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Description</CLabel>
                                            <CkEditor onEditorValue={handleDescription} editorValue={editorData} />
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
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Update'}</button>
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

export default EditComfort
