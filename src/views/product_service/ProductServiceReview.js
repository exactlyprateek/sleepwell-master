import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
    // CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    // CDataTable,
    CRow,
    // CPagination,
    CLink
} from '@coreui/react'
import axios from 'axios'
import dateFormat from 'dateformat'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Switch from "react-switch";

const ProductServiceReview = () => {
    const [reviews, setReviews] = useState([])
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertDanger, setShowAlertDanger] = useState(false);
    const [textMessage, setTextMessage] = useState('');
    const [isActive, setIsActive] = useState(true);

    const jwtToken = sessionStorage.getItem("token");

    const onChangeIsActive = (id,rstatus) => {
        // console.log(id);
        // setIsActive(!isActive);
        updateStatus(id,rstatus);
    }

    // 
    const clickOnDelete = (reviewId) => {
        confirmAlert({
            title: 'Are you sure?',
            message: 'You want to delete this item?',
            buttons: [
                {
                    label: 'Yes, Delete it',
                    onClick: () => deleteSize(reviewId)
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
    }
    //* call delete api
    const deleteSize = (reviewId) => {
        axios.delete(`http://markbran.in/apis/admin/review/${reviewId}`)
            .then(function (response) {
                setShowAlertSuccess(true);
                setShowAlertDanger(false);
                axiosReviews();
            })
            .catch(function (error) {
                setShowAlertSuccess(false);
                setShowAlertDanger(true);
            })
    }
    // * update status
    const updateStatus = (reviewId, rstatus) => {
        const formData = new FormData();
        let status = JSON.parse(rstatus)?1:0 ;
        console.log(status);
        formData.append('status', (!status ? 1 : 0));
        axios.post(`http://markbran.in/apis/admin/review/${reviewId}`, formData, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                // setLoading(false);
                // history.push('/sizes')
                console.log(response);
                // setError(null);
                setShowAlertSuccess(true);
                setShowAlertDanger(false);
                setTextMessage('Review approved!.');

                axiosReviews();
            })
            .catch(error => {
                // console.log(error.response);
                if (error.response && error.response.data.message) {
                    setShowAlertSuccess(false);
                    setShowAlertDanger(true);
                    setTextMessage(error.response.data.message);
                } else {
                    setShowAlertSuccess(false);
                    setShowAlertDanger(true);
                    setTextMessage("Something went wrong, try again!.");
                }
                axiosReviews();
                // setIsActive(isActive);
            });
    }
    const axiosReviews = () => {
        axios.get('http://markbran.in/apis/admin/review', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                console.log(response.data.reviews);
                setReviews(response.data.reviews);
                // setIsActive(response.data.reviews.status?true:false);
                setShowAlertSuccess(false);
                setShowAlertDanger(false);
            })
            .catch(function (error) {
                // console.log(error);
                // console.log(error.response.data.message);
                if (error.response && error.response.data.message) {
                    setShowAlertSuccess(false);
                    setShowAlertDanger(true);
                    setTextMessage(error.response.data.message);
                }
            });
    }
    useEffect(() => {
        axiosReviews();
        if (reviews) {
            setIsActive(reviews.status);
        }
    }, [reviews.status]);
    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        Product/Service Reviews
                        {/* <CLink style={{ float: 'right' }} className="btn btn-success" to="/product-service-review/add">
                            Add
                        </CLink> */}
                    </CCardHeader>
                    <CCardBody>
                        {showAlertSuccess ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Deleted</strong> {textMessage ? textMessage : 'Your item has been deleted successfully.'}
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
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Review</th>
                                    <th scope="col">Approve</th>
                                    <th scope="col">Create at</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((item, index) =>
                                    <tr key={item.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.productName}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <Switch onChange={() => onChangeIsActive(item.id,item.status)} checked={JSON.parse(item.status)?true:false} />
                                        </td>
                                        <td>{dateFormat(item.createdAt, "mmmm dS, yyyy")}</td>
                                        <td>
                                            {/* <CLink className="btn btn-sm btn-outline-warning" to={`/sizes/edit-size/${item.id}`}>
                                                Edit
                                            </CLink> */}
                                            <button onClick={() => clickOnDelete(item.id)} type="button" className="btn btn-sm btn-outline-danger">Delete</button>
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

export default ProductServiceReview;
