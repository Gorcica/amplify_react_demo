import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const PageTitle = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  ...theme.typography.h3,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#000000',
}));

export const ContentTitleBold = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  ...theme.typography.h4,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '#000000',
  fontWeight: 'bold',
}));

export const ContentText = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '#000000',
  fontSize: 24,
}));

// StatusCard, ProductDetail
export const GrayText = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'left',
  color: '#808080',
}));
