import React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch, useSelector } from "react-redux";

// reducer
import { updateSelectedCategories } from '../slicer/productListFilterSlice';

const ProductListCategoryCheckboxes = () => {
    const dispatch = useDispatch();
    const selectedCategories = useSelector(state=>state.productListFilter.selectedCategories);
    console.log(selectedCategories);
    const handleCategoryCheckbox = (categoryName) => (e) => {
            const newCategoryObj = selectedCategories.map(categoryObj=>categoryObj.name === categoryName ? {name: categoryObj.name, flag: e.target.checked} : categoryObj);
            console.log(newCategoryObj);
            dispatch(updateSelectedCategories({selectedCategories: newCategoryObj}));
        };
    return (
        selectedCategories.map((category)=>(
            <FormControlLabel
                label={category.name}
                key={category.name}
                control={<Checkbox id={category.name} checked={category.flag} onChange={handleCategoryCheckbox(category.name)} />}
            />
    )));
};

export default ProductListCategoryCheckboxes;