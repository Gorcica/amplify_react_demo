import React from 'react';
import { styled } from '@mui/material/styles';

const Label = styled('label')({
    marginRight:'5px',
});

const Input = styled('input')({
    display: 'none'
});

const Span = styled('span')({
    color: '#333', /* 文字色を黒に */
    fontSize: '14px', /* 文字サイズを14pxに */
    border: '1px solid #333', /* 淵の線を指定 */
    borderRadius: '20px', /* 角丸を入れて、左右が丸いボタンにする */
    padding: '5px 20px' /* 上下左右に余白をトル */
});

const ButtonCheckbox = () => {
    console.log('test');
    return(
        <div margin-top='5px'>
            <Label><Input type="checkbox" value="いぬ" name="animal" /><Span>test</Span></Label>
        </div>
        )
};

export default ButtonCheckbox;