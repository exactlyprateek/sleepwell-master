import React, { useState, useEffect } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import {
	CBadge,
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CDataTable,
	CRow,
	CPagination,
	CLink,
	CButton
} from '@coreui/react';
import axios from 'axios';

// import usersData from '../users/UsersData'
import productsData from './ProductsData';

const Products = () => {
	const history = useHistory();
	const queryPage = useLocation().search.match(/page=([0-9]+)/, '');
	const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
	const [ page, setPage ] = useState(currentPage);
	const [ products, setProducts ] = useState([]);

	const [ productId, setProductId ] = useState(null);
	const [ showAlertSuccess, setShowAlertSuccess ] = useState(false);
	const [ showAlertDanger, setShowAlertDanger ] = useState(false);
	const [ textMessage, setTextMessage ] = useState('');

	const jwtToken = sessionStorage.getItem('token');

	const pageChange = (newPage) => {
		currentPage !== newPage && history.push(`/products?page=${newPage}`);
	};
	const handleEdit = (id) => {
		setProductId(id);
	};
	const axiosProducts = () => {
		axios
			.get('http://markbran.in/apis/admin/products', {
				headers: {
					'auth-token': jwtToken //the token is a variable which holds the token
				}
			})
			.then(function(response) {
				console.log(response.data.products);
				// let prods = response.data.products.map((i) => {
				// 	return {
				// 		...i,
				// 		action: () => {return <CButton onClick={() => handleEdit(i.id)} size="sm" className="btn btn-warning" />}
				// 	};
				// });
				setProducts(response.data.products);
			})
			.catch(function(error) {
				if (error.response && error.response.data.message) {
					setShowAlertSuccess(false);
					setShowAlertDanger(true);
					setTextMessage(error.response.data.message);
				}
			});
	};
	useEffect(
		() => {
			axiosProducts();
			currentPage !== page && setPage(currentPage);
		},
		[ currentPage, page ]
	);

	const getBadge = (status) => {
		switch (status) {
			case 'Active':
				return 'success';
			case 'Inactive':
				return 'secondary';
			case 'Pending':
				return 'warning';
			case 'Banned':
				return 'danger';
			default:
				return 'primary';
		}
	};
	if (productId) {
		return <Redirect to={`/edit-product/${productId}`} />;
	}
	return (
		<CRow>
			<CCol xl={12}>
				<CCard>
					<CCardHeader>
						Products
						<CLink className="btn btn-success" style={{ float: 'right' }} to="/add-product">
							Add Product
						</CLink>
						{/* <small  className="text-muted"> example</small> */}
					</CCardHeader>
					<CCardBody>
						{showAlertSuccess ? (
							<div className="alert alert-success alert-dismissible fade show" role="alert">
								<strong>Deleted</strong> Your item has been deleted successfully.
								<button type="button" className="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						) : null}
						{showAlertDanger ? (
							<div className="alert alert-warning alert-dismissible fade show" role="alert">
								<strong>Alert </strong>{' '}
								{textMessage ? textMessage : 'Something went wrong try again later !.'}
								<button type="button" className="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						) : null}

						<table className="table table-hover">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Title</th>
								</tr>
							</thead>
							<tbody>
								{products.map((item, index) => (
									<tr key={item.id}>
										<th scope="row">{index + 1}</th>
										<td>{item.title}</td>
										<td>
											<CLink
												className="btn btn-sm btn-outline-warning"
												to={`/edit-product/${item.id}`}
											>
												Edit
											</CLink>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						{/* <CDataTable
							items={products}
							// items={productsData}
							fields={[
								{ key: 'productName', _classes: 'font-weight-bold' },
								'category',
								'subCategory',
								'subSubCategory',
								'action'
							]}
							hover
							striped
							itemsPerPage={5}
							activePage={page}
							clickableRows
							// onRowClick={(item) => history.push(`/users/${item.id}`)}
							scopedSlots={{
								status: (item) => (
									<td>
										<CBadge color={getBadge(item.status)}>{item.status}</CBadge>
									</td>
								)
							}}
						/> */}
						<CPagination
							activePage={page}
							onActivePageChange={pageChange}
							pages={products.length / 5}
							// pages={products.length}
							doubleArrows={false}
							align="center"
						/>
					</CCardBody>
				</CCard>
			</CCol>
		</CRow>
	);
};

export default Products;
