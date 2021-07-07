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

const GiftList = () => {
    const [categories, setCategories] = useState([])
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertDanger, setShowAlertDanger] = useState(false);
    const jwtToken = sessionStorage.getItem("token");

    // 
    const clickOnDelete = (categoryId) => {
        confirmAlert({
            title: 'Are you sure?',
            message: 'You want to delete this item?',
            buttons: [
                {
                    label: 'Yes, Delete it',
                    onClick: () => deleteCategory(categoryId)
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
    }
    //* call delete api
    const deleteCategory = (categoryId) => {
        // alert(categoryId)
        axios.delete(`http://markbran.in/apis/admin/category/${categoryId}`, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                setShowAlertSuccess(true);
                setShowAlertDanger(false);
                axiosCategories();
                console.log(response);
            })
            .catch(function (error) {
                setShowAlertSuccess(false);
                setShowAlertDanger(true);
                console.log(error);
            })
    }

    const axiosCategories = () => {
        axios.get('http://markbran.in/apis/admin/category', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                // console.log(response.data.categories);
                setCategories(response.data.categories);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    useEffect(() => {
        axiosCategories();
    }, []);
    return(
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        Gift List
            
                        <CLink style={{ float: 'right' }} className="btn btn-success" to="/gift-list/add-gift-card">
                            Add gift
                        </CLink>
                    </CCardHeader>
                    <CCardBody>
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
                                    <th scope="col">Gift title</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Product eligible for gift</th>
                                    <th scope="col">Product added to gift</th>
                                    <th scope="col">Create at</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((item, index) => 
                                    <tr key={item._id}>
                                        <th scope="row">{index+1}</th>
                                        <td>Lorem, ipsum.</td>
                                        <td>Gujarat</td>
                                        <td>product1</td>
                                        <td>product2</td>
                                        <td>{dateFormat(item.createdAt, "mmmm dS, yyyy")}</td>
                                        <td>
                                            <CLink className="btn btn-sm btn-outline-warning" to={`/category-management/edit-category/${item.id}`}>
                                                Edit
                                            </CLink>
                                            <button onClick={() => clickOnDelete(item.id)} type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                ) }
                                
                            </tbody>
                        </table>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>    
    )

}

export default GiftList;
