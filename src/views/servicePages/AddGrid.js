import React, { useState, Fragment } from 'react'
import {
    // CButton,
    CLink,
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
    CFormText,
    CSelect,
    CTextarea
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
const axios = require('axios').default;


const AddGrid = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    // const [content, setContent] = useState('');

    //* section 1
    const [sectionOneTitle, setSectionOneTitle] = useState('');
    const [sectionOneImage, setSectionOneImage] = useState('');
    const [sectionOneDescription, setSectionOneDescription] = useState('');
    const [sectionThreeButtonText, setSectionThreeButtonText] = useState('');
    const [sectionThreeButtonLink, setSectionThreeButtonLink] = useState('');


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
    
    const sectionThreeButtonTextOnChange = (e) => {
        setSectionThreeButtonText(e.target.value);
    }
    const sectionThreeButtonLinkOnChange = (e) => {
        setSectionThreeButtonLink(e.target.value);
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
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add Grid
                            {/* <CLink style={{ float: 'right' }} className="btn btn-success" to="/about-us/add-cards">
                                Add Cards
                            </CLink> */}
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
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Button text</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={sectionThreeButtonTextOnChange} value={sectionThreeButtonText} placeholder="Button text" autoComplete="Button text" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Button link</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={sectionThreeButtonLinkOnChange} value={sectionThreeButtonLink} placeholder="Button link" autoComplete="Button link" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Description</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CTextarea
                                                    // component="textarea"
                                                    id="content"
                                                    rows="3"
                                                    onChange={sectionOneDescriptionOnChange} value={sectionOneDescription}
                                                ></CTextarea>
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

        </div>
    )
}

export default AddGrid
