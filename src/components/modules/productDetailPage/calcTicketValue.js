// Ticketの価値を設定する関数
const calcTicketValue = (ticketType) => {
    let res = 0;
  switch(ticketType){
    case "NORMAL":
      res = 1;
      break;
    case "GOLD":
      res = 5;
      break;
    case "PREMIUM":
      res = 20;
      break;
    default:
      res = 0;
  }
  return res;
};

export default calcTicketValue;