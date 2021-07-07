import React, { useState, Fragment, useRef } from 'react'
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
    CLink,
    CRow,
    CTextarea,
    CInputCheckbox,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
// import { EditorState } from 'draft-js';
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router';
import Switch from "react-switch";
import CkEditor from '../../components/CkEditor5.js';

const axios = require('axios').default;

const schema = yup.object().shape({
    title: yup.string().required(),
});


const ServicesAtHome = () => {
    // const leftEditorValueRef = useRef(null);

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [pageDescription, setPageDescription] = useState('');
    const [inputList, setInputList] = useState([{ heading: "", sectionDescription: "", image: '' }]);
    const [BannerImage, setBannerImage] = useState('');
    const [image, setImage] = useState('');

    let jwtToken = sessionStorage.getItem("token");

    const bannerImageOnChange = (e) => {
        setBannerImage(e.target.files[0]);
    }
    const handleImageOnChange = (e, index) => {
        // console.log(e.target.files[0]);
        console.log(e.target.name);

        let value = e.target.files[0];
        const list = [...inputList];
        list[index]['image'] = value;
        setInputList(list);
    }

    //* change dynamic input fields   
    const handleChange = (e, index) => {
        

        if(e.target.name === 'image') {
            const { name, files } = e.target;
            const list = [...inputList];
            list[index][name] = files[0];
            console.log(list);
            setInputList(list);
        } else {
            const { name, value } = e.target;
            const list = [...inputList];
            list[index][name] = value;
            setInputList(list);
        }
    }

    //* Add dynamic input fields
    const handleAddInput = () => {
        setInputList([...inputList, { heading: "", sectionDescription: "", image: '' }]);
    }

    //* remove dynamic input fields
    const handleRemoveInputs = (index) => {
        const list = [...inputList];
        console.log(list);
        list.splice(index, 1);
        setInputList(list);
    }

    const handleDescription = (data) => {
        setPageDescription(data);
    }

    const onChangeIsActive = (e) => {
        setIsActive(e);
    }


    const onHandlerSubmit = (e) => {
        let status = isActive ? 1 : 0;
        const termsData = [
            { title: e.title },
            { description: pageDescription },
            { status: status },
            { section: inputList },
        ];
        console.log(inputList);
        const formData = new FormData();
        formData.append('termsData', termsData);

        setError(null);
        // setLoading(true)

        // axios.post('http://markbran.in/apis/admin/termsConditions', formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         "auth-token": jwtToken //the token is a variable which holds the token
        //     }
        // })
        //     .then(response => {
        //         setLoading(false);
        //         history.push('/terms-n-Conditions')
        //     })
        //     .catch(err => {
        //         setLoading(false);
        //         if (err.response && err.response.data.message) {
        //             setError(err.response.data.message);
        //         } else {
        //             setError("Something went wrong!");
        //         }
        //     });
    }

    return (
        <Fragment>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Services At Home
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
                                            <CLabel htmlFor="title">Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput {...register('title')} type="text" placeholder="Add title" autoComplete="title" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Banner Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="bannerImage" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={bannerImageOnChange} custom id="bannerImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol md="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="is_active">Description</CLabel>
                                            <CkEditor onEditorValue={handleDescription} />
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow className="my-3">
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
                                <CRow className="my-4">
                                    <CCol xs="12">
                                        <hr />
                                        {/* <h2>Terms & conditions</h2> */}
                                    </CCol>
                                </CRow>
                                {inputList.map((item, index) => {
                                    return (
                                        <div>
                                            <CRow className="my-4" >
                                                {inputList.length !== 1 && <CCol xs="1"  className="mb-auto mt-auto">
                                                    <div >
                                                        <button onClick={() => handleRemoveInputs(index)} className="btn btn-danger" type="button">Remove</button>
                                                    </div>
                                                </CCol>}
                                                {inputList.length - 1 === index && <CCol xs="1" className="mb-auto mt-auto">
                                                    <div >
                                                        <button onClick={handleAddInput} className="btn btn-success" type="button">Add</button>
                                                    </div>
                                                </CCol>}
                                            </CRow>
                                            <CRow>
                                                <CCol xs="6">
                                                    <CFormGroup>
                                                        <CLabel htmlFor="heading">Heading</CLabel>
                                                        <CInputGroup className="mb-3">
                                                            <CInput name="heading" onChange={e => handleChange(e, index)} value={item.heading} type="text" placeholder="Add heading" autoComplete="heading" />
                                                        </CInputGroup>
                                                        <CFormText className="help-block text-danger" color="red">{errors.heading && errors.heading.message}</CFormText>
                                                    </CFormGroup>
                                                </CCol>
                                                <CCol xs="6">
                                                    <CLabel htmlFor="category">Image</CLabel>
                                                    <CInputGroup className="mb-3">
                                                        <CLabel htmlFor="bannerImage" variant="custom-file">
                                                            Choose image...
                                                        </CLabel>
                                                        <CInputFile onChange={e => handleChange(e, index)} name="image" custom id="bannerImage" type="file" />
                                                    </CInputGroup>
                                                </CCol>
                                                
                                            </CRow>
                                            {/* <CkEditor onEditorValue={handleSectionDescription} /> */}
                                            {/* <CkEditor onEditorValue={e => handleChange(e, index)} name="sectionDescription" /> */}
                                            <CRow>
                                                <CCol xl="12">
                                                    <CFormGroup>
                                                        <CLabel htmlFor="category">Description</CLabel>
                                                        <CInputGroup>
                                                            <CTextarea
                                                                name="sectionDescription"
                                                                id="content"
                                                                rows="4"
                                                                onChange={e => handleChange(e, index)} value={item.sectionDescription}
                                                            ></CTextarea>
                                                        </CInputGroup>
                                                    </CFormGroup>
                                                </CCol>
                                            </CRow>
                                        </div>
                                    )
                                })}


                                <CRow className="mt-4">
                                    {/* <hr /> */}
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Save'}</button>
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

export default ServicesAtHome
