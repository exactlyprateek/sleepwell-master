import React, { useState, Fragment, useEffect } from 'react'
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
    CRow,
    CSelect,
    CTextarea,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router';
import Switch from "react-switch";
const axios = require('axios').default;

const schema = yup.object().shape({
    heading: yup.string().required(),
    productId: yup.string().required(),
    description: yup.string().required(),
});


const AddWarrantyTerms = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [products, setProducts] = useState([]);

    // const [categories, setCategories] = useState([])

    // const [categoryId, setCategoryId] = useState('');
    // const [subCategoryId, setSubCategoryId] = useState('');

    const jwtToken = sessionStorage.getItem("token");


    // const categoryOnChange = (e) => {
    //     setCategoryId(e.target.value);
    // }
    // const subCategoryOnChange = (e) => {
    //     setSubCategoryId(e.target.value);
    // }

    const onChangeIsActive = (e) => {
        setIsActive(e);
    }

    // get categories
    // const axiosCategories = () => {
    //     axios.get('http://markbran.in/apis/admin/category', {
    //         headers: {
    //             "auth-token": jwtToken //the token is a variable which holds the token
    //         }
    //     })
    //         .then(function (response) {
    //             console.log(response.data.categories);
    //             setCategories(response.data.categories);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         });
    // }

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
        axiosProducts();
    }, []);
    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        let status = isActive ? 1 : 0;
        formData.append('status', status);
        formData.append('productName', e.productId);
        formData.append('heading', e.heading);
        formData.append('description', e.description);

        setError(null);
        setLoading(true)

        axios.post('http://markbran.in/apis/admin/warranty', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/warranty-terms')
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
                            Add Warranty Terms
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
                                {/* <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="categories">Category</CLabel>
                                            <CSelect onChange={categoryOnChange} >
                                                <option value="">select category</option>
                                                <option value="1">faq category1</option>
                                                <option value="2">faq category2</option>
                                            </CSelect>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="categories">Sub Category</CLabel>
                                            <CSelect onChange={subCategoryOnChange} >
                                                <option value="">select sub category</option>
                                                <option value="1">faq sub category 1</option>
                                                <option value="2">faq sub category 2</option>
                                            </CSelect>
                                        </CFormGroup>
                                    </CCol>
                                    
                                </CRow> */}
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="product">Product</CLabel>
                                            <CSelect {...register('productId')} >
                                                <option value="">select product</option>
                                                {products.map((item, index) => 
                                                    <option key={index} value={item.title}>{item.title}</option>
                                                )}
                                            </CSelect>
                                            <CFormText className="help-block text-danger" color="red">{errors.productId && errors.productId.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
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
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Description</CLabel>
                                            <CInputGroup>
                                                <CTextarea
                                                    // component="textarea"
                                                    id="content"
                                                    rows="3"
                                                    // onChange={descriptionOnChange} value={description}
                                                    {...register('description')}
                                                ></CTextarea>
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.description && errors.description.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
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
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add Warranty'}</button>
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

export default AddWarrantyTerms
