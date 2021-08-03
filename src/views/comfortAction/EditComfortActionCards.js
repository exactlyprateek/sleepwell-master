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
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import Switch from "react-switch";
const axios = require('axios').default;



const EditComfortActionCards = () => {
    let card = useParams();

    // const { control, handleSubmit, setValue, register, formState: { errors } } = useForm({ mode: 'all' });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isFeatured, setIsFeatured] = useState(false);
    // const [categoryState, setCategoryState] = useState([]);
    const [sortOrder, setSortOrder] = useState('');
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('')
    const [buttonText, setButtonText] = useState('');
    const [buttonLink, setButtonLink] = useState('');
    const [description, setDescription] = useState('');

    //* description
    const descriptionOnChange = (e) => {
        setDescription(e.target.value);
    }
    //* button text
    const buttonTextOnChange = (e) => {
        setButtonText(e.target.value);
    }
    //* button text
    const buttonLinkOnChange = (e) => {
        setButtonLink(e.target.value);
    }

    //* category image
    const imageOnChange = (e) => {
        setImage(e.target.files[0]);
    }

    //* freatured category
    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }

    // const categoryOnChange = (e) => {
    //     setCategory(e.target.value);
    // }

    let jwtToken = sessionStorage.getItem("token");
    //* get category
    const getComfortSection = () => {
        axios.get(`http://markbran.in/apis/admin/comfort/section/`, {
            headers: {
                'auth-token': jwtToken
            }
        })
            .then(function (res) {
                setTitle(res.data.section.title);
                setButtonLink(res.data.section.buttonLink);
                setButtonText(res.data.section.buttonText);
               
            })
            .catch(function (error) {
                // handle error
                if (error.response) {
                    console.log(error.response.data);
                }
            });
    }

    useEffect(() => {
        getComfortSection();
      

    }, []);

    const onHandlerSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('title', title);
        formData.append('buttonText', buttonText);
        formData.append('buttonLink', buttonLink);
        // console.log('value', value.categoryName);
        setError(null);
        setLoading(true);

        axios.patch(`http://markbran.in/apis/admin/comfort/section/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'auth-token': jwtToken
            }
        })
            .then(response => {
                
                history.push('/comfort-action/')
                console.log(response);
            })
            .catch(err => {
               
                // console.log(err.response);
                if (err.response) {
                    if (err.response.data.errorMessage) {
                        setError(err.response.data.errorMessage);
                    } else {
                        setError("Something went wrong!");
                    }
                } else {
                    setError("Something went wrong!");
                }
            }).finally(() =>  setLoading(false));
    }

    return (
        <div>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Edit Comfort action
                        </CCardHeader>
                        <CCardBody>
                            <CForm onSubmit={onHandlerSubmit}>
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
                                                <CInput value={title} required placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                                                {/* <Controller
                                                    name="title"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "title is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Category" autoComplete="category" />}
                                                /> */}
                                            </CInputGroup>
                                            {/* <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText> */}
                                        </CFormGroup>
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
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Update Section'}</button>
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

export default EditComfortActionCards
