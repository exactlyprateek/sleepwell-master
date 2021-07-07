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
const axios = require('axios').default;



const EditSubCategory = () => {
    let subCategoryId = useParams();

    const { control, handleSubmit, setValue, register, formState: { errors } } = useForm({ mode: 'all' });
    
    let   history                                 = useHistory();
    const [error, setError]                       = useState(null);
    const [loading, setLoading]                   = useState(false);
    const [isFeatured, setIsFeatured]             = useState(false);
    const [categoryState, setCategoryState]       = useState([]);
    const [category, setCategory]                 = useState('');
    const [subCategory, setSubCategory]           = useState([]);
    const [categoryId, setCategoryId]             = useState('');
    const [categories, setCategories]             = useState([]);
    const [subCategoryImage, setSubCategoryImage] = useState('');
    const [buttonText, setButtonText]             = useState('');
    const [buttonLink, setButtonLink]             = useState('');
    const [description, setDescription]           = useState('');

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
    const subCategoryOnChange = (e) => {
        setSubCategoryImage(e.target.files[0]);
    }

    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }

    // const categoryOnChange = (e) => {
    //     setCategory(e.target.value);
    // }

    const onChangeCateId = (e) => {
        setCategoryId(e.target.value);
        // console.log(e);
        // console.log(categoryId);
    }

    //* get sub category
    const getSubCategoryAxios = () => {
        axios.get(`http://markbran.in/apis/admin/subcategory/${subCategoryId.id}`, {
            headers: {
                'auth-token': jwtToken
            }
        })
            .then(function (response) {
                setSubCategory(response.data.subcategory);
                console.log(response.data)
            })
            .catch(function (error) {
                // handle error
                // console.log('error', error);
                // setError(error);
            });
    }

    //* get category
    const axiosCategories = () => {
        axios.get('http://markbran.in/apis/admin/category', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                // console.log(response.data);
                setCategories(response.data.categories);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    useEffect(() => {
        getSubCategoryAxios();
        axiosCategories();
        if(categoryState) {
            setValue("subCategory", subCategory.title)
        }
        setIsFeatured(subCategory.status);
        setCategoryId(subCategory.categoryId);
        setDescription(subCategory.description);
        setButtonText(subCategory.buttonText);
        setButtonLink(subCategory.buttonLink);
    }, [subCategory.categoryId, subCategory.title, subCategory.status, subCategory.description, subCategory.buttonText, subCategory.buttonLink]);

    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        formData.append('status', isFeatured);
        formData.append('categoryId', categoryId);
        formData.append('title', e.subCategory);
        formData.append('image', subCategoryImage);
        formData.append('buttonText', buttonText);
        formData.append('buttonLink', buttonLink);
        formData.append('description', description);

        setError(null);
        setLoading(true);

        axios.patch(`http://markbran.in/apis/admin/subcategory/${subCategoryId.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/sub-categories')
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
                            Add Category
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
                                                
                                                <CSelect custom name="categoryId" value={categoryId} onChange={onChangeCateId} id="categoryId">
                                                    <option value="">
                                                        Select Category
                                                        </option>
                                                    {categories.map(item =>
                                                        <option key={item.id} value={item.id}>
                                                            {item.title}
                                                        </option>
                                                    )}
                                                </CSelect>

                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.categoryId && errors.categoryId.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Sub Category</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="subCategory"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Categoty is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput  {...field}  type="text" placeholder="Category" autoComplete="category" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.subCategory && errors.subCategory.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="5">
                                        <CLabel htmlFor="category">Sub Category Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="categoryImage" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={subCategoryOnChange} custom id="categoryImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs="1">
                                        <img src={`${window.location.origin}/images/subCategory/${subCategory.subCategoryImage}`} className="img-fluid" alt="" />
                                    </CCol>
                                </CRow>
                                <CRow>
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
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Update Category'}</button>
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

export default EditSubCategory
