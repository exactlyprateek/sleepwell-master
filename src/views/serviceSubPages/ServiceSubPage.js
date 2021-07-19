import {
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CContainer,
	CHeader,
	CInput,
	CInputFile,
	CInputGroup,
	CLabel,
	CLink,
	CRow
} from '@coreui/react';
import { FormLabel } from '@material-ui/core';
import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function ServiceSubPage() {
	const [ alertSuccess, setAlertSuccess ] = useState(false);
	const [ alertDanger, setAlertDanger ] = useState(false);
	const jwtToken = sessionStorage.getItem('token');
	const [ page, setPage ] = useState(1);
	return (
		<CCard>
			<CCardHeader>
				Add Service Sub Page<CLink
					style={{ float: 'right' }}
					className="btn btn-success"
					to="/service-sub-page/add"
				>
					Add Service Sub Page
				</CLink>
			</CCardHeader>
			<CCardBody>
				{alertSuccess ? (
					<div className="alert alert-success alert-dismissible fade show" role="alert">
						<strong>{alertSuccess}</strong> .
						<button
							onClick={() => setAlertSuccess('')}
							type="button"
							className="close"
							data-dismiss="alert"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
				) : null}
				{alertDanger ? (
					<div className="alert alert-warning alert-dismissible fade show" role="alert">
						<strong>{alertDanger}</strong>.
						<button
							onClick={() => setAlertDanger('')}
							type="button"
							className="close"
							data-dismiss="alert"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
				) : null}
				<ul className="nav">
					<li className="nav-item">
						<button onClick={() => setPage(1)} className="nav-link active btn btn-primary mx-2">
							Sub Page Banner
						</button>
					</li>
					<li className="nav-item">
						<button onClick={() => setPage(2)} className="nav-link btn btn-primary mx-2">
							Page Features
						</button>
					</li>
					<li className="nav-item">
						<button onClick={() => setPage(3)} className="nav-link btn btn-primary mx-2">
							Product Table
						</button>
					</li>
					<li className="nav-item">
						<button onClick={() => setPage(4)} className="nav-link btn btn-primary mx-2">
							Enquiry Cards
						</button>
					</li>
				</ul>
				<CContainer>
					{page === 1 && (
						<div>
							<CHeader style={{ zIndex: '1' }} className="my-4">
								<h3>Page Banner</h3>
							</CHeader>
							<CRow>
								<CCol md="6" sm="12">
									{' '}
									<FormLabel className="my-4">Banner Title</FormLabel>
									<CInput placeholder="Banner Title" />
								</CCol>
								<CCol md="6" sm="12">
									{' '}
									<FormLabel className="my-4">Banner Description</FormLabel>
									<CInput placeholder="Banner Description" />
								</CCol>
								<CCol md="6" sm="12">
									{' '}
									<FormLabel className="my-4">Banner Image</FormLabel>
									<CInputGroup className="mb-3">
										<CLabel htmlFor="cardOneImage" variant="custom-file">
											Choose Image...
										</CLabel>
										<CInputFile
											placeholder="card image"
											// onChange={(e) => setImage(e.target.files[0])}
											custom
											id="categoryImage"
											type="file"
										/>
									</CInputGroup>
								</CCol>
								<CCol md="6" sm="12">
									{' '}
									<FormLabel className="my-4">Status</FormLabel>
									<ReactSwitch />
									{/* <CInput placeholder="Banner Description" /> */}
								</CCol>
							</CRow>
						</div>
					)}
					{page === 2 && (
						<div>
							<CHeader style={{ zIndex: '1' }} className="my-4">
								<h3>Page Features</h3>
							</CHeader>
							<CRow>
								<CCol md="6" sm="12">
									{' '}
									<FormLabel className="my-4">Feature Title</FormLabel>
									<CInput placeholder="Banner Title" />
								</CCol>
								<CCol md="6" sm="12">
									{' '}
									<FormLabel className="my-4">Feature Description</FormLabel>
									<CInput placeholder="Banner Description" />
								</CCol>
								<CCol md="6" sm="12">
									{' '}
									<FormLabel className="my-4">Feature Image</FormLabel>
									<CInputGroup className="mb-3">
										<CLabel htmlFor="cardOneImage" variant="custom-file">
											Choose Image...
										</CLabel>
										<CInputFile
											placeholder="card image"
											// onChange={(e) => setImage(e.target.files[0])}
											custom
											id="categoryImage"
											type="file"
										/>
									</CInputGroup>
								</CCol>
							</CRow>
						</div>
					)}
					{page === 3 && (
						<div>
							<CHeader style={{ zIndex: '1' }} className="my-4">
								<h3>Product Table</h3>
							</CHeader>
							<CRow>
								<CCol md="6" sm="12">
									{' '}
									<FormLabel className="my-4">Table Title Seperated by commas(,)</FormLabel>
									<CInput placeholder="Table Title" />
								</CCol>
								<CCol md="6" sm="12">
									{' '}
									<FormLabel className="my-4">Table Body Seperated by commas(,)</FormLabel>
									<CInput placeholder="Table Body" />
								</CCol>
							</CRow>
						</div>
					)}
					{page === 4 && (
						<div>
							<CHeader style={{ zIndex: '1' }} className="my-4">
								<h3>Enquiry Cards</h3>
							</CHeader>
							<CRow>
								<CCol md="6" sm="12">
									{' '}
									<FormLabel className="my-4">Card Title</FormLabel>
									<CInput placeholder="Card Title" />
								</CCol>
								<CCol md="6" sm="12">
									{' '}
									<FormLabel className="my-4">Card Description</FormLabel>
									<CInput placeholder="Card Description" />
								</CCol>
								<CCol md="6" sm="12">
									{' '}
									<FormLabel className="my-4">Card Button Text</FormLabel>
									<CInput placeholder="Card Button Text" />
								</CCol>{' '}
								<CCol md="6" sm="12">
									{' '}
									<FormLabel className="my-4">Card Button Link</FormLabel>
									<CInput placeholder="Card Button Link" />
								</CCol>{' '}
								<CCol md="6" sm="12">
									{' '}
									<FormLabel className="my-4">Card Image</FormLabel>
									<CInputGroup className="mb-3">
										<CLabel htmlFor="cardOneImage" variant="custom-file">
											Choose Image...
										</CLabel>
										<CInputFile
											placeholder="card image"
											// onChange={(e) => setImage(e.target.files[0])}
											custom
											id="categoryImage"
											type="file"
										/>
									</CInputGroup>
								</CCol>
							</CRow>
						</div>
					)}
				</CContainer>
			</CCardBody>
		</CCard>
	);
}

export default ServiceSubPage;
