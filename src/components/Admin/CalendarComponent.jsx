import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
const CalendarComponent = () => {
    return (
        <div className='p-5'>
            <h2 className='text-xl font-medium mt-0'>Calender</h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
        </LocalizationProvider>
        </div>
    );
};

export default CalendarComponent;