import React, { useEffect, useState } from 'react'
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
    CLabel,
    CRow,
    CSelect,
    // CSwitch
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
    productId: yup.string().required(),
    stateId: yup.string().required(),
    expireDate: yup.string().required(),
    discount: yup.string().required(),
});

const AddDiscount = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });

    let   history                           = useHistory();
    const [error, setError]                 = useState(null);
    const [loading, setLoading]             = useState(false);
    const [isFeatured, setIsFeatured]       = useState(true);
    const [categoryImage, setCategoryImage] = useState('');
    const [startDate, setStartDate]         = useState(new Date());
    const [addAsBanner, setAddAsBanner]     = useState(false);
    const [states, setStates]               = useState([]);
    const [products, setProducts]           = useState([]);


    let jwtToken = sessionStorage.getItem("token");



    

    //* category image
    const couponImageOnChange = (e) => {
        setCategoryImage(e.target.files[0]);
    }

    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }
    const onChangeAddAsBanner = (e) => {
        setAddAsBanner(e);
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
        // e.preventDefault();
        // console.log('value', e);
        const formData = new FormData();
        formData.append('status', isFeatured);
        formData.append('title', e.categoryName);
        formData.append('image', categoryImage);
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
                            Add Discount
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
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Discount (In percentage)</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="discount"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Discount is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Add Discount" autoComplete="Discount" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.discount && errors.discount.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="image" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={couponImageOnChange} custom id="image" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="Button Link">Expiry Date</CLabel>
                                            <CInputGroup>
                                                <DatePicker
                                                    {...register('expireDate')}
                                                    onChange={yearOnChange}
                                                    value={startDate}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.expireDate && errors.expireDate.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Add as banner</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={onChangeAddAsBanner} checked={addAsBanner} />
                                            </CInputGroup>
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
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add Discount'}</button>
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

export default AddDiscount
