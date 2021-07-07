import React, { useState, Fragment } from 'react'
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
    CLabel,
    CRow,
    CSelect,
    // CSwitch,
    CTextarea
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
const axios = require('axios').default;


const AddUser = () => {
    const { control, handleSubmit, register, formState: { errors } } = useForm({ mode: 'all' });
    let history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // const [categoryId, setCategoryId] = React.useState("");
    // const [isFeatured, setIsFeatured] = React.useState(0);
    // let x =  1;

    const onHandlerSubmit = (value) => {
        console.log('value', value);
        setError(null);
        setLoading(true)
    }
    console.log(errors);
    return (
        <Fragment>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add User
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
                                            <CLabel htmlFor="category">First Name</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="firstname"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "First Name is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="First Name" autoComplete="First Name" />}
                                                />
                                                
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.firstname && errors.firstname.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Last Name</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="lastname"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Last Name is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Last Name" autoComplete="Last Name" />}
                                                />
                                                
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.lastname && errors.lastname.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">City</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="city"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "City is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="City" autoComplete="City" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.city && errors.city.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Mobile No.</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="mobile"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Mobile is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Mobile No." autoComplete="Mobile" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.mobile && errors.mobile.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">State</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="state"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "State is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="State" autoComplete="State" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.state && errors.state.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Email</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="email"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Email is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Email" autoComplete="Email" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.email && errors.email.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Country</CLabel>
                                            <CInputGroup className="mb-3">
                                                <Controller
                                                    name="country"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Country is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInput {...field} type="text" placeholder="Country" autoComplete="Country" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.country && errors.country.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Select Profile Picture</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CLabel htmlFor="profilePictur" variant="custom-file">
                                                    Choose Image...
                                                </CLabel>
                                                <Controller
                                                    name="profilePicture"
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{
                                                        required: {
                                                            value: true,
                                                            message: "Profile Picture is required"
                                                        },
                                                    }}
                                                    render={({ field }) => <CInputFile custom id="profilePictur" type="file" />}
                                                />
                                            </CInputGroup>
                                            <CFormText className="help-block text-danger" color="red">{errors.profilePicture && errors.profilePicture.message}</CFormText>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">Address</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CTextarea
                                                    // component="textarea"
                                                    id="content"
                                                    rows="3"
                                                // onChange={contentOnChange} value={content}
                                                ></CTextarea>
                                            </CInputGroup>
                                            {/* <CFormText className="help-block text-danger" color="red">{errors.categoryId && errors.categoryId.message}</CFormText> */}
                                        </CFormGroup>
                                        
                                    </CCol>
                                    <CCol xs="6">
                                        <CFormGroup>
                                            <CLabel htmlFor="category">User Role</CLabel>
                                            <CInputGroup className="mb-3">
                                                <CSelect custom name="selectLg" id="selectLg">
                                                    <option value="0">Please select</option>
                                                    <option value="1">Admin</option>
                                                    <option value="2">Vendor</option>
                                                </CSelect>
                                            </CInputGroup>
                                            {/* <CFormText className="help-block text-danger" color="red">{errors.categoryId && errors.categoryId.message}</CFormText> */}
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol xs="8">
                                        <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add User'}</button>
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

export default AddUser
