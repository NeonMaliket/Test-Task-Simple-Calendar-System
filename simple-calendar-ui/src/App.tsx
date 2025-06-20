import { Route, Routes } from 'react-router-dom'
import './App.css'
import CalendarPage from './pages/CalendarPage'
import EventDetailsPage from './pages/EventDetailsPage'
import EditEventPage from './pages/EditEventPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/calendar' element={<CalendarPage />}></Route>
        <Route path='/calendar/event/:id' element={<EventDetailsPage />}></Route>
        <Route path='/calendar/event/edit/:id' element={<EditEventPage />}></Route>
        <Route path='*' element={<CalendarPage />}></Route>
      </Routes>
    </>
  )
}

export default App
