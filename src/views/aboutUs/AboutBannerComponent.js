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
// import { EditorState } from 'draft-js';
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import '../../App.css';
import CkEditor from '../../components/CkEditor5.js';

const axios = require('axios').default;



const AddAboutBannerComponent = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pageDescription, setPageDescription] = useState('');

    // const [content, setContent] = useState('');


    //* section 2 
    const [sectionOneTitle, setSectionOneTitle] = useState('');
    const [sectionOneImage, setSectionOneImage] = useState('');
    // const [sectionThreeDescription, setSectionThreeDescription] = useState(() => EditorState.createEmpty(),);


    //* section 1
    const sectionOneImageOnChange = (e) => {
        setSectionOneImage(e.target.files[0]);
    }
    const sectionOneTitleOnChange = (e) => {
        setSectionOneTitle(e.target.value);
    }

    const handleDescription = (data) => {
        setPageDescription(data);
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
        <div>
            <CRow className="mb-4">
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add about banner

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
                                                <CInput type="text" onChange={sectionOneTitleOnChange} value={sectionOneTitle} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="cardOneImage" variant="custom-file">
                                                Choose Image...
                                            </CLabel>
                                            <CInputFile onChange={sectionOneImageOnChange} custom id="cardOneImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Description</CLabel>
                                            <CkEditor onEditorValue={handleDescription} />

                                            <CInputGroup className="mb-3">
                                                {/* <CTextarea
                                                            // component="textarea"
                                                            id="content"
                                                            rows="3"
                                                            // onChange={sectionOneDescriptionOnChange} value={sectionOneDescription}
                                                ></CTextarea> */}
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
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Save banner'}</button>
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

export default AddAboutBannerComponent
