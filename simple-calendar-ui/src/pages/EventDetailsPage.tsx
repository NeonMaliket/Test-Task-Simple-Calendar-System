import React from "react";
import type { CalendarEvent } from "../types/CalendarEvent";

interface EventDetailsProps { 
    event: CalendarEvent
 }

interface EventDetailsState {
    event: CalendarEvent
}

class EventDetailsPage extends React.Component<EventDetailsProps, EventDetailsState> {
    state: EventDetailsState = {
        event: this.props.event
    }

    render() {
        const { title, description, startDateTime, endDateTime, location } = this.state.event

        if (!title) return null

        return (
            <div className="mt-6 p-6 bg-white shadow rounded-lg border border-gray-200 max-w-xl">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Детали события</h2>
                <div className="space-y-2 text-sm text-gray-700">
                    <p><span className="font-medium text-gray-900">Название:</span> {title}</p>
                    <p><span className="font-medium text-gray-900">Описание:</span> {description || '-'}</p>
                    <p>
                        <span className="font-medium text-gray-900">Начало:</span>{' '}
                        {startDateTime ? startDateTime.toLocaleString() : '-'}
                    </p>
                    <p>
                        <span className="font-medium text-gray-900">Конец:</span>{' '}
                        {endDateTime ? endDateTime.toLocaleString() : '-'}
                    </p>
                    <p><span className="font-medium text-gray-900">Локация:</span> {location || '-'}</p>
                </div>
            </div>
        )
    }
}

export default EventDetailsPage
