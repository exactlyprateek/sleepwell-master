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


const About = () => {
    const [banners, setBanners] = useState([]);
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertDanger, setShowAlertDanger] = useState(false);
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
        axios.get('/banner/')
            .then(function (response) {
                setBanners(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
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
                        <CLink style={{ float: 'right' }} className="btn btn-success" to="/about-us/add-about-us">
                            Add Content
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
                            <strong>Alert</strong> Something went wrong try again later !.
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> : null}

                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Sort Order</th>
                                    <th scope="col">Create at</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {var count = 1} */}
                                {/* {setCount(+1)} */}
                                {banners.map((item, index) =>
                                    // {console.log(index)}
                                    <tr key={item._id}>
                                        <th scope="row">{index + 1}</th>
                                        <th>lorem ipsum</th>
                                        {/* <td><img src={`${window.location.origin}/images/banners/${item.bannerImage}`} className="img-fluid" width="120px" alt="" /></td> */}
                                        <td>{item.shortOrder}</td>
                                        <td>{dateFormat(item.date, "mmmm dS, yyyy")}</td>
                                        <td>
                                            {/* <button type="button"  className="btn btn-sm btn-outline-warning">Edit</button> */}
                                            <CLink className="btn btn-sm btn-outline-warning" to={`/edit-banner/${item._id}`}>
                                                Edit
                                            </CLink>
                                            <button type="button" onClick={() => clickOnDelete(item._id)} className="btn btn-sm btn-outline-danger">Delete</button>
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

export default About;
