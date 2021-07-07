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
const axios = require('axios').default;



const EditCategory = () => {
    let categoryId = useParams();

    const { control, handleSubmit, setValue, register, formState: { errors } } = useForm({ mode: 'all' });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isFeatured, setIsFeatured] = useState(false);
    const [categoryState, setCategoryState] = useState([]);
    const [category, setCategory] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [description, setDescription] = useState('');

    //* description
    const descriptionOnChange = (e) => {
        setDescription(e.target.value);
    }

    //* category image
    const categoryOnChange = (e) => {
        setCategoryImage(e.target.files[0]);
    }

    //* freatured category
    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }

    // const categoryOnChange = (e) => {
    //     setCategory(e.target.value);
    // }

    let jwtToken = sessionStorage.getItem("token");
    //* get category
    const getCategoryAxios = () => {
        axios.get(`http://markbran.in/apis/admin/category/${categoryId.id}`, {
            headers: {
                'auth-token': jwtToken
            }
        })
            .then(function (response) {
                setCategoryState(response.data.category);
                console.log(response.data.category)
            })
            .catch(function (error) {
                // handle error
                if (error.response.data.message) {
                    setError(error.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }

    useEffect(() => {
        getCategoryAxios();
        if(categoryState) {
            setValue("category", categoryState.title)
        }
        setIsFeatured(categoryState.status);
        setDescription(categoryState.description);

    }, [categoryState.title, categoryState.status, categoryState.description]);

    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        formData.append('status', isFeatured);
        formData.append('title', e.category);
        formData.append('image', categoryImage);
        formData.append('description', description);
        // console.log('value', value.categoryName);
        setError(null);
        setLoading(true);

        axios.patch(`http://markbran.in/apis/admin/category/${categoryId.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'auth-token': jwtToken
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/categories')
                // console.log(response);
            })
            .catch(err => {
                setLoading(false);
                // console.log(err.response);
                if (err.response) {
                    if (err.response.data.errorMessage) {
                        setError(err.response.data.errorMessage);
                    } else {
                        setError("Something went wrong!");
                    }
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
                            Edit Category
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
                                                    name="category"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Categoty is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field}  type="text" placeholder="Category" autoComplete="category" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.category && errors.category.message}</CFormText>
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
                                        {/* <img src={`${window.location.origin}/images/category/${categoryState.image}`} className="img-fluid" alt="" /> */}
                                        <img src={`${window.location.origin}/${categoryState.image}`} className="img-fluid" alt="" />
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
                                                {/* <CSwitch onChange={switch2} checked={switchState} className={'mx-1'} color={'success'} defaultChecked variant="opposite" /> */}
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

        </div>
    )
}

export default EditCategory
