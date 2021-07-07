import React, { useEffect, useState } from 'react'
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
    CTextarea,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import Switch from "react-switch";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import CkEditor from '../../components/CkEditor5.js';
const axios = require('axios').default;

const schema = yup.object().shape({
    title: yup.string().required(),
});

const EditMaterial = () => {
    let materialId = useParams();

    const { control, handleSubmit, setValue, register, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isFeatured, setIsFeatured] = useState(false);
    const [materialState, setMaterialState] = useState([]);
    const [image, setImage] = useState('');

    
    //* image
    const imageOnChange = (e) => {
        setImage(e.target.files[0]);
    }

    //* status
    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }

    let jwtToken = sessionStorage.getItem("token");
    //* get category
    const getMaterialAxios = () => {
        axios.get(`http://markbran.in/apis/admin/material/${materialId.id}`, {
            headers: {
                'auth-token': jwtToken
            }
        })
            .then(function (response) {
                setMaterialState(response.data.material);
                console.log(response.data.material)
            })
            .catch(function (error) {
                if (error.response.data.message) {
                    setError(error.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }

    useEffect(() => {
        getMaterialAxios();
        if (materialState) {
            setValue("title", materialState.title)
        }
        setIsFeatured(materialState.status);
        setImage(materialState.image);
    }, [materialState.title, materialState.status, materialState.image]);

    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        let status = isFeatured ? 1 : 0;
        formData.append('status', status);
        formData.append('title', e.title);
        formData.append('image', image);

        setError(null);
        setLoading(true);

        axios.patch(`http://markbran.in/apis/admin/material/${materialId.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'auth-token': jwtToken
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/material')
                // console.log(response);
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
        <div>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add Material
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
                                            <CLabel htmlFor="category">Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="title"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "title is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Category" autoComplete="category" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.category && errors.category.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="5">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="categoryImage" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={imageOnChange} custom id="categoryImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs="1">
                                        <img src={`${process.env.REACT_APP_BASE_URL}${materialState.image}`} className="img-fluid" alt="" />
                                    </CCol>
                                </CRow>
                                
                                <CRow>
                                    <CCol xl="8">
                                        <CFormGroup>
                                            <CInputGroup>
                                                <Switch onChange={onChangeIsFeatured} checked={isFeatured} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Update material'}</button>
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

export default EditMaterial
