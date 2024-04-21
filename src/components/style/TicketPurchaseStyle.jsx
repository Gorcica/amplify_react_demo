import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


export const TitleName = styled(Box)(({ theme }) => ({
  ...theme.typography.h5,
  fontSize: 'large',
  padding: theme.spacing(0.5),
  textAlign: 'left',
  color: '#1A2027',
  fontWeight:'bold'
}));

export const NormalText = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  fontSize: 14,
  textAlign: 'left',
  color: '#808080',
}));
