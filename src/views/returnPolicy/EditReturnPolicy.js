import React, { useEffect, useState, Fragment } from 'react'
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
    CRow,
    CSelect,
    CTextarea,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import Switch from "react-switch";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CkEditor from '../../components/CkEditor5.js';

const axios = require('axios').default;

const schema = yup.object().shape({
    heading: yup.string().required(),
});

const EditReturnPolicy = () => {
    let returnPolicyId = useParams();

    const { register, control, handleSubmit, setValue, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });


    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isFeatured, setIsFeatured] = useState(false);
    const [description, setDescription] = useState('');
    const [returnPolicy, setReturnPolicy] = useState([]);
    const [editorData, setEditorData] = useState('');
    // const [returnPolicyState, setReturnPolicy] = useState([]);

    let jwtToken = sessionStorage.getItem("token");

    const handleDescription = (data) => {
        setDescription(data);
    }
    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }

    //* get returnPolicy
    const getreturnPolicyAxios = () => {
        axios.get(`http://markbran.in/apis/admin/returnPolicy/${returnPolicyId.id}`, {
            headers: {
                'auth-token': jwtToken
            }
        })
            .then(function (response) {
                setReturnPolicy(response.data.policy);
                console.log(response.data.policy);
                setError(null);
            })
            .catch(function (err) {
                if (err.response && err.response.data.message) {
                    setError(err.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }

    useEffect(() => {
        getreturnPolicyAxios()
        if (returnPolicy) {
            setValue("heading", returnPolicy.heading)
        }
        setIsFeatured((returnPolicy.status === 1 ? true : false));
        setEditorData(returnPolicy.description);
    }, [returnPolicy.status, returnPolicy.description, returnPolicy.heading]);

    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        let status = isFeatured ? 1 : 0;
        formData.append('status', status);
        formData.append('heading', e.heading);
        formData.append('description', description);
        // sort
        setError(null);
        setLoading(true);

        axios.patch(`http://markbran.in/apis/admin/returnPolicy/${returnPolicyId.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/return-policy')
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
                            Edit Comfort
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
                                            <CLabel htmlFor="category">Heading</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="heading"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Title is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput  {...field} type="text" placeholder="Heading" autoComplete="Heading" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.heading && errors.heading.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="shortItem">Description</CLabel>
                                            <CkEditor onEditorValue={handleDescription} editorValue={editorData} />
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Status</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={onChangeIsFeatured} checked={isFeatured} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Update'}</button>
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

export default EditReturnPolicy
