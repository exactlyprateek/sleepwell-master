import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    // CDataTable,
    CRow,
    // CPagination,
    CLink
} from '@coreui/react'


const Feedback = () => {
    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        Feedback
                    </CCardHeader>
                    <CCardBody>
                        {/* <CDataTable>

                        </CDataTable> */}
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Message</th>
                                    <th scope="col">Create at</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>user@mail.com</td>
                                    <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed impedit...</td>
                                    <td>{new Date().toLocaleString() + ''}</td>
                                    <td>
                                        <button type="button" className="btn btn-sm btn-outline-success">Reply</button>
                                        <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Adom@mail.com</td>
                                    <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus modi rem perferendis?...</td>
                                    <td>{new Date().toLocaleString() + ''}</td>
                                    <td>
                                        <button type="button" className="btn btn-sm btn-outline-success">Reply</button>
                                        <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Jon@doe.com</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, non. Facere...</td>
                                    <td>{new Date().toLocaleString() + ''}</td>
                                    <td>
                                        <button type="button" className="btn btn-sm btn-outline-success">Reply</button>
                                        <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
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

export default Feedback;
