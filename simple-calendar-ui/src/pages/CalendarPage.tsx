import type {EventClickArg} from '@fullcalendar/core'

import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import useEvents from '../hooks/EventHook'

const CalendarPage: React.FC = () => {
    const {events} = useEvents()
    const navigate = useNavigate()

    const handleEventClick = (clickInfo: EventClickArg) => {
        const id = clickInfo.event.id
        navigate(`/calendar/event/${id}`)
    }

    const handleNewEvent = () => {
        navigate('/calendar/event/new')
    }

    const calendarEvents = () => {
        // 2025-06-22T10:00:00
        return events.map((event) => {
            return {
                id: event.id ?? '',
                title: event.title,
                start: event.startDateTime?.toISOString(),
                end: event.endDateTime?.toISOString(),
                allDay: false,
                extendedProps: {
                    description: event.description,
                    location: event.location,
                },
            }
        })
    }

    return (
        <FullCalendar
            plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
            initialView="dayGridMonth"
            selectable={true}
            dateClick={handleNewEvent}
            events={calendarEvents()}
            eventClick={handleEventClick}
            headerToolbar={{
                left: 'prev,next',
                center: 'title',
                right: 'today',
            }}
            nowIndicator
            height="auto"
        />
    )
}

export default CalendarPage
