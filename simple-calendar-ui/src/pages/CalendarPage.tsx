import type {DateClickArg} from '@fullcalendar/interaction';
import interactionPlugin from '@fullcalendar/interaction';
import type {EventClickArg, EventContentArg} from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import useEvents from '../hooks/EventHook';
import type {DateRange} from '../types/DateRange.ts';
import {Event} from '../components/Event.tsx';
import {datePlusOneHour} from '../shared/DateUtils.ts';

const CalendarPage: React.FC = () => {
    const {events} = useEvents();
    const navigate = useNavigate();

    const mappedCalendarEvents = () => {
        return events.map((event) => ({
            id: event.id ?? '',
            title: event.title,
            start: event.startDateTime,
            end: event.endDateTime,
            allDay: false,
            extendedProps: {
                description: event.description,
                location: event.location,
            },
        }));
    };

    const handleDateClick = (info: DateClickArg) => {
        const dataRange: DateRange = {
            start: info.date,
            end: datePlusOneHour(info.date),
        };
        navigate('/calendar/event/new', {
            state: dataRange,
        });
    };

    const onEventClick = (event: EventClickArg) => {
        navigate(`/calendar/event/${event.event.id}`);
    };

    const renderEventContent = (eventInfo: EventContentArg) => (
        <Event eventInfo={eventInfo} />
    );

    return (
        <FullCalendar
            plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
            initialView="dayGridMonth"
            dateClick={handleDateClick}
            selectable={false}
            select={undefined}
            events={mappedCalendarEvents()}
            eventClick={onEventClick}
            eventContent={renderEventContent}
            headerToolbar={{
                left: 'prev,next',
                center: 'title',
                right: 'today',
            }}
            nowIndicator
            height="80vh"
        />
    );
};

export default CalendarPage;
