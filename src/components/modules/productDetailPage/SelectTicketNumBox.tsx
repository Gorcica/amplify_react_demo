import { Box } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectTicketNumBox = (ticketNum, setTicketNum) => {
  // ticket num select box
  
  const selectTicketNum = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTicketNum(event.target.value);
  };
  
  return (
  <Box sx={{ width: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="ticket-select-num-label">Number of Sheets</InputLabel>
      <Select
        labelId="ticket-select-num-label"
        id="ticket-select-num"
        value={ticketNum}
        label="TicketNum"
        onChange={selectTicketNum}
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
    </FormControl>
  </Box>
);};

export default SelectTicketNumBox;