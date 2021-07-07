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


const AboutBanner = () => {
    const [banner, setBanner] = useState([]);
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertDanger, setShowAlertDanger] = useState(false);
    const [textMessage, setTextMessage] = useState('');

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
        axios.delete(`http://markbran.in/apis/admin/aboutUsBanner${bannerId}`)
            .then(function (response) {
                // console.log(response);
                setShowAlertSuccess(true);
                setShowAlertDanger(false);
                bannerAxios();
            })
            .catch(function (error) {
                // console.log(error);
                setShowAlertSuccess(false);
                setShowAlertDanger(true);
            })
    }

    //* get banner data
    const bannerAxios = () => {
        axios.get('http://markbran.in/apis/admin/aboutUsBanner', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                setBanner(response.data.banner);
                // console.log(response.data.banner);
            })
            .catch(function (error) {
                if (error.response && error.response.data.message) {
                    setShowAlertSuccess(false);
                    setShowAlertDanger(true);
                    setTextMessage(error.response.data.message);
                }
            });
    }
    useEffect(() => {
        bannerAxios();
    }, [])

    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        About Us
                        {/* <CLink style={{ float: 'right' }} className="btn btn-success" to="/about-us-banner/add">
                            Add Content
                        </CLink> */}
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
                            <strong>Alert </strong> {textMessage ? textMessage : 'Something went wrong try again later !.'}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> : null}

                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Create at</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={banner.id}>
                                    <th>{banner.title}</th>
                                    <td><img src={`${process.env.REACT_APP_BASE_URL}${banner.image}`} className="img-fluid" width="120px" alt="" /></td>
                                    <td>{banner.description}</td>
                                    <td>{dateFormat(banner.createdAt, "mmmm dS, yyyy")}</td>
                                    <td>
                                        <CLink className="btn btn-sm btn-outline-warning" to={`/about-us-banner/edit/${banner.id}`}>
                                            Edit
                                        </CLink>
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

export default AboutBanner;
