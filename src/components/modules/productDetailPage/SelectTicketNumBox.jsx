/* eslint-disable */
import React, {useState} from 'react';
import { Box } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import calcTicketValue from './calcTicketValue';

const makeOption = (ticket, limitPayUnitValue, lowestRankTicketUnitValue) => {
    const result = [];
    const maxTicketUnit = Math.floor(limitPayUnitValue/calcTicketValue(ticket));
    console.log(maxTicketUnit);
    for(let i=1; i<=maxTicketUnit; i+=1) {
      if((i*calcTicketValue(ticket))%lowestRankTicketUnitValue===0){
        result.push(i);
      }
    }
    console.log(result);
    return result;
  };

const SelectTicketNumBox = ({ticket, ticketNum, setTicketNum, limitPayUnitValue, lowestRankTicketUnitValue}) => {
  const [ticketNumOption, setTicketNumOption] = useState()
  
  // ticket num select box
  
  const selectTicketNum = (event) => {
    setTicketNum(event.target.value);
  };
  
  const selectTicketNumOption = makeOption(ticket, limitPayUnitValue, lowestRankTicketUnitValue);
  
  
  
  return (
  <Box sx={{ width: "100%", height: 40 }}>
    <FormControl fullWidth>
      <InputLabel id="ticket-select-num-label">Number of Sheets</InputLabel>
      <Select
        labelId="ticket-select-num-label"
        id="ticket-select-num"
        value={ticketNum}
        label="TicketNum"
        onChange={selectTicketNum}
        size="small"
        sx={{
          height: 40
        }}
      >
        {selectTicketNumOption.map((value)=>
            <MenuItem value={value} key={value}>{value}</MenuItem>
        )}
      </Select>
    </FormControl>
  </Box>
);};

export default SelectTicketNumBox;