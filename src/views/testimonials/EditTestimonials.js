import React, { useEffect, useState, Fragment } from 'react'
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

    CInputFile,

    CInputGroup,

    // CInputGroupPrepend,

    // CInputGroupText,
    CLabel,
    CRow,
    CTextarea,
    // CSwitch
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Switch from "react-switch";
const axios = require('axios').default;

const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
});


const EditTestimonial = () => {
    let testimonialId = useParams();

    const { control, handleSubmit, setValue, register, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });

    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isFeatured, setIsFeatured] = useState(false);
    const [testimonialState, setTestimonialState] = useState([]);
    const [testimonialImage, setTestimonialImage] = useState('');

    //* image
    const imageOnChange = (e) => {
        setTestimonialImage(e.target.files[0]);
    }

    //* status
    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }

    let jwtToken = sessionStorage.getItem("token");
    //* get category
    const getCategoryAxios = () => {
        axios.get(`http://markbran.in/apis/admin/testimonial/${testimonialId.id}`, {
            headers: {
                'auth-token': jwtToken
            }
        })
            .then(function (response) {
                setTestimonialState(response.data.testimonial);
                console.log(response.data.testimonial)
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
        getCategoryAxios();
        if (testimonialState) {
            setValue("name", testimonialState.name)
            setValue("description", testimonialState.description)
        }
        setIsFeatured((testimonialState.status ? 1 : 0));

    }, [testimonialState.name, testimonialState.status, testimonialState.description]);

    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        let status = isFeatured ? 1 : 0;
        formData.append('status', status);
        formData.append('name', e.name);
        formData.append('description', e.description);
        formData.append('image', testimonialImage);

        setError(null);
        setLoading(true);

        axios.patch(`http://markbran.in/apis/admin/testimonial/${testimonialId.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'auth-token': jwtToken
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/testimonials')
                // console.log(response);
            })
            .catch(err => {
                setLoading(false);
                // console.log(err.response);
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
                            Add Testimonial
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
                                            <CLabel htmlFor="category">Category</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="name"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Name is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Name" autoComplete="name" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.name && errors.name.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="5">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="image" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={imageOnChange} custom id="image" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs="1">
                                        {/* <img src={`${window.location.origin}/images/category/${categoryState.image}`} className="img-fluid" alt="" /> */}
                                        <img src={`${process.env.REACT_APP_BASE_URL}${testimonialState.image}`} className="img-fluid" alt="" />
                                    </CCol>
                                </CRow>
                                
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Description</CLabel>
                                            <CInputGroup><Controller
                                                name="description"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Description is required"
                                                        },
                                                    }}
                                                render={({ field }) => <CTextarea {...field} id="content" rows="3"></CTextarea>}
                                                />
                                                
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="8">
                                        <CFormGroup>
                                            <CInputGroup>
                                                {/* <CSwitch onChange={switch2} checked={switchState} className={'mx-1'} color={'success'} defaultChecked variant="opposite" /> */}
                                                <Switch onChange={onChangeIsFeatured} checked={isFeatured} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Update testimonial'}</button>
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

export default EditTestimonial
