import ReactStars from "react-rating-stars-component";
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

const axios = require('axios').default;

const schema = yup.object().shape({
    question: yup.string().required(),
    categoryId: yup.string().required(),
    answer: yup.string().required(),
});


const AddProductServiceReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [products, setProducts] = useState([]);

    const jwtToken = sessionStorage.getItem("token");


    const onChangeIsActive = (e) => {
        setIsActive(e);
    }
    const handleCategoryOnChange = (e) => {
        console.log(e.target.value);
    }
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const axiosCategories = () => {
        axios.get('http://markbran.in/apis/admin/category', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                // console.log(response.data.categories);
                setCategories(response.data.categories);
                axiosSubCategory();
            })
            .catch(function (error) {
                // console.log(error);
                if (error.response && error.response.data.message) {
                    setError(error.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }
    //* get sub category
    const axiosSubCategory = () => {
        axios.get(`http://markbran.in/apis/admin/subcategory`, {
            headers: {
                'auth-token': jwtToken
            }
        })
            .then(function (response) {
                setSubCategories(response.data.subcategories);
                // console.log(response.data)
            })
            .catch(function (error) {
                if (error.response && error.response.data.message) {
                    setError(error.response.data.message);
                } else {
                    setError("Something went wrong!");
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
        axiosSubCategory();
        axiosProducts();
    }, []);
    const onHandlerSubmit = (e) => {
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
                            Add Product/Service Review
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
                                            <CLabel htmlFor="question">User name</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput {...register('userName')} type="text" placeholder="User Name" autoComplete="User Name" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.userName && errors.userName.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="question">User Email</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput {...register('userEmail')} type="text" placeholder="Add Email" autoComplete="userEmail" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.userEmail && errors.userEmail.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="categories">Category</CLabel>
                                            <CSelect {...register("categoryId")} onChange={handleCategoryOnChange} >
                                                <option value="">select category</option>
                                                {categories.map((item, index) => 
                                                    <option key={index} value={item.id}>{item.title}</option>
                                                )}
                                            </CSelect>
                                            <CFormText className="help-block text-danger" color="red">{errors.categoryId && errors.categoryId.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="categories">Sub Category</CLabel>
                                            <CSelect {...register("categoryId")} >
                                                <option value="">select sub category</option>
                                                {subCategories.map((item, index) =>
                                                    <option key={index} value={item.id}>{item.title}</option>
                                                )}
                                            </CSelect>
                                            <CFormText className="help-block text-danger" color="red">{errors.categoryId && errors.categoryId.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="categories">Product</CLabel>
                                            <CSelect {...register("productId")} >
                                                <option value="">select Product</option>
                                                {products.map((item, index) =>
                                                    <option key={index} value={item.id}>{item.title}</option>
                                                )}
                                            </CSelect>
                                            <CFormText className="help-block text-danger" color="red">{errors.productId && errors.productId.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="question">Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput {...register('title')} type="text" placeholder="Add title" autoComplete="title" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Description</CLabel>
                                            <CInputGroup>
                                                <CTextarea
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
                                    <CCol xl="12">
                                        <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add Review'}</button>
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

export default AddProductServiceReview
