import React, { useState, Fragment, useEffect } from 'react'
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
    CSelect,
    CTextarea,
    // CSwitch
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import Switch from "react-switch";
const axios = require('axios').default;


const schema = yup.object().shape({
    giftTitle: yup.string().required(),
    stateId: yup.string().required(),
    productId: yup.string().required(),
    giftProductId: yup.string().required(),
});

const AddGift = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [states, setStates] = useState([]);
    const [products, setProducts] = useState([]);


    let jwtToken = sessionStorage.getItem("token");


    const axiosCategories = () => {
        axios.get('http://markbran.in/apis/admin/state', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                setStates(response.data.states);
            })
            .catch(function (error) {
                // console.log(error.response);
                if (error.response && error.response.data.message) {
                    setError(error.response.data.message);
                }
            });
    }
    //* get products
    const axiosProducts = () => {
        axios.get(`http://markbran.in/apis/admin/products`, {
            headers: {
                'auth-token': jwtToken
            }
        })
            .then(function (response) {
                setProducts(response.data.products);
            })
            .catch(function (error) {
                if (error.response && error.response.data.message) {
                    setError(error.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }
    useEffect(() => {
        axiosCategories();
        axiosProducts();
    }, []);
    const onHandlerSubmit = (e) => {
        // e.preventDefault();
        // console.log('value', e);
        const formData = new FormData();
        formData.append('title', e.giftTitle);
        formData.append('stateId', e.stateId);
        formData.append('productId', e.productId);
        formData.append('giftProductId', e.giftProductId);
        // formData.append('status', isFeatured);
        // formData.append('image', categoryImage);
        // formData.append('buttonText', buttonText);
        // formData.append('buttonLink', buttonLink);
        // formData.append('description', description);
        // formData.append('status', 1);


        setError(null);
        setLoading(true)

        axios.post('http://markbran.in/apis/admin/category', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'auth-token': jwtToken
            }
        })
            .then(res => {
                setLoading(false);
                // setUserSession(response.data.token, response.data.user);
                history.push('/categories')
                console.log(res.response.data);
            })
            .catch(err => {
                // console.log(err.response.data.message);
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
                            Add Gift Card
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
                                                    name="giftTitle"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Gift title is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Gift title" autoComplete="Gift title" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.giftTitle && errors.giftTitle.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">State</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CSelect name="stateId" >
                                                    <option value="">
                                                        Select State
                                                        </option>
                                                    {states.map(item =>
                                                        <option key={item.id} value={item.id}>
                                                            {item.state}
                                                        </option>
                                                    )}
                                                </CSelect>

                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.stateId && errors.stateId.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Product</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CSelect name="productId" >
                                                    <option value="">
                                                        Select Product
                                                        </option>
                                                    {products.map((item, index) =>
                                                        <option key={index} value={item.id}>{item.title}</option>
                                                    )}
                                                </CSelect>

                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.productId && errors.productId.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Gift Product</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CSelect name="giftProductId" >
                                                    <option value="">
                                                        Select Gift Product
                                                    </option>
                                                    {products.map((item, index) =>
                                                        <option key={index} value={item.id}>{item.title}</option>
                                                    )}
                                                </CSelect>

                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.giftProductId && errors.giftProductId.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                
                                {/* <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Enable</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={onChangeIsFeatured} checked={isFeatured} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow> */}
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add Gift'}</button>
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

export default AddGift
