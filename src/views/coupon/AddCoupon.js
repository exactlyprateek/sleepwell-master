import React, { useState, useEffect } from 'react'
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
import DatePicker from 'react-date-picker';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import Switch from "react-switch";
const axios = require('axios').default;

const schema = yup.object().shape({
    couponType: yup.string().required(),
    productId: yup.string().required(),
    couponCode: yup.string().required(),
    value: yup.string().required(),
    stateId: yup.string().required(),
});

const AddCoupon = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isFeatured, setIsFeatured] = useState(true);
    const [categoryImage, setCategoryImage] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [buttonLink, setButtonLink] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [states, setStates] = useState([]);
    const [products, setProducts] = useState([]);



    let jwtToken = sessionStorage.getItem("token");


    //* description
    const descriptionOnChange = (e) => {
        setDescription(e.target.value);
    }
    //* button text
    const buttonTextOnChange = (e) => {
        setButtonText(e.target.value);
    }
    //* button text
    const buttonLinkOnChange = (e) => {
        setButtonLink(e.target.value);
    }

    //* category image
    const couponImageOnChange = (e) => {
        setCategoryImage(e.target.files[0]);
    }

    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }

    const yearOnChange = (startDate) => {
        setStartDate(startDate);
    }

    //* get state 
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
        const formData = new FormData();
        formData.append('status', isFeatured);
        formData.append('title', e.categoryName);
        formData.append('image', categoryImage);
        formData.append('buttonText', buttonText);
        formData.append('buttonLink', buttonLink);
        formData.append('description', description);
        // formData.append('status', 1);


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
                        <CCardHeader>
                            Add Coupon
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
                                            <CLabel htmlFor="category">Select coupon type</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CSelect name="couponType" {...register("couponType")}>
                                                    <option value="">
                                                        Select coupon type
                                                    </option>
                                                    <option value="percentage">
                                                        Percentage
                                                    </option>
                                                    <option value="amount">
                                                        Amount
                                                    </option>
                                                </CSelect>

                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.couponType && errors.couponType.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Coupon Code</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="couponCode"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Coupon code is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Coupon code" autoComplete="Coupon code" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.couponCode && errors.couponCode.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="image" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={couponImageOnChange} custom id="image" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Select product</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CSelect name="productId" {...register("productId")}>
                                                    <option value="">
                                                        Select product
                                                    </option>
                                                    {products.map((item, index) =>
                                                        <option key={index} value={item.id}>{item.title}</option>
                                                    )}
                                                </CSelect>

                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.productId && errors.productId.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    
                                    
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="Button Text">Value (Percentage/Amount)</CLabel>
                                            <CInputGroup>
                                                <CInput type="text" {...register('value')} placeholder="Value (Percentage/Amount)" autoComplete="value" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.value && errors.value.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Select state</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CSelect name="stateId" {...register("stateId")}>
                                                    <option value="">
                                                        Select state
                                                    </option>
                                                    {states.map((item, index) => 
                                                        <option value={item.id}>
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
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Status</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={onChangeIsFeatured} checked={isFeatured} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="Button Link">Expiry Date</CLabel>
                                            <CInputGroup>
                                                <DatePicker
                                                    onChange={yearOnChange}
                                                    value={startDate}
                                                />
                                            </CInputGroup>
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
                                                    onChange={descriptionOnChange} value={description}
                                                ></CTextarea>
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add Coupon'}</button>
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

export default AddCoupon
