import React, { useEffect, useState } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormGroup,
    CInput,
    CLabel,
    CSelect,
    CRow,
    CInputGroup,
    CInputFile,
    CTextarea,
    CFormText,
    CForm,
    // CSwitch
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import Switch from "react-switch";
import Select from "react-select";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const axios = require('axios').default;

const schema = yup.object().shape({
    categoryId1: yup.string().required(),
    // categoryId: yup.string().matches(/^[aA-zZ\s \\ ]+$/, "Only alphabets are allowed for this field ").required(),
});

const AddProduct = () => {
    const { register, handleSubmit, setValue, getValues, control, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });

    const [collapsed, setCollapsed]       = useState(true)
    const [showElements, setShowElements] = useState(true)
    const [bannerImage, setBannerImage]   = useState();
    const [description, setDescription]   = useState('');
    const [giftDetail, setGiftDetail]     = useState('');

    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [bestSeller, setBestSeller] = useState(true);

    const jwtToken = sessionStorage.getItem("token");



    const onChangeIsActive = (e) => {
        setIsActive(e);
    }
    const onChangeBestSeller = (e) => {
        setBestSeller(e);
    }


    // get category
    const axiosCategories = () => {
        axios.get('/category/')
            .then(function (response) {
                setCategories(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    // get sub category
    const axiosSubCategories = (cateId) => {
        console.log(categoryId);
        axios.get(`/category/getSubCateById/${cateId}`)
            .then(function (response) {
                console.log(response.data);
                setSubCategories(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }


    const cateIdonChange = (e) => {
        setCategoryId(e.target.value);
        console.log(e.target.value);
        axiosSubCategories(e.target.value);
    }

    const descriptionOnChange = (e) => {
        setDescription(e.target.value);
    }
    const giftDetailOnChange = (e) => {
        setGiftDetail(e.target.value);
    }
    const bannerOnChange = (e) => {
        setBannerImage(e.target.files[0]);
    }

    const onHandlerSubmit = (e) => {
        console.log(e);
    }

    useEffect(() => {
        axiosCategories();
        // axiosSubCategories();
        // setValue("categoryId", categoryId)
        // console.log(getValues("categoryId"));
    }, [categoryId]);
    return (
        <div>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add Product
                        </CCardHeader>
                        <CCardBody>
                            <CForm onSubmit={handleSubmit(onHandlerSubmit)}>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="categories">Category</CLabel>
                                            <CSelect onChange={cateIdonChange} >
                                                <option value="">select category</option>
                                                {categories.map(item =>
                                                    <option key={item._id} value={item._id}>
                                                        {item.category}
                                                    </option>
                                                )}
                                            </CSelect>
                                            <CFormText className="help-block text-danger" color="red">{errors.categoryId && errors.categoryId.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="ccyear">Sub Category</CLabel>
                                            <CSelect {...register("subCategoryId")} >
                                                <option value="">select sub category</option>
                                                {subCategories ? subCategories.map(item =>
                                                    <option key={item._id} value={item._id}>
                                                        {item.sub_category}
                                                    </option>
                                                ) : null}
                                            </CSelect>
                                            <CFormText className="help-block text-danger" color="red">{errors.categoryId && errors.categoryId.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="name">Product</CLabel>
                                            <CInput id="name" placeholder="Enter your product" required />
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="bannerImage" variant="custom-file">
                                                Choose image...
                                                </CLabel>
                                            <CInputFile onChange={bannerOnChange} custom id="bannerImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="ccmonth">Select Size</CLabel>
                                            <CSelect custom name="ccmonth" id="ccmonth">
                                                <option value="1">Size 1</option>
                                                <option value="2">Size 2</option>
                                            </CSelect>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="ccyear">Select Thickness</CLabel>
                                            <CSelect custom name="ccyear" id="ccyear">
                                                <option>Thickness 1</option>
                                                <option>Thickness 2</option>
                                            </CSelect>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="ccmonth">Select State</CLabel>
                                            <CSelect custom name="ccmonth" id="ccmonth">
                                                <option value="1">Benifits 1</option>
                                                <option value="2">Benifits 2</option>
                                            </CSelect>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="name">Price</CLabel>
                                            <CInput id="name" placeholder="Enter product price" required />
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="ccmonth">Select Benifits</CLabel>
                                            <CSelect custom name="ccmonth" id="ccmonth">
                                                <option value="1">Benifits 1</option>
                                                <option value="2">Benifits 2</option>
                                            </CSelect>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="ccyear">Select Advantages</CLabel>
                                            <CSelect custom name="ccyear" id="ccyear">
                                                <option>Advantages 1</option>
                                                <option>Advantages 2</option>
                                            </CSelect>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="name">Design</CLabel>
                                            <CInput id="name" placeholder="Enter Design" required />
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="name">Colour</CLabel>
                                            <CInput id="name" placeholder="Enter Colour" required />
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
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Gift Details</CLabel>
                                            <CInputGroup>
                                                <CTextarea
                                                    // component="textarea"
                                                    id="content"
                                                    rows="3"
                                                    onChange={giftDetailOnChange} value={giftDetail}
                                                ></CTextarea>
                                            </CInputGroup>
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
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="is_active">Best seller</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={onChangeBestSeller} checked={bestSeller} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" type="button">Add Product</button>
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

export default AddProduct
