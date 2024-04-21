import React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const ProductListCategoryCheckboxes = ({categoryObj, setCategoryObj}) => {
    const handleCategoryCheckbox = (category) => (e) => {
            const newCategoryObj = {...categoryObj};
            newCategoryObj[category] = e.target.checked;
            setCategoryObj(newCategoryObj);
        };
    console.log(categoryObj);
    return (
        Object.keys(categoryObj).map((category)=>(
            <FormControlLabel
                label={category}
                key={category}
                control={<Checkbox id={category} checked={categoryObj[category]} onChange={handleCategoryCheckbox(category)} />}
            />
    )));
};

export default ProductListCategoryCheckboxes;