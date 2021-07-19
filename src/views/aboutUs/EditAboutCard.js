import React, { useEffect, useState, Fragment } from 'react'
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


const EditAboutCard = () => {
    let aboutUsCardId = useParams();
    // console.log(bannerId);
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });

    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [bannerImage, setBannerImage] = useState('');
    const [shortOrder, setShortOrder] = useState('');
    // const [content, setContent]         = useState('');
    const [aboutCard, setAboutCard] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [bannerButtonText, setBannerButtonText] = useState('');
    const [link, setLink] = useState('');
    const [isFeatured, setIsFeatured] = useState(true);

    const jwtToken = sessionStorage.getItem("token");

    //* get banner
    const getAboutUsCardAxios = () => {
        axios.get(`http://markbran.in/apis/admin/aboutUsCard/${aboutUsCardId.id}`, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (e) {
                // handle success
                console.log(e.data.card);
                setAboutCard(e.data.card);
            })
            .catch(function (error) {
                if (error.response && error.response.data.message) setError(error.response.data.message);
            });
    }
    useEffect(() => {
        getAboutUsCardAxios();
        setShortOrder(aboutCard.sortOrder);
        setIsFeatured((aboutCard.status === 1 ? true : false));
        setTitle(aboutCard.title);
        setDescription(aboutCard.tagLine);
        setLink(aboutCard.link);
    }, [aboutCard.sortOrder, aboutCard.status, aboutCard.title, aboutCard.tagLine, aboutCard.link]);

    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }
    //* title 
    const titleOnChange = (e) => {
        setTitle(e.target.value);
    }
    //* banner button link
    const LinkOnChange = (e) => {
        setLink(e.target.value);
    }
    //* description 
    const descriptionOnChange = (e) => {
        setDescription(e.target.value);
    }
    //* Sort Order 
    const shortOrderOnChange = (e) => {
        setShortOrder(e.target.value);
    }
    //* content 
    // const contentOnChange = (e) => {
    //     setContent(e.target.value);
    // }

    const onHandlerSubmit = (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const formData = new FormData();
        const status = isFeatured ? 1 :0;
        formData.append('sortOrder', shortOrder);
        formData.append('title', title);
        formData.append('tagLine', description);
        formData.append('buttonText', bannerButtonText);
        formData.append('link', link);
        formData.append('status', status);
        // formData.append('content', content);
        // console.log(formData);
        // console.log(shortOrder);

        axios.patch(`http://markbran.in/apis/admin/aboutUsCard/${aboutUsCardId.id}`, formData, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/about-us-card')
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
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Sort Order</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={shortOrderOnChange} value={shortOrder} placeholder="Sort Order" autoComplete="Sort Order" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Link</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={LinkOnChange} value={link} placeholder="Link" autoComplete="Link" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Tagline</CLabel>
                                            <CInputGroup className="mb-3">
                                                {/* <CInput type="text" onChange={shortOrderOnChange} value={shortOrder} placeholder="Sort Order" autoComplete="Sort Order" /> */}
                                                <CTextarea
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
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Edit Card'}</button>
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

export default EditAboutCard
