import React, { useEffect, useState } from 'react'
import {
    // CButton,
    CCard,
    CCardBody,
    CCol,
    CForm,
    CFormGroup,
    CFormText,
    CInput,
    
    CInputGroup,
    CLabel,
    CRow,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';

import CkEditor from '../../components/CkEditor5.js';
const axios = require('axios').default;

const schema = yup.object().shape({
    title: yup.string().required(),
});


const AddInnovationComponent = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [description, setDescription] = useState('');

    let jwtToken = sessionStorage.getItem("token");
   
    const handleDescription = (data) => {
        setDescription(data);
    }
    const getInnovationAxios = () => {
        axios.get(`http://markbran.in/apis/admin/innovation`, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                console.log(response.data.innovation);
                // setTermsConditions(response.data.termsConditions);
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
        getInnovationAxios();
        // if (termsConditions) {
        //     setValue("title", termsConditions.title)
        //     // setInputList([{ heading: "haha1", refrename : "haha 1", status: true }, { heading: "haha2", sectionDescription: "haha 2", status: true }]);
        //     setInputList(termsConditions.sections);
        // }
        // setIsActive(termsConditions.status);
        // setEditorData(termsConditions.description);
        // console.log(termsConditions.sections);
    }, []);

    const onHandlerSubmit = (e) => {
        
        const formData = new FormData();
        formData.append('title', e.title);
        formData.append('description', description);
        
        setError(null);
        // setLoading(true)

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
                        {/* <CCardHeader>
                            Add Innovation
                        </CCardHeader> */}
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
                                            <CLabel htmlFor="category">Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="title"
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
                                            <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText>
                                        </CFormGroup>
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

export default AddInnovationComponent
