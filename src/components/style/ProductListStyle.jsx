import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Status card
export const TagName = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  fontSize: 'small',
  textAlign: 'left',
  color: '#808080',
}));

export const ProductName = styled(Box)(({ theme }) => ({
  ...theme.typography.h5,
  fontSize: 'medium',
  padding: theme.spacing(0.5),
  textAlign: 'left',
  color: '#1A2027',
  overflow: 'hidden',
  width: "100%"
}));

export const GrayText = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  fontSize: 'small',
  textAlign: 'left',
  color: '#808080',
}));

export const BlackText = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'left',
  color: '#1A2027',
}));

export const RedText = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'left',
  color: '#ff0000',
  fontWeight: 'bold',
}));

// profile
export const ProfileCaption = styled(Box)(({ theme }) => ({
  ...theme.typography.h5,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '#1A2027',
  fontSize: 18,
}));
