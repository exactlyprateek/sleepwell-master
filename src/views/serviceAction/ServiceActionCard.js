import React, { useState, useEffect } from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
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
} from '@coreui/react';
import axios from 'axios';
import dateFormat from 'dateformat';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
//       "title": "asdadad",
//       "description": "adsasdadada dadada dad adas dad",
//       "buttonText": "ada",
//       "buttonLink": "http://www.google.com",
//       "image": "uploads/serviceActionCards/ad1-1626080585218.svg",
//       "status": 1,
//       "sortOrder": 1,
const ServiceActionCard = () => {
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertDanger, setShowAlertDanger] = useState(false);
    const jwtToken = sessionStorage.getItem('token');
    const [actionCards, setActionCards] = useState([]);
    //
    const clickOnDelete = (cardId) => {
        confirmAlert({
            title: 'Are you sure?',
            message: 'You want to delete this item?',
            buttons: [
                {
                    label: 'Yes, Delete it',
                    onClick: () => deleteActionCard(cardId)
                },
                {
                    label: 'No'
                    // onClick: () => alert('Click No')
                }
            ]
        });
    };
    //* call delete api
    const deleteActionCard = (cardId) => {
        // alert(categoryId)
        axios
            .delete(`http://markbran.in/apis/admin/service-action-card/` + cardId, {
                headers: {
                    'auth-token': jwtToken //the token is a variable which holds the token
                }
            })
            .then(function (response) {
                setShowAlertSuccess(true);
                setShowAlertDanger(false);
                getActionCards();
                console.log(response);
            })
            .catch(function (error) {
                setShowAlertSuccess(false);
                setShowAlertDanger(true);
                console.log(error);
            });
    };

    const getActionCards = () => {
        axios
            .get('http://markbran.in/apis/admin/service-action-card', {
                headers: {
                    'auth-token': jwtToken //the token is a variable which holds the token
                }
            })
            .then(function (response) {
                console.log(response.data.actionCards);
                setActionCards(response.data.actionCards);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    };
    useEffect(() => {
        getActionCards();
    }, []);
    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        Service Action Card
                        <CLink style={{ float: 'right' }} className="btn btn-success" to="/service-action/add">
                            Add service action card
                        </CLink>
                        {/* <small  className="text-muted"> example</small> */}
                    </CCardHeader>
                    <CCardBody>
                        {showAlertSuccess ? (
                            <div className="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Deleted</strong> Your item has been deleted successfully.
                                <button onClick={() => setShowAlertSuccess(false)} type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        ) : null}
                        {showAlertDanger ? (
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>Alert</strong> Something went wrong try again later !.
                                <button onClick={() => setShowAlertDanger(false)} type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        ) : null}
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Button Text</th>
                                    <th scope="col">Button Link</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Sort Order</th>
                                    <th scope="col">Created</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {actionCards.map((card, index) => (
                                    <tr key={card.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{card.title}</td>
                                        <td>{card.description}</td>
                                        <td>{card.buttonText}</td>
                                        <td>{card.buttonLink}</td>
                                        <td><img
                                            src={`${process.env.REACT_APP_BASE_URL}/${card.image}`}
                                            className="img-fluid"
                                            width="120px"
                                            alt=""
                                        /></td>
                                        <td>{card.status?"Active":"Inactive"}</td>
                                        <td>{card.sortOrder}</td>
                                        <td>{dateFormat(card.createdAt, 'mmmm dS, yyyy')}</td>
                                        <td>
                                            <CLink
                                                className="btn btn-sm btn-outline-warning"
                                                to={`/service-action/edit/${card.id}`}
                                            >
                                                Edit
                                            </CLink>
                                            <button
                                                onClick={() => clickOnDelete(card.id)}
                                                type="button"
                                                className="btn btn-sm btn-outline-danger"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
};

export default ServiceActionCard;
