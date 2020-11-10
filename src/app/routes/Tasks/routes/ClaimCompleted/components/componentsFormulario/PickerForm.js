import 'date-fns';
import { format } from 'date-fns'
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';


const PickerForm = ({ name, changeData }) => {

  const [selectedDate, setSelectedDate] = React.useState(new Date(Date.now()));

  const handleDateChange = (date) => {
    setSelectedDate(date);

    let newDate = format(new Date(date), 'yyyy-MM-dd')
    changeData(name, newDate)
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="dd/MM/yyyy"
          value={selectedDate}
          inputVariant="outlined"
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          fullWidth
        />
    </MuiPickersUtilsProvider>
  )
}


export default PickerForm