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


const AboutGoingGreen = () => {
    const [goingGreen, setGoingGreen] = useState('');
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertDanger, setShowAlertDanger] = useState(false);
    const [textMessage, setTextMessage] = useState('');
    const [goingGreenObj, setGoingGreenObj] = useState({});

    const jwtToken = sessionStorage.getItem("token");

    
    const clickOnDelete = (bannerId) => {
        confirmAlert({
            title: 'Are you sure?',
            message: 'You want to delete this item?',
            buttons: [
                {
                    label: 'Yes, Delete it',
                    onClick: () => deleteBanner(bannerId)
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
    }

    //* call delete api
    const deleteBanner = (bannerId) => {
        // alert(bannerId)
        axios.delete(`/banner/${bannerId}`)
            .then(function (response) {
                // console.log(response);
                setShowAlertSuccess(true);
                setShowAlertDanger(false);
                goingGreenAxios();
            })
            .catch(function (error) {
                // console.log(error);
                setShowAlertSuccess(false);
                setShowAlertDanger(true);
            })
    }

    //* get banner data
    const goingGreenAxios = () => {
        axios.get('http://markbran.in/apis/admin/goingGreen', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                console.log(response.data.goingGreen);
                setGoingGreen(response.data.goingGreen);
            })
            .catch(function (error) {
                // handle error
                // console.log(error);
                if (error.response && error.response.data.message) {
                    setShowAlertSuccess(false);
                    setShowAlertDanger(true);
                    setTextMessage(error.response.data.message);
                }
            });
    }
    useEffect(() => {
        goingGreenAxios();
        // if (goingGreen) {
        //     setGoingGreenObj(goingGreen)
        // }
    }, [])

    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        About us going green
                        <CLink style={{ float: 'right' }} className="btn btn-success" to="/about-us-going-green/add">
                            Add
                        </CLink>
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
                            <strong>Alert </strong> {textMessage ? textMessage : 'Something went wrong try again later !.'}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> : null}

                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    {/* <th scope="col">#</th> */}
                                    <th scope="col" width="15%">Title</th>
                                    <th scope="col">Image</th>
                                    <th scope="col" width="50%">Description</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Create at</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={goingGreen.id}>
                                    <td width="15%">{goingGreen.title}</td>
                                    <td><img src={process.env.REACT_APP_BASE_URL + goingGreen.image} width="110px" alt="" /></td>
                                    <td width="50%">{goingGreen.description}</td>
                                    <td>{goingGreen.status ? 'Enable' : 'Disable'}</td>
                                    <td>{dateFormat(goingGreen.createAt, "mmmm dS, yyyy")}</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )

}

export default AboutGoingGreen;
