import styled from "styled-components";
import { useState } from "react";
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from "dayjs";
import { TextField } from "@mui/material";
import { PickersDay } from "@mui/x-date-pickers";
import DoneAllIcon from '@mui/icons-material/DoneAll';

const StyledPickersDay = styled(PickersDay)`
  &.MuiPickersDay-day {
    font-size: 2rem; 
    font-weight: bold; 
  }
`;


function Calendar() {
  const [ value, setValue ] = useState(dayjs());
  const [ recordDay, setRecordDay ] = useState([1,2,14])
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker 
        orientation="portrait" 
        openTo="day"
        value={value}
        onChange={(newValue)=>{
          setValue(newValue)
        }}
        TextField={(params) => <TextField {...params}
        renderDay={(day, _value, DayComponentProps) =>{
          const isSelected = 
          !DayComponentProps.outsideCurrentMonth &&
          recordDay.indexOf(day.getDate()) >= 0;
          return(
            <StyledPickersDay
                  {...DayComponentProps}
                  selected={isSelected}
                  >
                  {day.format("D")} 
                  {isSelected && <DoneAllIcon />}
            </StyledPickersDay>
          )
        }} />}
      />
    </LocalizationProvider>
  )
}

export default Calendar;