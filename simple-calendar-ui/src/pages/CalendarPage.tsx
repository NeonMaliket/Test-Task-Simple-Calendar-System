import type { DateSelectArg, EventClickArg, EventInput } from '@fullcalendar/core'
import React from 'react'

import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import type { CalendarEvent } from '../types/CalendarEvent'

interface CalendarState {
    events: EventInput[]
    selectedEvent: CalendarEvent | null
}

export default class CalendarPage extends React.Component<{}, CalendarState> {
    state: CalendarState = {
        events: [],
        selectedEvent: null,
    }

    handleDateSelect = (selectInfo: DateSelectArg) => {
        const title = prompt('Введите название события:')
        const description = prompt('Описание:')
        const location = prompt('Локация:')

        if (title) {
            const newEvent = {
                id: String(Date.now()),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
                extendedProps: {
                    description,
                    location,
                },
            }

            this.setState((prev) => ({
                events: [...prev.events, newEvent],
            }))
        }
    }

    handleEventClick = (clickInfo: EventClickArg) => {
        this.setState({
            selectedEvent: {
                id: clickInfo.event.id,
                title: clickInfo.event.title,
                startDateTime: clickInfo.event.start,
                endDateTime: clickInfo.event.end,
                extendedProps: clickInfo.event.extendedProps,
            },
        })
    }

    render() {
        return (
            <div className="p-6 bg-[#f1f3f4] min-h-screen">
                <div className="max-w-7xl mx-auto bg-white shadow rounded-xl">
                    <FullCalendar
                        plugins={[timeGridPlugin, interactionPlugin]}
                        initialView="timeGridWeek"
                        selectable={true}
                        select={this.handleDateSelect}
                        events={this.state.events}
                        eventClick={this.handleEventClick}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'timeGridWeek,timeGridDay',
                        }}
                        nowIndicator
                        height="auto"
                    />
                </div>
            </div>
        )
    }
}
