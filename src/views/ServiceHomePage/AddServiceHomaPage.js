import React, { useState } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
} from '@coreui/react'
import { useHistory } from 'react-router';

import ServiceHomeBannerComponent from './ServiceHomeBannerComponent.js';
import ServiceHomeComponent from './ServiceHomeComponent.js';
import Section3Component from './Section3Component.js';


const AddServiceHomePage = () => {

    return (
        <div>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Add service home page
                        </CCardHeader>
                        <CCardBody>
                            <ServiceHomeBannerComponent />
                            {/* <ServiceHomeComponent />
                            <Section3Component /> */}
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

        </div>
    )
}

export default AddServiceHomePage
