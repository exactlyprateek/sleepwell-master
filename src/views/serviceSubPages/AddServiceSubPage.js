import { CCard, CCardHeader } from '@coreui/react';
import React, { useEffect, useState } from 'react'

function AddServiceSubPage() {
    const [ serviceCategories, setServiceCategories ] = useState([]);
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ buttonText, setButtonText ] = useState('');
	const [ buttonLink, setButtonLink ] = useState('');
	const [ categoryId, setCategoryId ] = useState('');
	const [ sortOrder, setSortOrder ] = useState('');
	const [ status, setStatus ] = useState(false);
    useEffect(() => {
        

    }, [])
    return (
        <CCard>
            <CCardHeader>Add Service Sub Page</CCardHeader>
        </CCard>
    )
}

export default AddServiceSubPage
