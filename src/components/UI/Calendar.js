import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { styled } from '@mui/material/styles';

import theme from '../UI/Theme';
import { ClassNames } from '@emotion/react';


const CalendarTextField = styled(TextField)({
  '& label': {
    color: "#757575"
  },
  '& label.Mui-focused': {
    color: "#757575",
  },
  "&:hover label": {
    color: "#757575"
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: "#757575"
    },
    '&:hover fieldset': {
      borderColor: "#757575",
    },
    '&.Mui-focused fieldset': {
      borderColor: "#757575",
    },
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    paddingBottom: "2%"
  }
});

export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Check By Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <CalendarTextField {...params}/>}
      />
    </LocalizationProvider>
  );
}

//     width: 100%;
// margin-bottom: 2%;