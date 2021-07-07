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
    CLink,
    CSwitch,
    CSelect,
    CLabel
} from '@coreui/react'
import { Multiselect } from 'multiselect-react-dropdown';



const Permission = () => {
    const [user, setUser] = useState('');
    const [sections, setSections] = useState('');

    // const [sections, setSections] = useState('');
    const [sectionsList, setSectionsList] = useState([{ title: 'Home management', id: 1 }, { title: 'Content management', id: 2 }]);

    const onChangeSections = (e) => {
        setSections(e);
    }
    const onChangeUser = (e) => {
        setUser(e.target.value);
    }
 
    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        Permission
                        <CLink style={{ float: 'right' }} className="btn btn-success" to="/permission/add">
                            Add Permission
                        </CLink>
                    </CCardHeader>
                    <CCardBody>
                        {/* <CDataTable>

                        </CDataTable> */}
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Users</th>
                                    <th scope="col">Create</th>
                                    <th scope="col">View</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                    <th scope="col" width="50%">Sections</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        User
                                    </th>
                                    <td>
                                        <CSwitch
                                            key={1}
                                            color="success"
                                        // checked
                                        // value={isFeatured}
                                        // {...x}
                                        />
                                    </td>
                                    <td>
                                        <CSwitch
                                            key={1}
                                            color="success"
                                        // checked
                                        // value={isFeatured}
                                        // {...x}
                                        />
                                    </td>
                                    <td>
                                        <CSwitch
                                            key={1}
                                            color="success"
                                        // checked
                                        // value={isFeatured}
                                        // {...x}
                                        />
                                    </td>
                                    <td>
                                        <CSwitch
                                            key={1}
                                            color="success"
                                        // checked
                                        // value={isFeatured}
                                        // {...x}
                                        />
                                    </td>
                                    <td width="50%">
                                        <CFormGroup>
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
                                    </td>
                                    <td>
                                        <button className="btn btn-success" type="submit">Change Permision</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )

}

export default Permission;
