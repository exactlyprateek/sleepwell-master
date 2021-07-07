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

const token = sessionStorage.getItem('token');

const SubSubCategories = () => {
    const [subCategories, setSubCategories] = useState([]);
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertDanger, setShowAlertDanger] = useState(false);

    const clickOnDelete = (subSubCateId) => {
        confirmAlert({
            title: 'Are you sure?',
            message: 'You want to delete this item?',
            buttons: [
                {
                    label: 'Yes, Delete it',
                    onClick: () => deleteSubCategory(subSubCateId)
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
    }
    //* call delete api
    const deleteSubCategory = (subSubCategoryId) => {
        // alert(subSubCategoryId)
        axios.delete(`http://markbran.in/apis/admin/subSubCategory/${subSubCategoryId}`, {
            headers: {
                "auth-token": token //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                setShowAlertSuccess(true);
                setShowAlertDanger(false);
                axiosSubCategories();
            })
            .catch(function (error) {
                setShowAlertSuccess(false);
                setShowAlertDanger(true);
            })
    }

    const axiosSubCategories = () => {
        axios.get('http://markbran.in/apis/admin/subSubCategory', {
            headers: {
                "auth-token": token //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                console.log(response.data.subSubCategories);
                setSubCategories(response.data.subSubCategories);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    useEffect(() => {
        axiosSubCategories();
    }, []);

    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        Sub Sub Categories
                        <CLink style={{ float: 'right' }} className="btn btn-success" to="/sub-sub-category/add">
                            Add Sub Sub Category
                        </CLink>
                        {/* <small  className="text-muted"> example</small> */}
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
                                    <th scope="col">Sub Sub Category</th>
                                    <th scope="col">Sub Category</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Create at</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subCategories.map((item, index) =>
                                    <tr key={item.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.title}</td>
                                        <td>{item.subCategory}</td>
                                        <td>{item.category}</td>
                                        <td>{dateFormat(item.createdAt, "mmmm dS, yyyy")}</td>
                                        <td>
                                            <CLink className="btn btn-sm btn-outline-warning" to={`/sub-sub-category/edit/${item.id}`}>
                                                Edit
                                            </CLink>
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

export default SubSubCategories;
