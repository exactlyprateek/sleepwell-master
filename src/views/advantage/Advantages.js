import React, { useState, useEffect, Fragment } from 'react'
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

const Advantages = () => {
    const [advantages, setAdvantages] = useState([])
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertDanger, setShowAlertDanger] = useState(false);
    const [textMessage, setTextMessage] = useState('');

    const jwtToken = sessionStorage.getItem("token");


    // 
    const clickOnDelete = (advantageId) => {
        confirmAlert({
            title: 'Are you sure?',
            message: 'You want to delete this item?',
            buttons: [
                {
                    label: 'Yes, Delete it',
                    onClick: () => deleteAdvantage(advantageId)
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
    }
    //* call delete api
    const deleteAdvantage = (advantageId) => {
        axios.delete(`http://markbran.in/apis/admin/advantage/${advantageId}`, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                setShowAlertSuccess(true);
                setShowAlertDanger(false);
                axiosAdvantages();
            })
            .catch(function (error) {
                setShowAlertSuccess(false);
                setShowAlertDanger(true);
                if (error.response && error.response.data.message) setTextMessage(error.response.data.message)
            })
    }

    const axiosAdvantages = () => {
        axios.get('http://markbran.in/apis/admin/advantage', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                console.log(response.data);
                setAdvantages(response.data.advantages);
            })
            .catch(function (error) {
                console.log(error);
                if(error.response && error.response.data.message) {
                    setShowAlertSuccess(false);
                    setShowAlertDanger(true);
                    setTextMessage(error.response.data.message);
                }
            });
    }
    useEffect(() => {
        axiosAdvantages();
    }, []);
    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        Advantage
                        <CLink style={{ float: 'right' }} className="btn btn-success" to="/advantages/add-advantages">
                            Add Advantage
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
                            <strong>Alert</strong> {textMessage ? textMessage : 'Something went wrong try again later !.'}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> : null}
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Advantage</th>
                                    <th scope="col">Icon</th>
                                    <th scope="col">Is Active</th>
                                    <th scope="col">Create at</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {advantages.map((item, index) =>
                                    <tr key={item.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.advantage}</td>
                                        <td><img src={`${process.env.REACT_APP_BASE_URL}${item.icon}`} className="img-fluid" width="120px" alt="" /></td>
                                        <td>{item.status ? 'Enable' : 'disable'}</td>
                                        <td>{dateFormat(item.date, "mmmm dS, yyyy")}</td>
                                        <td>
                                            <CLink className="btn btn-sm btn-outline-warning" to={`/advantages/edit-advantages/${item.id}`}>
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

export default Advantages;
