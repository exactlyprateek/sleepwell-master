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
import Switch from "react-switch";
const axios = require('axios').default;

const schema = yup.object().shape({
    question: yup.string().required(),
    categoryId: yup.string().required(),
    answer: yup.string().required(),
});


const AddFaq = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [addToHome, setAddToHome] = useState(false);
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertDanger, setShowAlertDanger] = useState(false);
    const [textMessage, setTextMessage] = useState('');
    const [categories, setCategories] = useState([])


    const jwtToken = sessionStorage.getItem("token");



    const onChangeIsActive = (e) => {
        setIsActive(e);
    }
    const onChangeAddToHome = (e) => {
        setAddToHome(e);
    }

    //* faq categories
    const axiosCategories = () => {
        axios.get('http://markbran.in/apis/admin/faqCategory', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                // console.log(response.data);
                setCategories(response.data.categories);
            })
            .catch(function (err) {
                // console.log(error);
                if (err.response && err.response.data.message) {
                    setError(err.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }
    useEffect(() => {
        axiosCategories();
    }, []);
    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        let status = isActive ? 1 : 0 ;
        let addHome = addToHome ? 1 : 0;
        formData.append('status', status);
        formData.append('addToHome', addHome);
        formData.append('question', e.question);
        formData.append('answer', e.answer);
        formData.append('categoryId', e.categoryId);

        setError(null);
        setLoading(true)

        axios.post('http://markbran.in/apis/admin/faq', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setLoading(false);
                history.push('/faq')
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
        <>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add Faq
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
                                            <CLabel htmlFor="categories">Category</CLabel>
                                            <CSelect {...register("categoryId")} >
                                                <option value="">select category</option>
                                                {categories.map((item, index) =>                                             
                                                    <option value={item.id}>{item.title}</option>
                                                )}
                                            </CSelect>
                                            <CFormText className="help-block text-danger" color="red">{errors.categoryId && errors.categoryId.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="question">Question</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CInput {...register('question')} type="text" placeholder="Add question" autoComplete="question" />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.question && errors.question.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Answer</CLabel>
                                            <CInputGroup>
                                                <CTextarea
                                                    // component="textarea"
                                                    id="content"
                                                    rows="3"
                                                    // onChange={descriptionOnChange} value={description}
                                                    {...register('answer')}
                                                ></CTextarea>
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.answer && errors.answer.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="is_active">Status</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={onChangeIsActive} checked={isActive} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="is_active">Add to home</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={onChangeAddToHome} checked={addToHome} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add Faq'}</button>
                                    </CCol>
                                </CRow>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

        </>
    )
}

export default AddFaq
