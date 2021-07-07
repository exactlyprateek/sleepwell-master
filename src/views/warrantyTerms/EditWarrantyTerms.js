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
    CInputGroup,
    CLabel,
    CRow,
    CSelect,
    CTextarea,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory, useParams } from 'react-router';
import Switch from "react-switch";
const axios = require('axios').default;

const schema = yup.object().shape({
    heading: yup.string().required(),
    product: yup.string().required(),
    description: yup.string().required(),
});

const EditWarrantyTerms = () => {
    let warrantyId = useParams();

    const { control, handleSubmit, setValue, register, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [WarrantyState, setWarrantyState] = useState([]);
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [products, setProducts] = useState([]);


    const jwtToken = sessionStorage.getItem("token");



    const onChangeIsActive = (e) => {
        setIsActive(e);
    }

    //* get size
    const getWarrantyAxios = () => {
        axios.get(`http://markbran.in/apis/admin/warranty/${warrantyId.id}`, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                // console.log(response.data);
                setWarrantyState(response.data.warranty);
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
        getWarrantyAxios();
        axiosProducts();
        
        if (WarrantyState) {
            setValue("heading", WarrantyState.heading)
            setValue("description", WarrantyState.description)
            setValue("product", WarrantyState.productName)
        }
        setIsActive((WarrantyState.status ? 1 : 0));

    }, [(WarrantyState.status ? 1 : 0), WarrantyState.productNam, WarrantyState.heading, WarrantyState.description]);

    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        let status = isActive ? 1 : 0;
        formData.append('status', status);
        formData.append('heading', e.heading);
        formData.append('description', e.description);
        formData.append('productName', e.product);

        setError(null);
        setLoading(true);

        axios.patch(`http://markbran.in/apis/admin/warranty/${warrantyId.id}`, formData, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/warranty-terms')
                // console.log(response);
                setError(null);
            })
            .catch(err => {
                setLoading(false);
                // console.log(err);
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
                            Edit warranty
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
                                            <CLabel htmlFor="product">Product</CLabel>
                                            <Controller
                                                name="product"
                                                control={control}
                                                defaultValue={''}
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: "product is required"
                                                    },
                                                }}
                                                render={({ field }) => <CSelect {...field} >
                                                    <option value="">select product</option>
                                                    {products.map((item, index) =>
                                                        <option key={index} value={item.title}>{item.title}</option>
                                                    )}
                                                </CSelect>}
                                            />
                                            <CFormText className="help-block text-danger" color="red">{errors.product && errors.product.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="size">Heading</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="heading"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "heading is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Edit heading" autoComplete="heading" />}
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
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="description"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "heading is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CTextarea {...field} id="content" rows="4" placeholder="Edit description" autoComplete="description" ></CTextarea>}
                                                />
                                                {/* <CTextarea
                                                    {...register('description')}
                                                    id="content"
                                                    rows="4"
                                                    // onChange={descriptionOnChange}
                                                    // value={description}
                                                ></CTextarea> */}
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
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Edit warranty'}</button>
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

export default EditWarrantyTerms
