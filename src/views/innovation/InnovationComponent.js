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
import AddInnovationComponent from './AddInnovationComponent.js';
const InnovationComponent = () => {
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
    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        Innovation
                    </CCardHeader>
                    {/* <CCard>
                        <CCardBody>
                        </CCardBody>
                    </CCard> */}
                    <AddInnovationComponent />
                    
                </CCard>
            </CCol>
        </CRow>
    )

}

export default InnovationComponent;
