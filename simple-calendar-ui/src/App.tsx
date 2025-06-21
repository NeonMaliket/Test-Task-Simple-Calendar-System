import {Route, Routes} from 'react-router-dom'
import './App.css'
import CalendarPage from './pages/CalendarPage'
import EventDetailsPage from './pages/EventDetailsPage'
import EditEventPage from './pages/EditEventPage'
import Header from './components/Header'
import {Box} from '@mui/material'
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";

function App() {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Header title="SIMPLE CALENDAR"/>
            <Box height="3vw"/>
            <Routes>
                <Route path='/calendar' element={<CalendarPage/>}></Route>
                <Route path='/calendar/event/:id' element={<EventDetailsPage/>}></Route>
                <Route path='/calendar/event/new' element={<EditEventPage/>}></Route>
                <Route path='/calendar/event/edit/:id' element={<EditEventPage/>}></Route>
                <Route path='*' element={<CalendarPage/>}></Route>
            </Routes>
        </LocalizationProvider>
    )
}

export default App
