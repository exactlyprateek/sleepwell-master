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
import Switch from "react-switch";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const axios = require('axios').default;

const schema = yup.object().shape({
    title: yup.string().required(),
    phone: yup.number().positive(),
    sortOrder: yup.number().positive(),
});

const EditBeddingSets = () => {
    let comfortCardId = useParams();

    const { control, handleSubmit, setValue, register, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });

    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isFeatured, setIsFeatured] = useState(false);
    const [isGroup, setIsGroup] = useState(false);
    const [categoryState, setCategoryState] = useState([]);
    const [category, setCategory] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [buttonLink, setButtonLink] = useState('');
    const [description, setDescription] = useState('');

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
    const categoryOnChange = (e) => {
        setCategoryImage(e.target.files[0]);
    }

    //* status
    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }
    const onChangeIsGroup = (e) => {
        setIsGroup(e);
    }

    // const categoryOnChange = (e) => {
    //     setCategory(e.target.value);
    // }

    let jwtToken = sessionStorage.getItem("token");
    //* get
    const getServiceCardAxios = () => {
        axios.get(`http://markbran.in/apis/admin/comfort/card/${comfortCardId.id}`, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'auth-token': jwtToken
            }
        })
            .then(function (response) {
                setLoading(false);
                setCategoryState(response.data.card);
                // console.log(response.data.card)
            })
            .catch(function (err) {
                setLoading(false);
                if (err.response && err.response.data.message) {
                    setError(err.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }

    useEffect(() => {
        getServiceCardAxios();
        if (categoryState) {
            setValue("title", categoryState.title)
            setValue("phone", categoryState.phone)
            setValue("sortOrder", categoryState.sortOrder)
        }
        setIsFeatured((categoryState.status === 1 ? true :false ));
        setIsGroup((categoryState.isGroup === 1 ? true :false ));
        setDescription(categoryState.description);

    }, [categoryState.title, categoryState.phone, categoryState.sortOrder, categoryState.status, categoryState.buttonLink, categoryState.buttonText, categoryState.description]);

    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        let status = isFeatured ? "1" : "0";
        formData.append('status', status);
        formData.append('title', e.title);
        formData.append('image', categoryImage);
        formData.append('description', description);
        // formData.append('phone', e.phone);
        formData.append('sortOrder', e.sortOrder);
        // console.log('value', value.categoryName);
        setError(null);
        setLoading(true);

        axios.patch(`http://markbran.in/apis/admin/comfort/card/${comfortCardId.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'auth-token': jwtToken
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/comfort-card')
            })
            .catch(err => {
                setLoading(false);
                if (err.response && err.response.data.errorMessage) {
                    setError(err.response.data.errorMessage);
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
                            Edit service card
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
                                            <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="5">
                                        <CLabel htmlFor="category">Category Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="categoryImage" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={categoryOnChange} custom id="categoryImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs="1">
                                        <img src={`${process.env.REACT_APP_BASE_URL}${categoryState.image}`} className="img-fluid" alt="" />
                                    </CCol>
                                </CRow>
                                {/* <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="Button Text">Button Text</CLabel>
                                            <CInputGroup>
                                                <CInput type="text" onChange={buttonTextOnChange} value={buttonText} placeholder="Button Text" autoComplete="Button Text" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="Button Link">Button Link</CLabel>
                                            <CInputGroup>
                                                <CInput type="text" onChange={buttonLinkOnChange} value={buttonLink} placeholder="Button Link" autoComplete="Button Link" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow> */}
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="Button Link">Sort Order</CLabel>
                                            <CInputGroup>
                                                <Controller
                                                    name="sortOrder"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Categoty is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput type="text" {...field} placeholder="Sort Order" autoComplete="Sort Order" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.sortOrder && errors.sortOrder.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    {/* <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="Button Link">Phone no.</CLabel>
                                            <CInputGroup>
                                                <Controller
                                                    name="phone"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "phone is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput type="text" {...field} placeholder="Phone Number" autoComplete="Phone Number" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.phone && errors.phone.message}</CFormText>
                                        </CFormGroup>
                                    </CCol> */}
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
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Status</CLabel>
                                            <CInputGroup>
                                                {/* <CSwitch onChange={switch2} checked={switchState} className={'mx-1'} color={'success'} defaultChecked variant="opposite" /> */}
                                                <Switch onChange={onChangeIsFeatured} checked={isFeatured} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    {/* <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">IsGroup</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={onChangeIsGroup} checked={isGroup} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol> */}
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Update service card'}</button>
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

export default EditBeddingSets
