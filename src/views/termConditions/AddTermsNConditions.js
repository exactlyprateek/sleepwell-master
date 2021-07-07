import React, { useState, Fragment, useRef, useEffect } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CFormText,
    CInput,
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

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router';
import Switch from "react-switch";
import CkEditor from '../../components/CkEditor5.js';

const axios = require('axios').default;

const schema = yup.object().shape({
    title: yup.string().required(),
});


const AddTernsNConditions = () => {
    // const leftEditorValueRef = useRef(null);

    const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [pageDescription, setPageDescription] = useState('');
    const [termsConditions, setTermsConditions] = useState('');
    const [title, setTitle] = useState('');
    const [editorData, setEditorData] = useState('');

    // const [inputList, setInputList] = useState([{ heading: "", sectionDescription: "", status: true }]);
    const [inputList, setInputList] = useState([]);

    let jwtToken = sessionStorage.getItem("token");

    //* change dynamic input fields   
    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        
        list[index][name] = value;
        setInputList(list);
    }

    //* Add dynamic input fields
    const handleAddInput = () => {
        setInputList([...inputList, { heading: "", sectionDescription: "", status: 1 }]);
    }

    //* remove dynamic input fields
    const handleRemoveInputs = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    const handleDescription = (data) => {
        setPageDescription(data);
    }
    
    const onChangeIsActive = (e) => {
        setIsActive(e);
    }
   
    const getTCAxios = () => {
        axios.get(`http://markbran.in/apis/admin/termsConditions`, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                console.log(response.data.termsConditions);
                setTermsConditions(response.data.termsConditions);
                setError(null);
            })
            .catch(function (err) {
                // handle error
                if (err.response && err.response.data.message) {
                    setError(err.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }

    useEffect(() => {
        getTCAxios();
        if (termsConditions) {
            setValue("title", termsConditions.title)
            // setInputList([{ heading: "haha1", refrename : "haha 1", status: true }, { heading: "haha2", sectionDescription: "haha 2", status: true }]);
            setInputList(termsConditions.sections);
        }
        setIsActive(termsConditions.status);
        setEditorData(termsConditions.description);
        console.log(termsConditions.sections);
    }, [termsConditions.description, termsConditions.status, termsConditions.title]);

    const onHandlerSubmit = (e) => {
        let status = isActive ? 1 : 0;
        const termsData = [
            {title: e.title},
            {description: pageDescription},
            {status: status},
            {section: inputList},
        ];
        // console.log(termsData);
        const formData = new FormData();
        formData.append('termsData', termsData);

        setError(null);
        setLoading(true)

        axios.post('http://markbran.in/apis/admin/termsConditions', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/terms-n-Conditions')
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

    return (
        <Fragment>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            {'Add terms & conditions'}
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
                                                <Controller
                                                    name="title"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Title is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Add title" autoComplete="title" />}
                                                />
                                                
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CkEditor onEditorValue={handleDescription} editorValue={editorData} />
                                {/* <CRow className="my-3">
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="is_active">Status</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={onChangeIsActive} checked={isActive} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow> */}
                                <CRow className="my-4">
                                    <hr />
                                    <CCol xs="12">
                                        <hr />
                                        <h2>Terms & conditions</h2>
                                    </CCol>
                                    {/* <pre>
                                        {JSON.stringify(inputList, null, 2)}
                                    </pre> */}
                                </CRow>
                                {inputList.map((item, index) => {
                                    return (
                                        <div>
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
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add T&C'}</button>
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

export default AddTernsNConditions
