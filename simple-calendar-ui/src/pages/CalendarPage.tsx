// @ts-ignore
import type {DateSelectArg} from '@fullcalendar/interaction'
import interactionPlugin from '@fullcalendar/interaction'
import type {EventClickArg} from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import useEvents from '../hooks/EventHook'
import type {DateRange} from "../types/DateRange.ts";

const CalendarPage: React.FC = () => {
    const {events} = useEvents()
    const navigate = useNavigate()

    const mappedCalendarEvents = () => {
        return events.map((event) => {
            return {
                id: event.id ?? '',
                title: event.title,
                start: event.startDateTime,
                end: event.endDateTime,
                allDay: false,
                extendedProps: {
                    description: event.description,
                    location: event.location,
                },
            }
        })
    }

    const handleSelect = (selectInfo: DateSelectArg) => {
        let dataRange: DateRange = {
            start: selectInfo.start,
            end: selectInfo.end,
        };
        navigate('/calendar/event/new', {
            state: dataRange
        })
    }

    const onEventClick = (event: EventClickArg) => {
        navigate(`/calendar/event/${event.event.id}`)
    }

    return (
        <FullCalendar
            plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
            initialView="dayGridMonth"
            selectable={true}
            selectMirror={true}
            select={handleSelect}
            events={mappedCalendarEvents()}
            eventClick={onEventClick}
            headerToolbar={{
                left: 'prev,next',
                center: 'title',
                right: 'today',
            }}
            nowIndicator
            height="80vh"
        />
    )
}

export default CalendarPage
