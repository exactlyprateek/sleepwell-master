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

const AwardManage = () => {
    const [awards, setAward] = useState([])
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertDanger, setShowAlertDanger] = useState(false);
    const [textMessage, setTextMessage] = useState('');

    const jwtToken = sessionStorage.getItem("token");

    // 
    const clickOnDelete = (awardId) => {
        confirmAlert({
            title: 'Are you sure?',
            message: 'You want to delete this item?',
            buttons: [
                {
                    label: 'Yes, Delete it',
                    onClick: () => deleteSize(awardId)
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
    }
    //* call delete api
    const deleteSize = (awardId) => {
        axios.delete(`http://markbran.in/apis/admin/award/${awardId}`, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                setShowAlertSuccess(true);
                setShowAlertDanger(false);
                axiosCategories();
            })
            .catch(function (error) {
                setShowAlertSuccess(false);
                setShowAlertDanger(true);
                setTextMessage(error.response.data.message);

            })
    }

    const axiosCategories = () => {
        axios.get('http://markbran.in/apis/admin/award', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                setAward(response.data.awards);
                // console.log(response.data.awards);
            })
            .catch(function (error) {
                // console.log(error);
                if (error.response && error.response.data.message) {
                    setShowAlertSuccess(false);
                    setShowAlertDanger(true);
                    setTextMessage(error.response.data.message);
                }
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
                        Awards
                        <CLink style={{ float: 'right' }} className="btn btn-success" to="/awards/add-award">
                            Add Award
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
                                    <th scope="col">Name</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">Is Active</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {awards.map((item, index) =>
                                    <tr key={item.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.title}</td>
                                        <td>{item.name}</td>
                                        <td>{dateFormat(item.year, "yyyy")}</td>
                                        <td>{item.status ? 'Enable' : 'Disable'}</td>
                                        <td>
                                            <CLink className="btn btn-sm btn-outline-warning" to={`/awards/edit-award/${item.id}`}>
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

export default AwardManage;
