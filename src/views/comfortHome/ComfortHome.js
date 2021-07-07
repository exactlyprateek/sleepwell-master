import React, { useState, useEffect, Fragment } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import dateFormat from 'dateformat';

import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CPagination,
    CLink
} from '@coreui/react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
const axios = require('axios').default;
require('dotenv').config();


const ComfortHome = () => {
    const [comforts, setComforts] = useState([]);
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertDanger, setShowAlertDanger] = useState(false);
    const [messageText, setMessageText] = useState(null);
    const jwtToken = sessionStorage.getItem("token");


    const clickOnDelete = (comfortId) => {
        confirmAlert({
            title: 'Are you sure?',
            message: 'You want to delete this item?',
            buttons: [
                {
                    label: 'Yes, Delete it',
                    onClick: () => deleteComfort(comfortId)
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
    }

    //* call delete api
    const deleteComfort = (comfortId) => {
        // alert(comfortId)
        axios.delete(`http://markbran.in/apis/admin/comfort/${comfortId}`, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (e) {
                // console.log(response);
                comfortAxios();
                setShowAlertSuccess(true);
                setShowAlertDanger(false);
                // if (e.response && e.response.data.message) setMessageText(e.response.data.message)

            })
            .catch(function (e) {
                setShowAlertSuccess(false);
                setShowAlertDanger(true);
                if (e.response && e.response.data.message) setMessageText(e.response.data.message)
            })
    }

    //* get banner data
    const comfortAxios = () => {
        axios.get('http://markbran.in/apis/admin/comfort', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (e) {
                console.log(e.data.comforts);
                setComforts(e.data.comforts);
                // setShowAlertSuccess(false);
                // setShowAlertDanger(false);
            })
            .catch(function (error) {
                setShowAlertSuccess(false);
                setShowAlertDanger(true);
            });
    }
    useEffect(() => {
        comfortAxios();
    }, [])

    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        Comforts
                        <CLink style={{ float: 'right' }} className="btn btn-success" to="/comfort-home/add">
                            Add comfort home
                        </CLink>
                        {/* <small  className="text-muted"> example</small> */}
                    </CCardHeader>
                    <CCardBody>
                        {/* <CDataTable>

                        </CDataTable> */}
                        {showAlertSuccess ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Deleted</strong> Your item has been deleted successfully.
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> : null}
                        {showAlertDanger ? <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Alert </strong>
                            {messageText}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> : null}

                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Create at</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comforts.map((item, index) =>
                                    // {console.log(index)}
                                    <tr key={item.id}>
                                        <th scope="row">{index + 1}</th>
                                        <th scope="row">
                                            <img src={process.env.REACT_APP_BASE_URL + item.image} className="img-fluid" width="120px" alt="" />
                                        </th>
                                        <th scope="row">{item.title}</th>
                                        <th scope="row">{item.description}</th>
                                        <td>{dateFormat(item.createdAt, "mmmm dS, yyyy")}</td>
                                        <td>
                                            {/* <button type="button"  className="btn btn-sm btn-outline-warning">Edit</button> */}
                                            <CLink className="btn btn-sm btn-outline-warning" to={`/comfort-home/edit/${item.id}`}>
                                                Edit
                                            </CLink>
                                            <button type="button" onClick={() => clickOnDelete(item.id)} className="btn btn-sm btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )

}

export default ComfortHome;
