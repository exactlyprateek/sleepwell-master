import React, { useState } from 'react'
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
// client / src / views / aboutUs / AboutBannerComponent.js
import CkEditor from '../../components/CkEditor5.js';

import AboutBanner from './AboutBannerComponent.js';
const axios = require('axios').default;


const AddAboutCardComponent = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    // const [content, setContent] = useState('');
    const [sectionDescription, setSectionDescription] = useState('');
    const [description, setDescription] = useState('');

    //* section 2 
    const [sectionOneTitle, setSectionOneTitle] = useState('');
    const [sectionOneImage, setSectionOneImage] = useState('');
    const [sectionOneDescription, setSectionOneDescription] = useState('');
    //* section 2 
    const [sectionTwoDescription, setSectionTwoDescription] = useState('');
    //* section 4
    const [sectionFourBannerTitle, setSectionFourBannerTitle] = useState('');
    const [sectionFourImage, setSectionFourImage] = useState('');
    const [sectionFourDescription, setSectionFourDescription] = useState('');
    const [goingGreenSectionTitle, setGoingGreenSectionTitle] = useState('');
    const [goingGreenSectionDescription, setGoingGreenSectionDescription] = useState('');

    const [cardOneTitle, setCardOneTitle] = useState('');
    const [cardOneImage, setCardOneImage] = useState('');
    const [cardOneButtonText, setCardOneButtonText] = useState('');
    const [cardOneButtonLink, setCardOneButtonLink] = useState('');
    const [cardOneDescription, setCardOneDescription] = useState('');
    // const [sectionThreeDescription, setSectionThreeDescription] = useState(() => EditorState.createEmpty(),);



    const handleSectionDescription = (data) => {
        setSectionDescription(data);
    }
    const handleDescription = (data) => {
        setDescription(data);
    }


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

    const sectionTwoDescriptionOnChange = (e) => {
        setSectionTwoDescription(e.target.value);
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

    const goingGreenSectionTitleOnChange = (e) => {
        setGoingGreenSectionTitle(e.target.value)
    }
    const goingGreenSectionDescriptionOnChange = (e) => {
        setGoingGreenSectionDescription(e.target.value)
    }

    const cardOneTitleOnChange = (e) => {
        setCardOneTitle(e.target.value);
    }
    const cardOneImageOnChange = (e) => {
        setCardOneImage(e.target.files[0]);
    }
    const cardOneButtonTextOnChange = (e) => {
        setCardOneButtonText(e.target.value);
    }
    const cardOneButtonLinkOnChange = (e) => {
        setCardOneButtonLink(e.target.value);
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
                            Add About Content

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

                                <AboutBanner />

                                <CRow>
                                    <CCol xs="12">
                                        <hr />
                                        <CLink style={{ float: 'right' }} className="btn btn-success" to="/about-us/add-about-us/add-cards">
                                            Add Cards
                                        </CLink>
                                        <h2>Card section</h2>
                                    </CCol>
                                </CRow>

                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Section description</CLabel>
                                            <CkEditor onEditorValue={handleSectionDescription} />

                                            {/* <CInputGroup className="mb-3">
                                                <CTextarea
                                                    id="content"
                                                    rows="3"
                                                    onChange={sectionTwoDescriptionOnChange} value={sectionTwoDescription}
                                                ></CTextarea>
                                            </CInputGroup> */}
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={cardOneTitleOnChange} value={cardOneTitle} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="bannerImage" variant="custom-file">
                                                Choose Image...
                                            </CLabel>
                                            <CInputFile onChange={cardOneImageOnChange} custom id="bannerImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Button Text</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={cardOneButtonTextOnChange} value={cardOneButtonText} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Button Link</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={cardOneButtonLinkOnChange} value={cardOneButtonLink} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Description</CLabel>
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
                                {/* <CRow>
                                    <CCol xs="12">
                                        <hr />
                                        <CLink style={{ float: 'right' }} className="btn btn-success" to="/about-us/add-about-us/add-innovation">
                                            Add Innovation
                                        </CLink>
                                        <h2>Our innovations</h2>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Section Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={sectionThreeBannerTitleOnChange} value={sectionThreeBannerTitle} placeholder="Title" autoComplete="title" />
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
                                </CRow> */}

                                <CRow>
                                    <CCol xs="12">
                                        <hr />
                                        <h2>Going green</h2>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Section title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={goingGreenSectionTitleOnChange} value={goingGreenSectionTitle} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Section description</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CTextarea
                                                    id="content"
                                                    rows="3"
                                                    onChange={goingGreenSectionDescriptionOnChange} value={goingGreenSectionDescription}
                                                ></CTextarea>
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Banner Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput type="text" onChange={sectionFourBannerTitleOnChange} value={sectionFourBannerTitle} placeholder="Title" autoComplete="title" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="bannerImage" variant="custom-file">
                                                Choose Image...
                                            </CLabel>
                                            <CInputFile onChange={sectionFourImageOnChange} custom id="bannerImage" type="file" />
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
                                                    onChange={sectionFourDescriptionOnChange} value={sectionFourDescription}
                                                ></CTextarea>
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>

                                {/* <CRow>
                                    <CCol xs="12">
                                        <hr />
                                        <h2>Awards section</h2>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Select awards</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Multiselect
                                                    options={awardArray} // Options to display in the dropdown
                                                    // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                    onSelect={awardOnSelect} // Function will trigger on select event
                                                    // onRemove={this.onRemove} // Function will trigger on remove event
                                                    displayValue="name" // Property name to display in the dropdown options
                                                />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow> */}
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

export default AddAboutCardComponent
