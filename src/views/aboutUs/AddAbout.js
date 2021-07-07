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
    CLink,
    CRow,
    CTextarea
} from '@coreui/react'

// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { Multiselect } from 'multiselect-react-dropdown';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import Switch from "react-switch";

// import { EditorState } from 'draft-js';
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import '../../App.css';
// client / src / views / aboutUs / AboutBannerComponent.js
import CkEditor from '../../components/CkEditor5.js';

const axios = require('axios').default;



const AddAbout = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    // const [content, setContent] = useState('');

    const [cardOneTitle, setCardOneTitle] = useState('');
    const [cardOneImage, setCardOneImage] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [link, setLink] = useState('');
    const [cardOneDescription, setCardOneDescription] = useState('');
    const [description, setDescription] = useState('');
    const [isActive, setIsActive] = useState(true);

    const jwtToken = sessionStorage.getItem("token");


    // const handleSectionDescription = (data) => {
    //     setSectionDescription(data);
    // }
    const handleDescription = (data) => {
        setDescription(data);
    }
    const onChangeIsActive = (e) => {
        setIsActive(e);
    }

    const cardOneTitleOnChange = (e) => {
        setCardOneTitle(e.target.value);
    }
    const cardOneImageOnChange = (e) => {
        setCardOneImage(e.target.files[0]);
    }
    const sortOrderOnChange = (e) => {
        setSortOrder(e.target.value);
    }
    const linkOnChange = (e) => {
        setLink(e.target.value);
    }
    const cardOneDescriptionOnChange = (e) => {
        setCardOneDescription(e.target.value);
    }

    const onHandlerSubmit = (e) => {
        e.preventDefault();
        // console.log('value', value);
        // console.log('bannerImage', bannerImage);
        setError(null);
        setLoading(true);

        const formData = new FormData();
        const status = isActive ? 1 : 0;
        formData.append('status', status);
        formData.append('title', cardOneTitle);
        formData.append('sortOrder', sortOrder);
        formData.append('link', link);
        formData.append('tagLine', description);

        axios.post('http://markbran.in/apis/admin/aboutUsCard', formData, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/about-us-card')
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
                            Add About Card
                            {/* <CLink style={{ float: 'right' }} className="btn btn-success" to="/about-us/add-about-us/add-cards">
                                Add Cards
                            </CLink> */}
                        </CCardHeader>
                        <CCardBody>

                            <CForm encType="multipart/form-data" onSubmit={onHandlerSubmit}>
                                {
                                    error &&
                                    <p className="text-danger">
                                        {error}
                                    </p>
                                }
                                {/* <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Section description</CLabel>
                                            <CkEditor onEditorValue={handleSectionDescription} />
                                        </CFormGroup>
                                    </CCol>
                                </CRow> */}
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={cardOneTitleOnChange} value={cardOneTitle} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Sort Order</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={sortOrderOnChange} value={sortOrder} placeholder="Sort Order" autoComplete="Sort Order" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Link</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={linkOnChange} value={link} placeholder="Link" autoComplete="Link" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Tagline</CLabel>
                                            <CkEditor onEditorValue={handleDescription} />

                                            {/* <CInputGroup className="mb-3">
                                                <CTextarea
                                                    // component="textarea"
                                                    id="content"
                                                    rows="3"
                                                    onChange={cardOneDescriptionOnChange} value={cardOneDescription}
                                                ></CTextarea>
                                            </CInputGroup> */}
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
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add Card'}</button>
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

export default AddAbout
