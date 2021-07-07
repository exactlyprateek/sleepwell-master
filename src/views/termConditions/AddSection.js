import React, { useState, Fragment } from 'react'
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
    heading: yup.string().required(),
});


const AddSection = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(true);
    // const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [description, setDescription] = useState('');

    //* description
    const descriptionOnChange = (e) => {
        setDescription(e.target.value);
    }
    const onChangeisActive = (e) => {
        setIsActive(e);
    }
    // const onEditorStateChange = (e) => {
    //     setEditorState(e)
    // }

    const onHandlerSubmit = (e) => {
        // console.log();
        const formData = new FormData();
        formData.append('is_active', isActive);
        formData.append('size', e.size);

        setError(null);
        setLoading(true)

        // axios.post('/size/', formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
        //     .then(response => {
        //         setLoading(false);
        //         history.push('/sizes')
        //     })
        //     .catch(err => {
        //         setLoading(false);
        //         if (err.response.data.errorMessage) {
        //             setError(err.response.data.errorMessage);
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
                            Add Section
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
                                            <CLabel htmlFor="heading">Heading</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput {...register('heading')} type="text" placeholder="Add heading" autoComplete="heading" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.heading && errors.heading.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                {/* <CkEditor /> */}

                                <CRow className="mt-3">
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

export default AddSection
