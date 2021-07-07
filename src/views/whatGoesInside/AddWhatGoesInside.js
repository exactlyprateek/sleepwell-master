import React, { useState } from 'react'
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
    CLink,
    CInputFile,
    CInputGroup,
    CLabel,
    CRow,
    CTextarea,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../../App.css';
import CkEditor from '../../components/CkEditor5.js';

const axios = require('axios').default;

const schema = yup.object().shape({
    sectionTitle: yup.string().required(),
    sectionSubTitle: yup.string().required(),
});


const AddWhatGoesInside = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    // const [isFeatured, setIsFeatured] = useState(false);
    const [innovationImage, setInnovationImage] = useState('');
    // const [description, setDescription] = useState('');
    const [inputList, setInputList] = useState([{ sectionHeading: "", sectionImage: "", sectionDescription: "" }]);

    const [description, setDescription] = useState('');
    const [sectionDescription, setSectionDescription] = useState('');

    const handleDescription = (data) => {
        // console.log(data)
        setDescription(data);
    }
    
    let jwtToken = sessionStorage.getItem("token");

    //* change dynamic input fields   
    const handleChange = (e, index) => {
        const {name, value, files} = e.target;
        console.log(value);
        const list = [...inputList];
        list[index][name] = files ? files[0] : value;
        setInputList(list);
    }

    //* Add dynamic input fields
    const handleAddInput = () => {
        setInputList([...inputList, { sectionHeading: "", sectionImage: "", sectionDescription: ""}]);
    }

    //* remove dynamic input fields
    const handleRemoveInputs = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }
    
    //* description
    const descriptionOnChange = (e) => {
        setSectionDescription(e.target.value);
    }

    //* image
    const imageOnChange = (e) => {
        setInnovationImage(e.target.files[0]);
    }

    const onHandlerSubmit = (e) => {
        // e.preventDefault();
        // console.log('value', e);
        const innovationArray = [
            { title: e.sectionTitle },
            { subTitle: e.sectionSubTitle },
            { image: innovationImage },
            { description: description },
            { section: inputList }
        ];
        // console.log(innovationArray);
        // innovationArray[
        //     { title: e.sectionTitle},
        // ];
        const formData = new FormData();
        formData.append('innovationData', innovationArray);
        // formData.append('isFeatured', isFeatured);
        // formData.append('sectionTitle', e.sectionTitle);
        // formData.append('sectionSubTitle', e.sectionSubTitle);
        // formData.append('image', innovationImage);
        // formData.append('description', e.description);
        // formData.append('rightDescription', e.rightDescription);
        // formData.append('status', 1);


        setError(null);
        setLoading(true)

        // axios.post('http://markbran.in/apis/admin/category', formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         'auth-token': jwtToken
        //     }
        // })
        //     .then(res => {
        //         setLoading(false);
        //         // setUserSession(response.data.token, response.data.user);
        //         history.push('/categories')
        //         console.log(res.response.data);
        //     })
        //     .catch(err => {
        //         // console.log(err.response.data.message);
        //         setLoading(false);
        //         if (err.response && err.response.data.message) {
        //             setError(err.response.data.message);
        //         } else {
        //             setError("Something went wrong!");
        //         }
        //     });
    }

    return (
        <div>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            What Goes Inside
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
                                        {/* <CkEditor /> */}
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Section Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="sectionTitle"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Section title is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Section title" autoComplete="Section title" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.sectionTitle && errors.sectionTitle.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Section sub title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="sectionSubTitle"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Sub title is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Technology name" autoComplete="Technology name" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.sectionSubTitle && errors.sectionSubTitle.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="Image" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={imageOnChange} custom id="Image" type="file" multiple="true" />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Description</CLabel>
                                            <CkEditor onEditorValue={handleDescription} />
                                            <CFormText className="help-block text-danger" color="red">{errors.description && errors.description.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="12" className="my-4">
                                        <hr />
                                        <h2>advantage section</h2>
                                    </CCol>
                                </CRow>
                                {inputList.map((item, index) => {
                                    return (
                                        <CRow key={index}>
                                            <CCol xl="5">
                                                <CFormGroup>
                                                    <CLabel htmlFor="category">Heading</CLabel>
                                                    <CInputGroup>
                                                        <CInput name="sectionHeading" onChange={e => handleChange(e, index)} value={item.sectionHeading} type="text" placeholder="Heading" autoComplete="Heading" />
                                                    </CInputGroup>
                                                </CFormGroup>
                                            </CCol>
                                            <CCol xs="5">
                                                <CLabel htmlFor="category">Image</CLabel>
                                                <CInputGroup className="mb-3">
                                                    <CLabel htmlFor="Image" variant="custom-file">
                                                        Choose image...
                                                    </CLabel>
                                                    <CInputFile onChange={e => handleChange(e, index)} name="sectionImage" custom id="Image" type="file" multiple="true" />
                                                    {/* <CInputFile onChange={e => handleChange(e, index)} value={item.sectionImage} name="sectionImage" custom id="Image" type="file" multiple="true" /> */}
                                                </CInputGroup>
                                            </CCol>
                                            {inputList.length !== 1 && <CCol xs="1" className="mb-auto mt-auto">
                                                <div >
                                                    <button onClick={() => handleRemoveInputs(index)} className="btn btn-danger" type="button">Remove</button>
                                                </div>
                                            </CCol>}
                                            {inputList.length - 1 === index && <CCol xs="1" className="mb-auto mt-auto">
                                                <div >
                                                    <button onClick={handleAddInput} className="btn btn-success" type="button">Add</button>
                                                </div>
                                            </CCol>}
                                            <CCol xl="12">
                                                <CFormGroup>
                                                    <CLabel htmlFor="category">Description</CLabel>
                                                    <CInputGroup>
                                                        <CTextarea
                                                            // component="textarea"
                                                            id="content"
                                                            rows="3"
                                                            // onChange={setSectionDescription} value={sectionDescription}
                                                            name="sectionDescription" onChange={e => handleChange(e, index)} value={item.sectionDescription}
                                                        ></CTextarea>
                                                    </CInputGroup>
                                                </CFormGroup>
                                            </CCol>
                                            
                                        </CRow>
                                    )
                                })}
                                {/* <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Featured Category</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={onChangeIsFeatured} checked={isFeatured} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow> */}
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Save'}</button>
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

export default AddWhatGoesInside
