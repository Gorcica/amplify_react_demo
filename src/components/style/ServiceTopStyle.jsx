import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const BoxTitle = styled(Box)(({ theme }) => ({
  ...theme.typography.h5,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '#000000',
  fontWeight: 'bold',
}));

export const BoxTitleBold = styled(Box)(({ theme }) => ({
  ...theme.typography.h4,
  textAlign: 'left',
  color: '#000000',
  fontWeight: 'bold',
}));

export const BoxText = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(0.5),
  textAlign: 'left',
  color: '#000000',
  fontSize: 18,
}));
