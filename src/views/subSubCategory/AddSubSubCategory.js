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
    CTextarea
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import Switch from "react-switch";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const axios = require('axios').default;

const schema = yup.object().shape({
    title: yup.string().required(),
    categoryId: yup.string().required(),
    subCategoryId: yup.string().required(),
});

const AddSubSubCategory = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });

    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [isFeatured, setIsFeatured] = useState(true);
    const [subSubCategoryImage, setSubSubCategoryImage] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [buttonLink, setButtonLink] = useState('');
    const [description, setDescription] = useState('');
    const [subCategories, setSubCategories] = useState([]);
    const [icon, setIcon] = useState('');
    const [shortOrder, setShortOrder] = useState('');
    const [setInHome, setSetInHome] = useState(false);

    let jwtToken = sessionStorage.getItem("token");

    const onChangeSetInHome = (e) => {
        setSetInHome(e);
    }
    // *icon
    const handleIonOnChange = (e) => {
        setIcon(e);
    }
    const handleShortOrderOnChange = (e) => {
        setShortOrder(e.target.value);
    }
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
    const subSubCategoryOnChange = (e) => {
        setSubSubCategoryImage(e.target.files[0]);
    }

    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
        // console.log(isFeatured);
    }

    const onChangeCateId = (e) => {
        setCategoryId(e.target.value);
    }

    // *get category
    const axiosCategories = () => {
        axios.get('http://markbran.in/apis/admin/category', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (e) {
                // console.log(e.data);
                setCategories(e.data.categories);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    // *get sub category
    const axiosSubCategories = () => {
        axios.get('http://markbran.in/apis/admin/subcategory', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                // console.log(response.data);
                setSubCategories(response.data.subcategories);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    useEffect(() => {
        axiosCategories();
        axiosSubCategories()
    }, []);

    const onHandlerSubmit = (value) => {
        // console.log('value', value);
        setError(null);
        setLoading(true);
        const formData = new FormData();
        let status = isFeatured ? 1 : 0;
        const addToHome = setInHome ? 1 : 0;
        formData.append('status', status);
        formData.append('title', value.title);
        formData.append('categoryId', value.categoryId);
        formData.append('subCategoryId', value.subCategoryId);
        formData.append('image', subSubCategoryImage);
        formData.append('buttonText', buttonText);
        formData.append('buttonLink', buttonLink);
        formData.append('tagLine', description);
        formData.append('sortOrder', shortOrder);
        formData.append('addToHome', addToHome);
        formData.append('icon', icon);

        axios.post('http://markbran.in/apis/admin/subSubCategory', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'auth-token': jwtToken
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/sub-sub-category')
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
        <Fragment>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add Sub Category
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
                                                <CSelect name="categoryId" {...register("categoryId")}>
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
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Sub Category</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CSelect name="subCategoryId" {...register("subCategoryId")}>
                                                    <option value="">
                                                        Select Sub Category
                                                    </option>
                                                    {subCategories.map(item =>
                                                        <option key={item.id} value={item.id}>
                                                            {item.title}
                                                        </option>
                                                    )}
                                                </CSelect>

                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.subCategoryId && errors.subCategoryId.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
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
                                                            message: "Title is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Title" autoComplete="Title" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="categoryImage" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={subSubCategoryOnChange} custom id="categoryImage" type="file" />
                                        </CInputGroup>
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
                                    <CCol xs="6">
                                        <CLabel htmlFor="icon">Icon</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="icon" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={handleIonOnChange} custom id="icon" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="Sort Order">Sort Order</CLabel>
                                            <CInputGroup>
                                                <CInput type="text" onChange={handleShortOrderOnChange} value={shortOrder} placeholder="Sort Order" autoComplete="Sort Order" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Tag Line</CLabel>
                                            <CInputGroup>
                                                <CTextarea
                                                    // component="textarea"
                                                    id="content"
                                                    rows="3"
                                                    onChange={descriptionOnChange} value={description}
                                                ></CTextarea>
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.tagLine && errors.tagLine.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Status</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Switch onChange={onChangeIsFeatured} checked={isFeatured} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Show in home</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Switch onChange={onChangeSetInHome} checked={setInHome} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add Sub Sub Category'}</button>
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

export default AddSubSubCategory
