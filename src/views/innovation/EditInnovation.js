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
import CkEditor from '../../components/CkEditor5.js';
import { Multiselect } from 'multiselect-react-dropdown';

const axios = require('axios').default;

const schema = yup.object().shape({
    title: yup.string().required(),
});

const EditInnovationCard = () => {
    let innovationId = useParams();

    const { control, handleSubmit, setValue, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    
    let   history                               = useHistory();
    const [error, setError]                     = useState(null);
    const [loading, setLoading]                 = useState(false);
    const [isFeatured, setIsFeatured]           = useState(false);
    const [innovationState, setInnovationState] = useState([]);
    const [innovationImage, setInnovationImage]     = useState('');
    const [description, setDescription]         = useState('');
    const [advantages, setAdvantages]           = useState([]);
    const [advantagesArray, setAdvantagesArray] = useState([]);

    let jwtToken = sessionStorage.getItem("token");


    // //* description
    // const descriptionOnChange = (e) => {
    //     setDescription(e.target.value);
    // }
    const advantageOnSelect = (value) => {
        setAdvantagesArray(value)
    }

    //* image
    const categoryOnChange = (e) => {
        setInnovationImage(e.target.files[0]);
    }

    const onChangeIsFeatured = (e) => {
        setIsFeatured(e);
    }
    const handleDescription = (data) => {
        // console.log(data)
        setDescription(data);
    }
    const axiosAdvantages = () => {
        axios.get('http://markbran.in/apis/admin/advantage', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                // console.log(response.data.advantages);
                setAdvantages(response.data.advantages);
            })
            .catch(function (error) {
                if (error.response && error.response.data.message) {
                    setError(error.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }
    //* get innovation
    const getInnovationAxios = () => {
        axios.get(`http://markbran.in/apis/admin/innovation/card/${innovationId.id}`, {
            headers: {
                'auth-token': jwtToken
            }
        })
            .then(function (response) {
                setInnovationState(response.data.innovationCard);
                console.log(response.data.innovationCard)
            })
            .catch(function (error) {
                // handle error
                if (error.response && error.response.data.message) {
                    setError(error.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }

    useEffect(() => {
        axiosAdvantages()
        getInnovationAxios();
        if (innovationState) {
            setValue("title", innovationState.title)
        }
        setIsFeatured((innovationState.status === 1 ? true : false ));
        setDescription(innovationState.description);
        setInnovationImage(innovationState.image);
    }, [innovationState.title, innovationState.status, innovationState.image, innovationState.description]);
    
    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        formData.append('status', isFeatured);
        formData.append('title', e.category);
        formData.append('image', innovationImage);
        formData.append('description', description);
        // console.log('value', value.categoryName);
        setError(null);
        setLoading(true);

        axios.patch(`http://markbran.in/apis/admin/category/${innovationId.id}`, formData, {
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
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Title" autoComplete="Title" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.title && errors.title.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="5">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="innovationImage" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={categoryOnChange} custom id="innovationImage" type="file" />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs="1">
                                        <img src={`${process.env.REACT_APP_BASE_URL}/${innovationState.image}`} className="img-fluid" alt="" />
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Select advantages</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Multiselect
                                                    // options={item.advantagesArray} // Options to display in the dropdown
                                                    options={advantages} // Options to display in the dropdown
                                                    // selectedValues={item.advantagesArray} // Preselected value to persist in dropdown
                                                    // onSelect={advantageOnSelect} // Function will trigger on select event
                                                    onSelect={e => advantageOnSelect(e)}
                                                    name="advantagesArray"
                                                    // value={item.advantagesArray}
                                                    // onRemove={this.onRemove} // Function will trigger on remove event
                                                    displayValue="advantage" // Property name to display in the dropdown options
                                                />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Description</CLabel>
                                            <CkEditor onEditorValue={handleDescription} />

                                            {/* <CInputGroup>
                                                <CTextarea
                                                    // component="textarea"
                                                    id="content"
                                                    rows="3"
                                                    onChange={descriptionOnChange} value={description}
                                                ></CTextarea>
                                            </CInputGroup> */}
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xl="8">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Status</CLabel>
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

export default EditInnovationCard
