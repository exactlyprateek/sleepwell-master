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


const AddServicePage = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    // const [content, setContent] = useState('');

    //* section 1
    const [sectionOneTitle, setSectionOneTitle] = useState('');
    const [sectionOneImage, setSectionOneImage] = useState('');
    const [sectionOneButtonText, setSectionOneButtonText] = useState('');
    const [sectionOneButtonLink, setSectionOneButtonLink] = useState('');
    const [sectionOneDescription, setSectionOneDescription] = useState('');
    //* section 2 
    const [sectionTwoTitle, setSectionTwoTitle] = useState('');
    const [sectionTwoImage, setSectionTwoImage] = useState('');
    const [sectionTwoDescription, setSectionTwoDescription] = useState('');
    const [sectionTwoPhoneNumber, setSectionTwoPhoneNumber] = useState('');
    //* section 3
    const [sectionThreeBannerTitle, setSectionThreeBannerTitle] = useState('');
    const [sectionThreeImage, setSectionThreeImage] = useState('');
    const [sectionThreeDescription, setSectionThreeDescription] = useState('');
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
    const sectionOneButtonTextOnChange = (e) => {
        setSectionOneButtonText(e.target.value);
    }
    const sectionOneButtonLinkOnChange = (e) => {
        setSectionOneButtonLink(e.target.value);
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
    const sectionTwoPhoneNumberOnChange = (e) => {
        setSectionTwoPhoneNumber(e.target.value);
    }
    //* section 3 
    const sectionThreeImageOnChange = (e) => {
        setSectionThreeImage(e.target.files[0]);
    }
    const sectionThreeBannerTitleOnChange = (e) => {
        setSectionThreeBannerTitle(e.target.value);
    }
    const sectionThreeDescriptionOnChange = (e) => {
        setSectionThreeDescription(e.target.value);
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
                            Add service home page
                            <CLink style={{ float: 'right' }} className="btn btn-success" to="/service-page/add/add-grid">
                                Add grid section
                            </CLink>
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
                                    <CCol xs="12">
                                        <h2>Banner section</h2>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Banner title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={sectionOneTitleOnChange} value={sectionOneTitle} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Banner image</CLabel>
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
                                    <CCol xs="12">
                                        <hr />
                                        <h2>Hero section</h2>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Section Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={sectionTwoTitleOnChange} value={sectionTwoTitle} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="bannerImage" variant="custom-file">
                                                Choose Image...
                                            </CLabel>
                                            <CInputFile onChange={sectionTwoImageOnChange} custom id="bannerImage" type="file" />
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
                                                    onChange={sectionTwoDescriptionOnChange} value={sectionTwoDescription}
                                                ></CTextarea>
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                {/* <CRow>
                                    <CCol xs="12">
                                        <hr />
                                        <CLink style={{ float: 'right' }} className="btn btn-success" to="/service-page/add/add-grid">
                                            Add
                                        </CLink>
                                        <h2>Grid section </h2>
                                    </CCol>
                                </CRow>
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
                                </CRow> */}
                                
                                <CRow>
                                    <CCol xs="12">
                                        <hr />
                                        <h2>Section 4</h2>
                                    </CCol>
                                </CRow>
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
                                                    id="content"
                                                    rows="3"
                                                    onChange={sectionThreeDescriptionOnChange} value={sectionThreeDescription}
                                                ></CTextarea>
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="12">
                                        <hr />
                                        <h2>Action card section</h2>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Action card</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CSelect custom name="categoryId" id="categoryId">
                                                    <option value="">
                                                        Select Action card
                                                    </option>
                                                    <option value="1">
                                                        Select Action card 1
                                                    </option>
                                                    <option value="2">
                                                        Select Action card 2
                                                    </option>
                                                    
                                                </CSelect>

                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.categoryId && errors.categoryId.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    
                                </CRow>
                                <CRow>
                                    <CCol xs="12">
                                        <hr />
                                        <h2>Review section </h2>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Review</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CSelect custom name="categoryId" id="categoryId">
                                                    <option value="">
                                                        Select review
                                                    </option>
                                                    <option value="1">
                                                        review 1
                                                    </option>
                                                    <option value="2">
                                                        review 2
                                                    </option>
                                                    
                                                </CSelect>

                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.categoryId && errors.categoryId.message}</CFormText>
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

export default AddServicePage
