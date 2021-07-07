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
// import { EditorState } from 'draft-js';
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import '../../App.css';

import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
const axios = require('axios').default;


const AddInnovations = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    // const [content, setContent] = useState('');

    //* section 2 
    const [sectionOneTitle, setSectionOneTitle] = useState('');
    const [sectionOneImage, setSectionOneImage] = useState('');
    const [sectionOneDescription, setSectionOneDescription] = useState('');
    //* section 2 
    const [sectionTwoTitle, setSectionTwoTitle] = useState('');
    const [sectionTwoImage, setSectionTwoImage] = useState('');
    const [sectionTwoDescription, setSectionTwoDescription] = useState('');
    const [sectionTwoBannerTitle, setSectionTwoBannerTitle] = useState('');
    //* section 3
    const [sectionThreeBannerTitle, setSectionThreeBannerTitle] = useState('');
    const [sectionThreeImage, setSectionThreeImage] = useState('');
    // const [sectionThreeDescription, setSectionThreeDescription] = useState(() => EditorState.createEmpty(),);
    //* section 4
    const [sectionFourBannerTitle, setSectionFourBannerTitle] = useState('');
    const [sectionFourImage, setSectionFourImage] = useState('');
    const [sectionFourDescription, setSectionFourDescription] = useState('');


    //* section 1
    const sectionOneImageOnChange = (e) => {
        setSectionOneImage(e.target.files[0]);
    }
    const sectionOneTitleOnChange = (e) => {
        setSectionOneTitle(e.target.value);
    }
    const sectionOneDescriptionOnChange = (e) => {
        setSectionOneDescription(e.target.value);
    }
    //* section 2 
    const sectionTwoImageOnChange = (e) => {
        setSectionTwoImage(e.target.files[0]);
    }
    const sectionTwoTitleOnChange = (e) => {
        setSectionTwoTitle(e.target.value);
    }
    const sectionTwoDescriptionOnChange = (e) => {
        setSectionTwoDescription(e.target.value);
    }
    const sectionTwoBannerTitleOnChange = (e) => {
        setSectionTwoBannerTitle(e.target.value);
    }
    //* section 3 
    const sectionThreeImageOnChange = (e) => {
        setSectionThreeImage(e.target.files[0]);
    }
    const sectionThreeBannerTitleOnChange = (e) => {
        setSectionThreeBannerTitle(e.target.value);
    }
    const sectionThreeDescriptionOnChange = (e) => {
        // setSectionThreeDescription(e.target.value);
    }
    //* section 4 
    const sectionFourImageOnChange = (e) => {
        setSectionFourImage(e.target.files[0]);
    }
    const sectionFourBannerTitleOnChange = (e) => {
        setSectionFourBannerTitle(e.target.value);
    }
    const sectionFourDescriptionOnChange = (e) => {
        setSectionFourDescription(e.target.value);
    }



    const onHandlerSubmit = (e) => {
        e.preventDefault();
        // console.log('value', value);
        // console.log('bannerImage', bannerImage);
        setError(null);
        setLoading(true);

        const formData = new FormData();
        // formData.append('bannerImage', bannerImage);
        // formData.append('shortOrder', shortOrder);
        // formData.append('title', title);
        // formData.append('description', description);
        // formData.append('bannerButtonText', bannerButtonText);
        // formData.append('bannerButtonLink', bannerButtonLink);
        // formData.append('content', content);
        // console.log(formData);

        axios.post('/banner/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                setLoading(false);
                // setUserSession(response.data.token, response.data.user);
                history.push('/banners-manaement/banners')
                // console.log(response);
            })
            .catch(err => {
                setLoading(false);
                if (err.response.data.errorMessage) {
                    setError(err.response.data.errorMessage);
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
                            Add Innovation

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
                                                <CInput type="text" onChange={sectionThreeBannerTitleOnChange} value={sectionThreeBannerTitle} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="bannerImage" variant="custom-file">
                                                Choose Image...
                                            </CLabel>
                                            <CInputFile onChange={sectionThreeImageOnChange} custom id="bannerImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Description</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CTextarea
                                                    id="content"
                                                    rows="3"
                                                    // onChange={sectionThreeDescriptionOnChange} value={sectionThreeDescription}
                                                ></CTextarea>
                                                {/* <Editor
                                                    editorState={sectionThreeDescription}
                                                    onEditorStateChange={setSectionThreeDescription}
                                                    wrapperClassName="wrapper-class"
                                                    editorClassName="editor-class"
                                                    toolbarClassName="toolbar-class"
                                                /> */}
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add Content'}</button>
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

export default AddInnovations
