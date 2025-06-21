import { useState } from "react";
import type { CalendarEvent } from "../types/CalendarEvent";

// const URL = 'http://localhost:8080/api/calendar'

const useEvents = () => {
    const [events, setEvents] = useState<CalendarEvent[]>([
        {
            id: '1',
            title: '7-8',
            description: 'desc',
            startDateTime: new Date(),
            endDateTime: new Date(),
            location: 'LOCATION'
        },
        {
            id: '2',
            title: '2-2',
            description: 'desc',
            startDateTime: new Date(),
            endDateTime: new Date(),
            location: 'LOCATION'
        }
    ])
    const [errors] = useState<Error | null>()

    const findById = (id: string) => {
        const result = events.find((event) => event.id === id)
        console.log("RESULT: ", result);

        return result
    }

    const add = (event: CalendarEvent) => {
        console.log("add: ", event)
        const localEvents = events
        localEvents.push(event)
        setEvents(localEvents)
        console.log("EVENTS: ", events)

    }

    const update = (id: string, event: CalendarEvent) => {
        console.log("id: ", id)
        console.log("update: ", event)
    }

    const remove = (id: string) => {
        console.log("deletiong with id: ", id)

    }

    return { events, errors, add, update, remove, findById }
}

export default useEvents;