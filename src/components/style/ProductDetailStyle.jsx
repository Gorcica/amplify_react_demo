import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const GenreName = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'left',
  color: '#808080',
}));

export const TagName = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'left',
  color: '#808080',
}));

export const ProductName = styled(Box)(({ theme }) => ({
  ...theme.typography.h3,
  marginTop: 2,
  textAlign: 'left',
  color: '#000000',
  fontSize: 24
}));

export const ProductCaptionTitle = styled(Box)(({ theme }) => ({
  ...theme.typography.h5,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '#000000',
  fontSize: 20
}));

export const ContentItemText = styled(Box)(({ theme }) => ({
  ...theme.typography.h6,
  textAlign: 'left',
  color: '#202020',
  fontSize: 16,
}));

export const ContentTitle = styled(Box)(({ theme }) => ({
  ...theme.typography.h6,
  textAlign: 'left',
  color: '#202020',
  fontWeight: 'bold',
}));

export const ContentAccordionItemTitle = styled(Box)(({ theme }) => ({
  ...theme.typography.h6,
  textAlign: 'left',
  color: '#202020',
  fontSize: 16,
  fontWeight: 'bold'
}));

export const ContentAccordionItemContents = styled(Box)(({ theme }) => ({
  ...theme.typography.p,
  textAlign: 'left',
  color: '#202020',
  fontSize: 14,
}));

export const ContentAccordionSummaryTitle = styled(Box)(({ theme }) => ({
  ...theme.typography.h5,
  textAlign: 'left',
  color: '#202020',
  fontSize: 16,
  fontWeight: 'bold'
}));