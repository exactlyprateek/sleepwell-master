import React, { useState, useEffect, Fragment } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import dateFormat from 'dateformat';

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
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
const axios = require('axios').default;
require('dotenv').config();


const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertDanger, setShowAlertDanger] = useState(false);
    const [textMessage, setTextMessage] = useState('');


    const jwtToken = sessionStorage.getItem("token");


    const clickOnDelete = (blogId) => {
        confirmAlert({
            title: 'Are you sure?',
            message: 'You want to delete this item?',
            buttons: [
                {
                    label: 'Yes, Delete it',
                    onClick: () => deleteBanner(blogId)
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
    }

    //* call delete api
    const deleteBanner = (blogId) => {
        axios.delete(`http://markbran.in/apis/admin/blog/${blogId}`, {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                // console.log(response);
                setShowAlertSuccess(true);
                setShowAlertDanger(false);
                bloAxios();
            })
            .catch(function (error) {
                // console.log(error);
                setShowAlertSuccess(false);
                setShowAlertDanger(true);
                setTextMessage(error.response.data.message);

            })
    }

    //* get blog data
    const bloAxios = () => {
        axios.get('http://markbran.in/apis/admin/blog', {
            headers: {
                "auth-token": jwtToken //the token is a variable which holds the token
            }
        })
            .then(function (response) {
                setBlogs(response.data.blogs);
                console.log(response.data.blogs);
            })
            .catch(function (error) {
                // handle error
                if (error.response && error.response.data.message) {
                    setShowAlertSuccess(false);
                    setShowAlertDanger(true);
                    setTextMessage(error.response.data.message);
                }
            });
    }
    useEffect(() => {
        bloAxios();
    }, [])

    const MainData = () => {
        if (blogs.length > 0) {
            return (

                blogs.map((item, index) =>
                    // {console.log(index)}
                    <tr key={item.id}>
                        <th scope="row">{index + 1}</th>
                        <td><img src={`${process.env.REACT_APP_BASE_URL}${item.image}`} className="img-fluid" width="120px" alt="" /></td>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td>{dateFormat(item.createdAt, "mmmm dS, yyyy")}</td>
                        <td>
                            <CLink className="btn btn-sm btn-outline-warning" to={`/edit-blog/${item.id}`}>
                                Edit
                            </CLink>
                            <button type="button" onClick={() => clickOnDelete(item.id)} className="btn btn-sm btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                )
            )
        } else {
            return (
                <tr>
                    <td colSpan="6" style={{textAlign: 'center'}}>No record available</td>
                </tr>
            )
        }
    }
    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        Blogs
                        <CLink style={{ float: 'right' }} className="btn btn-success" to="/add-blog">
                            Add Blog
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
                            <strong>Alert </strong> {textMessage ? textMessage : 'Something went wrong try again later !.'}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> : null}

                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Blog</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Create at</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {if(blogs.length)} */}
                                <MainData />
                            </tbody>
                        </table>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )

}

export default Blog;
