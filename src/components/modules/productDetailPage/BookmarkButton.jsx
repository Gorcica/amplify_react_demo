import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

// eslint-disable-next-line
const StarButton = ({onClick}) => (
    <IconButton onClick={onClick}>
        <StarIcon sx={{color:'#FFD700'}} />
    </IconButton>
    );
    
// eslint-disable-next-line
const StarBorderButton = ({onClick}) => (
    <IconButton onClick={onClick}>
        <StarBorderIcon />
    </IconButton>
    );

// #51 BookmarkAPIの疎通確認と機能確認で終了

// eslint-disable-next-line
const BookmarkButton = ({productId}) => {
    const userInfo = useSelector((state) => state.userInfo);
    const [ isOn, setIsOn ] = useState(userInfo.bookmarks ? userInfo.bookmarks.includes(productId) : false);
    const onClickOnButton = () => {
        const deleteUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/bookmark-cancel';
        const postBody = { Keys: {
            user_id: userInfo.userId,
            product_id: productId
        }};
        axios.post(deleteUrl, postBody)
            .then((res)=>{console.log(res)})
            .catch((err)=>{console.log(err)});
        setIsOn(false);
    };
    const onClickOffButton = () => {
        const addUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/bookmark-add';
        const postBody = { Keys: {
            user_id: userInfo.userId,
            product_id: productId
        }};
        console.log(postBody);
        axios.post(addUrl, postBody)
            .then((res)=>{console.log(res)})
            .catch((err)=>{console.log(err)});
        setIsOn(true);
    };
    
    return (
        <Box>
            {isOn ? <StarButton onClick={onClickOnButton} /> : <StarBorderButton onClick={onClickOffButton} />}
        </Box>
        );
};

export default BookmarkButton;