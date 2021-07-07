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
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const axios = require('axios').default;

const schema = yup.object().shape({
    title: yup.string().required(),
    categoryId: yup.string().required(),
    subCategoryId: yup.string().required(),
});

const EditSubSubCategory = () => {
    let subSubCategoryId = useParams();

    const { register, control, handleSubmit, setValue, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });


    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isFeatured, setIsFeatured] = useState(false);
    const [categoryState, setCategoryState] = useState([]);
    const [category, setCategory] = useState('');
    const [subCategories, setSubCategories] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [categories, setCategories] = useState([]);
    const [subCategoryImage, setSubCategoryImage] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [buttonLink, setButtonLink] = useState('');
    const [description, setDescription] = useState('');
    const [subSubCategory, setSubSubCategory] = useState([]);
    const [icon, setIcon] = useState('');
    const [shortOrder, setShortOrder] = useState('');
    const [setInHome, setSetInHome] = useState(false);
    // const [subSubCategoryState, setSubSubCategoryState] = useState([]);

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
    const imageOnChange = (e) => {
        setSubCategoryImage(e.target.files[0]);
    }

    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }

    // const onChangeCateId = (e) => {
    //     setCategoryId(e.target.value);
    // }

    //* get sub category
    const getSubCategoryAxios = () => {
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

    //* get sub category
    const getSubSubCategoryAxios = () => {
        axios.get(`http://markbran.in/apis/admin/subSubCategory/${subSubCategoryId.id}`, {
            headers: {
                'auth-token': jwtToken
            }
        })
            .then(function (response) {
                setSubSubCategory(response.data.subSubCategory);
                console.log(response.data.subSubCategory)
            })
            .catch(function (error) {
                // handle error
                // console.log('error', error);
                // setError(error);
            });
    }

    useEffect(() => {
        getSubCategoryAxios();
        axiosCategories();
        getSubSubCategoryAxios()
        if (subSubCategory) {
            setValue("title", subSubCategory.title)
            setValue("categoryId", subSubCategory.categoryId)
            setValue("subCategoryId", subSubCategory.subCategoryId)
        }
        setIsFeatured((subSubCategory.status === 1 ? true : false));
        setDescription(subSubCategory.tagLine);
        setButtonText(subSubCategory.buttonText);
        setButtonLink(subSubCategory.buttonLink);
        setSetInHome((subSubCategory.addToHome === 1 ? true : false));
        setShortOrder(subSubCategory.sortOrder);
    }, [subSubCategory.isFeatured, subSubCategory.sortOrder, subSubCategory.addToHome, subSubCategory.tagLine, subSubCategory.buttonText, subSubCategory.buttonLink, subSubCategory.title, subSubCategory.categoryId, subSubCategory.subCategoryId]);

    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        let status = isFeatured ? 1 : 0;
        let addToHome = setInHome ? 1 : 0;
        formData.append('status', status);
        formData.append('categoryId', e.categoryId);
        formData.append('subCategoryId', e.subCategoryId);
        formData.append('title', e.title);
        formData.append('image', subCategoryImage);
        formData.append('buttonText', buttonText);
        formData.append('buttonLink', buttonLink);
        formData.append('tagLine', description);
        formData.append('addToHome', addToHome);

        setError(null);
        setLoading(true);

        axios.patch(`http://markbran.in/apis/admin/subSubCategory/${subSubCategoryId.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/sub-sub-category')
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
                            Add sub sub category
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
                                                    name="categoryId"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Category Id is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CSelect {...field} >
                                                        <option value="">
                                                            Select Category
                                                        </option>
                                                        {categories.map(item =>
                                                            <option key={item.id} value={item.id}>
                                                                {item.title}
                                                            </option>
                                                        )}
                                                    </CSelect>}
                                                />

                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.categoryId && errors.categoryId.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Sub Category</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="subCategoryId"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Category Id is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CSelect {...field} >
                                                        <option value="">
                                                            Select Sub Category
                                                        </option>
                                                        {subCategories.map(item =>
                                                            <option key={item.id} value={item.id}>
                                                                {item.title}
                                                            </option>
                                                        )}
                                                    </CSelect>}
                                                />

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
                                                    render={({ field }) => <CInput  {...field} type="text" placeholder="Category" autoComplete="category" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="5">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="categoryImage" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={imageOnChange} custom id="categoryImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs="1">
                                        <img src={`${process.env.REACT_APP_BASE_URL}${subSubCategory.image}`} className="img-fluid" alt="" />
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="Sort Order">Sort Order</CLabel>
                                            <CInputGroup>
                                                <CInput type="text" onChange={handleShortOrderOnChange} value={shortOrder} placeholder="Sort Order" autoComplete="Sort Order" />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="5">
                                        <CLabel htmlFor="icon">Icon</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="icon" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={handleIonOnChange} custom id="icon" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs="1">
                                        <img src={`${process.env.REACT_APP_BASE_URL}${subSubCategory.icon}`} className="img-fluid" alt="" />
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
                                            <CLabel htmlFor="category">Tag Line</CLabel>
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
                                                <Switch onChange={onChangeIsFeatured} checked={isFeatured} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Set in home</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Switch onChange={onChangeSetInHome} checked={setInHome} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Update'}</button>
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

export default EditSubSubCategory
