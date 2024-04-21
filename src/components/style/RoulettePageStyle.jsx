import Box from '@mui/material/Box';

// eslint-disable-next-line
export const MyNumberBox = ({children, backgroundColor}) => (
    <Box sx={{border:2.5, width:'9%', fontSize: 18, verticalAlign: 'middle', textAlign: 'center', fontWeight:'bolder', boxSizing: 'border-box', margin:0.1, backgroundColor}}>{children}</Box>
);

// eslint-disable-next-line
export const NumberBox = ({children, backgroundColor}) => (
    <Box sx={{border:1, borderColor: 'gray', width:'9%', fontSize: 18, verticalAlign: 'middle', textAlign: 'center', fontWeight:'lighter', boxSizing: 'border-box', margin:0.1, backgroundColor}}>{children}</Box>
);