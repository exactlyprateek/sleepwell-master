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
    CLink,
    CInputFile,
    CInputGroup,
    CLabel,
    CRow,
    CTextarea,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Multiselect } from 'multiselect-react-dropdown';
import Switch from "react-switch";

import CkEditor from '../../components/CkEditor5.js';
const axios = require('axios').default;

const schema = yup.object().shape({
    sectionTitle: yup.string().required(),
});


const AddInnovation = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [innovationImage, setInnovationImage] = useState('');
    const [description, setDescription] = useState('');
    const [sectionDescription, setSectionDescription] = useState('');
    const [advantages, setAdvantages] = useState([]);
    const [inputList, setInputList] = useState([{ advantagesArray: [], status: true  }]);
    const [showInHome, setShowInHome] = useState(false);
    const [advantagesArray, setAdvantagesArray] = useState([]);
    const [isActive, setIsActive] = useState(true);
    let jwtToken = sessionStorage.getItem("token");

    
    const advantageOnSelect = (value) => {
        setAdvantagesArray(value)
        // const list = [...inputList];
        // list[index]['advantagesArray'] = value;
        // setInputList(list);
    }

    const onChangeIsActive = (value) => {
        setIsActive(value);
        // const list = [...inputList];
        // list[index]['status'] = value;
        // setInputList(list);
    }

    const handleDescription = (data) => {
        // console.log(data)
        setDescription(data);
    }
    const handleShowInHomeOnchange = (data) => {
        // console.log(data)
        setShowInHome(data);
    }
    
    //* change dynamic input fields   
    const handleChange = (e, index) => {
        const {name, value, files} = e.target;
        console.log(value);
        const list = [...inputList];
        list[index][name] = files ? files[0] : value;
        setInputList(list);
    }

    //* Add dynamic input fields
    const handleAddInput = () => {
        setInputList([...inputList, { advantagesArray: [], status: true }]);
        // setInputList([...inputList, { sectionHeading: "", sectionImage: "", sectionDescription: "", advantagesArray: []}]);
    }

    //* remove dynamic input fields
    const handleRemoveInputs = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }
    
    //* description
    const descriptionOnChange = (e) => {
        setSectionDescription(e.target.value);
    }

    //* image
    const imageOnChange = (e) => {
        setInnovationImage(e.target.files[0]);
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
                // const list = [...inputList];
                // list[0]['advantagesArray'] = response.data.advantages;
                // setInputList(list);
            })
            .catch(function (error) {
                // console.log(error);
                if (error.response && error.response.data.message) {
                    setError(error.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            });
    }
    useEffect(() => {
        axiosAdvantages();
        
    }, []);

    const onHandlerSubmit = (e) => {
        const formData = new FormData();
        // formData.append('innovationData', innovationArray);
        let status = isActive ? 1 : 0;
        let homeCheckbox = showInHome ? 1 :  0; 
        formData.append('status', status);
        formData.append('title', e.sectionTitle);
        formData.append('image', innovationImage);
        formData.append('advantages', advantagesArray);
        formData.append('description', description);
        formData.append('showInHome', homeCheckbox);
        // formData.append('isFeatured', isFeatured);
        // formData.append('sectionSubTitle', e.sectionSubTitle);
        // formData.append('rightDescription', e.rightDescription);


        setError(null);
        setLoading(true)

        axios.post('http://markbran.in/apis/admin/innovation/card', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'auth-token': jwtToken
            }
        })
            .then(res => {
                setLoading(false);
                // setUserSession(response.data.token, response.data.user);
                history.push('/innovation-card')
                console.log(res.response.data);
            })
            .catch(err => {
                // console.log(err.response.data.message);
                setLoading(false);
                if (err.response && err.response.data.message) {
                    setError(err.response.data.message);
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
                            Add Innovation
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
                                        {/* <CkEditor /> */}
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Section Title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="sectionTitle"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Section title is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Section title" autoComplete="Section title" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.sectionTitle && errors.sectionTitle.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CLabel htmlFor="category">Image</CLabel>
                                        <CInputGroup className="mb-3">
                                            <CLabel htmlFor="Image" variant="custom-file">
                                                Choose image...
                                            </CLabel>
                                            <CInputFile onChange={imageOnChange} custom id="Image" type="file" multiple="true" />
                                        </CInputGroup>
                                    </CCol>
                                    {/* <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Section sub title</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="sectionSubTitle"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Sub title is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Technology name" autoComplete="Technology name" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.sectionSubTitle && errors.sectionSubTitle.message}</CFormText>
                                        </CFormGroup>
                                    </CCol> */}
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
                                            {/* <CFormText className="help-block text-danger" color="red">{errors.description && errors.description.message}</CFormText> */}
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                {/* handleShowInHomeOnchange */}
                                <CRow>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="is_active">Status</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={e => onChangeIsActive(e)} checked={isActive} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xl="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="is_active">Show in home</CLabel>
                                            <CInputGroup>
                                                <Switch onChange={handleShowInHomeOnchange} checked={showInHome} />
                                            </CInputGroup>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                {/* <CRow>
                                    <CCol xs="12" className="my-4">
                                        <hr />
                                        <h2>advantage section</h2>
                                    </CCol>
                                </CRow> */}
                                {/* {inputList.map((item, index) => {
                                    return (
                                        <CRow key={index}>
                                            
                                            <CCol xs="6">
                                                <CFormGroup>
                                                    <CLabel htmlFor="category">Select advantages</CLabel>
                                                    <CInputGroup className="mb-3">
                                                        <Multiselect
                                                            // options={item.advantagesArray} // Options to display in the dropdown
                                                            options={advantages} // Options to display in the dropdown
                                                            selectedValues={item.advantagesArray} // Preselected value to persist in dropdown
                                                            // onSelect={advantageOnSelect} // Function will trigger on select event
                                                            onSelect={e => advantageOnSelect(e, index)}
                                                            name="advantagesArray"
                                                            // value={item.advantagesArray}
                                                            // onRemove={this.onRemove} // Function will trigger on remove event
                                                            displayValue="advantage" // Property name to display in the dropdown options
                                                        />
                                                    </CInputGroup>
                                                    <CFormText className="help-block text-danger" color="red">{errors.productId && errors.productId.message}</CFormText>
                                                </CFormGroup>
                                            </CCol>
                                            {inputList.length !== 1 && <CCol xs="1" className="mb-auto mt-auto">
                                                <div >
                                                    <button onClick={() => handleRemoveInputs(index)} className="btn btn-danger" type="button">Remove</button>
                                                </div>
                                            </CCol>}
                                            {inputList.length - 1 === index && <CCol xs="1" className="mb-auto mt-auto">
                                                <div >
                                                    <button onClick={handleAddInput} className="btn btn-success" type="button">Add</button>
                                                </div>
                                            </CCol>}
                                            <CCol xl="6">
                                                <CFormGroup>
                                                    <CLabel htmlFor="is_active">Status</CLabel>
                                                    <CInputGroup>
                                                        <Switch onChange={e => onChangeIsActive(e, index)} checked={item.status} />
                                                    </CInputGroup>
                                                </CFormGroup>
                                            </CCol>
                                        </CRow>
                                    )
                                })} */}
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add Innovation'}</button>
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

export default AddInnovation
