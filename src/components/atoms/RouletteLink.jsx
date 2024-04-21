import { useState, } from 'react';
import axios from 'axios';

import { Link as TransisionLink } from 'react-router-dom';
// style
import { RedText } from '../style/LoginTopStyle';


const makeRouletteNowFlag = async (rouletteDateStr, productId, setRouletteNowFlag, setLoading) => {
        const date1 = new Date(rouletteDateStr);
        const date2 = new Date();
        const flag1 = date2>=date1;
        const baseUrl = 'https://bp6fjsioll.execute-api.ap-northeast-1.amazonaws.com/Dev/product-get-info';
        const postBody = {
            Keys: {
                product_id: productId
            }
        };
        await axios.post(baseUrl, postBody).then((response)=>{
            const productInfo = response.data.Item;
            console.log(productInfo);
            const lotteryList = productInfo.entry_users.lottery_list;
            const prizeInfo = productInfo.prize_info;
            const prizeNum = prizeInfo.length;
            const flag2 = lotteryList.length < prizeNum;
            setRouletteNowFlag(flag1&&flag2);
            setLoading(false);
        });
    };

// eslint-disable-next-line
const RouletteLink = ({rouletteDate, productId}) => {
    const [rouletteNowFlag, setRouletteNowFlag] = useState(false);
    const [loading, setLoading] = useState(true);
    
    makeRouletteNowFlag(rouletteDate, productId, setRouletteNowFlag, setLoading);
    
    console.log(loading);
    // eslint-disable-next-line
    return (
        <>
            {loading && <div>loading</div>}
            {rouletteNowFlag &&
                (<TransisionLink to={`../roulette/${productId}`}>
                    <RedText>Roulette Now!</RedText>
                </TransisionLink>)}
        </>
    );
};

export default RouletteLink;