import type { EventClickArg, EventInput } from '@fullcalendar/core'

import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BACK_END_EVENTS = [
    {
        id: '1',
        title: '7-8',
        start: '2025-06-22T10:00:00',
        end: '2025-06-22T18:00:00',
        allDay: false,
        extendedProps: {
            description: 'Описание события',
            location: 'Киев, офис 301',
        },
    },
    {
        id: '4',
        title: '10-18',
        start: '2025-06-22T07:00:00',
        end: '2025-06-22T08:00:00',
        allDay: false,
        extendedProps: {
            description: 'Описание события',
            location: 'Киев, офис 301',
        },
    }
]

const CalendarPage: React.FC = () => {
    const [events] = useState<EventInput[]>(BACK_END_EVENTS)
    const navigate = useNavigate()

    const handleEventClick = (clickInfo: EventClickArg) => {
        const id = clickInfo.event.id
        navigate(`/calendar/event/${id}`)
    }

    return (
        <>
            <FullCalendar
                plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
                initialView="dayGridMonth"
                selectable={true}
                events={events}
                eventClick={handleEventClick}
                headerToolbar={{
                    left: 'prev,next',
                    center: 'title',
                    right: 'today',
                }}
                nowIndicator
                height="auto"
            /></>
    )
}

export default CalendarPage
