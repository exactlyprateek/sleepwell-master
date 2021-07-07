import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
    CFormGroup,
    CInputGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CForm,
    CSwitch,
    CSelect,
    CLabel,
    CFormText,
} from '@coreui/react'
import { Multiselect } from 'multiselect-react-dropdown';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';

const schema = yup.object().shape({
    user: yup.string().required(),
});


const AddPermision = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm({ mode: 'all', resolver: yupResolver(schema) });

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState('');
    const [sections, setSections] = useState('');
    const [sectionsList, setSectionsList] = useState([{ title: 'Home management', id: 1 }, { title: 'Content management', id: 2 }]);

    const onChangeUser = (e) => {
        setUser(e.target.value);
    }
    const onChangeSections = (e) => {
        setSections(e);
    }
    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        Permision
                    </CCardHeader>
                    <CCardBody>
                        {/* <CDataTable>

                        </CDataTable> */}
                        <CForm>
                            <CRow>
                                <CCol xs="12" md="6">
                                    <CFormGroup>
                                        <CLabel htmlFor="category">Title</CLabel>
                                        <CInputGroup className="mb-3">
                                            <Controller
                                                name="user"
                                                control={control}
                                                defaultValue={''}
                                                rules={{
                                                    required: {
                                                        value: true,
                                                        message: "title is required"
                                                    },
                                                }}
                                                render={({ field }) => <CSelect {...field}>
                                                    <option value="">
                                                        Select user
                                                    </option>
                                                    <option value={1}>
                                                        admin
                                                    </option>
                                                    <option value={1}>
                                                        user
                                                    </option>

                                                </CSelect>}
                                            />
                                        </CInputGroup>
                                        <CFormText className="help-block text-danger" color="red">{errors.user && errors.user.message}</CFormText>
                                    </CFormGroup>
                                </CCol>
                                <CCol xs="12" md="6">
                                    <CFormGroup>
                                        <CLabel htmlFor="category">Sections</CLabel>
                                        <CInputGroup className="mb-3">
                                            <Multiselect
                                                options={sectionsList} // Options to display in the dropdown
                                                // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                onSelect={onChangeSections} // Function will trigger on select event
                                                // onRemove={this.onRemove} // Function will trigger on remove event
                                                displayValue="title" // Property name to display in the dropdown options
                                            />
                                        </CInputGroup>
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol md="3">
                                    <CFormGroup>
                                            <CLabel htmlFor="category">Create</CLabel>
                                        <CInputGroup>
                                            <CSwitch
                                                key={1}
                                                color="success"
                                            />
                                        </CInputGroup>
                                    </CFormGroup>
                                </CCol>
                                <CCol md="3">
                                    <CFormGroup>
                                            <CLabel htmlFor="category">View</CLabel>
                                        <CInputGroup>
                                            <CSwitch
                                                key={1}
                                                color="success"
                                            />
                                        </CInputGroup>
                                    </CFormGroup>
                                </CCol>
                                <CCol md="3">
                                    <CFormGroup>
                                            <CLabel htmlFor="category">Update</CLabel>
                                        <CInputGroup>
                                            <CSwitch
                                                key={1}
                                                color="success"
                                            />
                                        </CInputGroup>
                                    </CFormGroup>
                                </CCol>
                                <CCol md="3">
                                    <CFormGroup>
                                            <CLabel htmlFor="category">Delete</CLabel>
                                        <CInputGroup>
                                            <CSwitch
                                                key={1}
                                                color="success"
                                            />
                                        </CInputGroup>
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="8" className="my-4">
                                    <button className="btn btn-success" disabled={loading ? true : false} type="submit">{loading ? 'Loading...' : 'Add permission'}</button>
                                </CCol>
                            </CRow>
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )

}

export default AddPermision;
