import React, {useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";

import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';

// modules
// import ButtonCheckbox from '../atoms/ButtonCheckbox';
import ProductListCategoryCheckboxes from '../atoms/ProductListCategoryCheckboxes';

// reducer
import { updateSelectedCategories, updateNewOrUsed } from '../slicer/productListFilterSlice';

// eslint-disable-next-line
const ProductListSortForms = ({categoryHidden}) => {
    const dispatch = useDispatch();
    const productListFilter = useSelector((state)=>state.productListFilter);
    console.log(productListFilter);
    
    // const testCategoryList = ['T-shirt', 'Pants'];
    useEffect(()=>{
        const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/category-scan';
        const postBody = {};
        axios.post(baseUrl, postBody)
            .then((res)=>{
                const categories = res.data.Item;
                const categoryNameList = categories.map((category)=>(category.category_name));
                console.log(categoryNameList);
                const selectedCategories = categoryNameList.map(categoryName=>({name: categoryName, flag: true}));
                dispatch(updateSelectedCategories({selectedCategories}));
            });
            
        dispatch(updateNewOrUsed({newOrUsed: 'all'}));
    // eslint-disable-next-line
    },[]);
    
    const handleChangeRadioButton = (e) => {
        dispatch(updateNewOrUsed({newOrUsed: e.target.value}));
    };
    
    return (
        <FormControl sx={{ textAlign: 'left', flexGrow: 1, width: '80%', mx: 'auto', padding: 2 }}>
            <FormGroup>
                <FormLabel id="product-filter-radio-group-label">New/used selection</FormLabel>
                <RadioGroup
                    aria-labelledby="new-or-used-filter-radio-buttons-group"
                    row
                    defaultValue="all"
                    onChange={handleChangeRadioButton}
                    name="radio-buttons-group"
                >
                <FormControlLabel value="all" control={<Radio />} label="All" />
                <FormControlLabel value="new" control={<Radio />} label="Brand new" />
                <FormControlLabel value="used" control={<Radio />} label="Second hand" />
                </RadioGroup>
            </FormGroup>
            { !categoryHidden && (
            <>
                <Divider />
                <FormLabel id="category-filter-switch-group-label">Select Category</FormLabel>
                <FormGroup row>
                  <ProductListCategoryCheckboxes />
                </FormGroup>
            </>)}
        </FormControl>
    );
};

export default ProductListSortForms;