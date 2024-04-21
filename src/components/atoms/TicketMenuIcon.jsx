import { useSelector } from 'react-redux';

const TicketMenuIcon = () => {
    // console.log(ticketType);
    const userInfo = useSelector((state) => state.userInfo);
    console.log(userInfo);
    return <dev>test</dev>;
};

export default TicketMenuIcon;