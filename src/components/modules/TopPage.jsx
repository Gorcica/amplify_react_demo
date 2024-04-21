import {useState} from 'react';

import { useSelector } from 'react-redux';

// import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import { Popover } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// import { Scheduler } from "@aldabil/react-scheduler";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
// import { enUS } from 'date-fns/locale'

// import 'bootstrap/dist/css/bootstrap.css';
import { UncontrolledPopover, PopoverBody } from "reactstrap";

import {
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts";

import UserInformation from './topPage/UserInformation';
// import EntryCard from './topPage/EntryCard';
// import PastPerformanceCard from './topPage/PastPerformanceCard';
// import ShippedStatus from './topPage/ShippedStatus';
import {ReactComponent as RouletteIcon} from '../../Images/rouletteIcon2.svg';
import {ReactComponent as DeadlineIcon} from '../../Images/deadline-time-flame-time-1.svg';


// css
import '../style/TopPage.css';

const VerticalSpacer = () => <Box sx={{ height: 25 }} />;

/* eslint-disable-next-line */
// const Popup = ({ target, text }) => {
//   if (!target) {
//     return null;
//   }
//   return (
//     <Popover anchorEl={target}>
//       <p>{text}</p>
//     </Popover>
//   );
// };

/* eslint-disable-next-line */
const ContentsTitle = ({children}) => (
  <Box sx={{mb:2, mt:4}} >
    <Typography variant='h3' textAlign="left" fontSize={24} color="#00155C">{children}</Typography>
    <Divider color="#00155C" />
  </Box>
  );

/* eslint-disable-next-line */
const Popup = ({ target, text }) => {
  if (!target) {
    return null;
  }
  return (
    <UncontrolledPopover trigger="focus" placement="auto" target={target}>
      <PopoverBody>{text}</PopoverBody>
    </UncontrolledPopover>
  );
};

const TopPage = () => {

  const navigate = useNavigate();
  
  const [eventInfo, setEventInfo] = useState();

  const handleEventClick = (eventClickInfo) => {
    console.log(eventClickInfo);
    setEventInfo(eventClickInfo.event);
  };
  
  const userInfo = useSelector((state) => state.userInfo);
  const { wishList, entryList } = userInfo;
  const wishEvents = wishList.map(item=>({
    title:`${item.product_name}`,
    start: item.roulette_date,
    color: '#F5F2B2',
    tag:'Deadline',
    productId: item.product_id
  }));
  const entryEvents = entryList.map(item=>({
    title:`${item.product_name}`,
    start: item.roulette_date,
    color: '#B4F5B2',
    tag:'Roulette',
    productId: item.product_id
  }));
  
  console.log(wishEvents);
  console.log(entryEvents);
  
  const events = wishEvents.concat(entryEvents);
  
  console.log(events);
  
  // const [events, setEvents] = useState(testEvents);
  
  // const [anchor, setAnchor] = useState(null);
  // const openPopover = (event) => {
  //   setAnchor(event.currentTarget);
  // };
  
  const data02 = [
    {
      "name": "Win",
      "value": 200,
      "angle": 100
    },
    {
      "name": "Losed",
      "value": 520,
      "angle": 260
    }
  ];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, angle, name }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 0.6;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 0.6;
    console.log(midAngle);
    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" style={{fontSize:20}}>
        {`${name}: ${(angle/360*100).toFixed(0)}%`}
      </text>
    );
  };
  

  
  const handleEventContent = (info) => (<>
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Box sx={{mt: 1, mb: 1, ml: 0.5, mr: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30}}>
        {info.event.extendedProps.tag === "Roulette" && <RouletteIcon /> }
        {info.event.extendedProps.tag === "Deadline" && <DeadlineIcon /> }
      </Box>
      <Typography variant="p" sx={{fontSize: 15, display: "flex", whiteSpace: "pre-line", overflowWrap: 'anywhere', pl: 1, pr: 1, width: "100%"}}>
        {`${info.event.title}`}
      </Typography>
    </Box>
    <Popup target={info.el} text={info.event.title} />
    </>);
    
  // const handleEventDidMount = (info) => {
  //   const tooltip = new Tooltip(info.el, {
  //     title: info.event.extendedProps.tag,
  //     placemant: 'auto',
  //     trigger: 'click',
  //     container: 'body'
  //   });
  // };
    
  // const handleEventDidMount = (info) => { 
  //     const event = (<>
  //       <Typography variant="caption" sx={{fontSize: 12,display: "inline-block", whiteSpace: "pre-line"}}>{info.event.title}</Typography>
  //       <Popup target={info.el} text={info.event.title} />
  //     </>);
  //     ReactDOM.render(event, info.el);
  // }
  
  return (
  <Box sx={{ flexGrow: 1, width: '80%', mx: 'auto' }}>
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Grid item container direction="column">
        <ContentsTitle>News</ContentsTitle>
        <UserInformation />
      </Grid>
      <Grid item container>
        <VerticalSpacer />
      </Grid>
      {/* <Grid item container>
        <TitleComp />
      </Grid>
      <Grid item container>
        <EntryStatusComp />
      </Grid>
      <Grid item container>
        <VerticalSpacer />
      </Grid>
      <Grid item container>
        <TitleComp2 />
      </Grid>
      <Grid item container>
        <ShippedStatus />
      </Grid>  */}
    </Grid>
    <Box>
      <ContentsTitle>Schedule</ContentsTitle>
      <Box sx={{m:2}}>
        <FullCalendar
          timeZone="Asia/Manila"
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek listWeek' // 追加
          }}
          events={events}
          eventDisplay="block"
          displayEventTime
          eventTextColor="#000000"
          eventClick={handleEventClick}
          eventContent={handleEventContent}
        />
        {eventInfo && (<Box sx={{border: 1, mt: 3, borderRadius: '9pt'}}>
          <Typography sx={{textAlign: 'left', pl:1, pt:1}}>details of selected schedule: <span style={{fontSize: 20, fontWeight: "bold"}}>{eventInfo.title}</span></Typography>
          <Box component="dl" spacing={2} sx={{pl:1, pt: 0, height: 100}}>
            <Typography component="dt" sx={{float: "left", clear: "left", marginRight: "0.5em", width: "120px" }}>Schedule Title</Typography>
            <Typography component="dd" sx={{float: "left", ml: '5rem'}}>{eventInfo.title}</Typography>
            <Typography component="dt" sx={{float: "left", clear: "left", marginRight: "0.5em", width: "120px" }}>Date and Time</Typography>
            <Typography component="dd" sx={{float: "left", ml: '5rem'}}>{eventInfo.startStr}</Typography>
            <Typography component="dt" sx={{float: "left", clear: "left", marginRight: "0.5em", width: "120px" }}>Product Details</Typography>
            <Typography component="dd" sx={{float: "left", ml: '5rem', color: 'blue'}} onClick={()=>{navigate(`/productDetail/${eventInfo.extendedProps.productId}`)}}>Link of Product Page</Typography>
            <Typography component="dt" sx={{float: "left", clear: "left", marginRight: "0.5em", width: "120px" }}>Roulette</Typography>
            <Typography component="dd" sx={{float: "left", ml: '5rem', color: 'blue'}} onClick={()=>{navigate(`/roulette/${eventInfo.extendedProps.productId}`)}}>Link of Roulette Page</Typography>
          </Box>
        </Box>)}
      </Box>
    </Box>
    <ContentsTitle>Preformance</ContentsTitle>
    <ResponsiveContainer width="90%" height={500}>
      <PieChart width={730} height={250}>
        <Pie data={[data02[1]]} dataKey="value" nameKey="name" cx="50%" cy="50%" stroke="#FF0000" strokeWidth={1} fill="#FFE0E0" labelLine={false} label={renderCustomizedLabel} startAngle={450-data02[0].angle-3} endAngle={90+3} outerRadius={180} />
        <Pie data={[data02[0]]} dataKey="value" nameKey="name" cx="50%" cy="50%" stroke="#1E8111" strokeWidth={2} fill="#E5FFE0" labelLine={false} label={renderCustomizedLabel} startAngle={450} endAngle={450-data02[0].angle} />
      </PieChart>
    </ResponsiveContainer>
  </Box>
)};

export default TopPage;
