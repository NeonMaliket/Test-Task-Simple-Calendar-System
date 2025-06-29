import {useEffect, useState} from "react";
import type {CalendarEvent} from "../types/CalendarEvent";
import {createEvent, deleteEvent, getAllEvents, getEventById, updateEvent} from "../services/CalendarEventsService.ts";

const useEvents = () => {
    const [events, setEvents] = useState<CalendarEvent[]>([])

    useEffect(() => {
        loadEvents().catch(error => console.error(error))
    }, [])

    const convertDateStringsToObj = (event: CalendarEvent): CalendarEvent => {
        return {
            ...event,
            startDateTime: new Date(event.startDateTime),
            endDateTime: new Date(event.endDateTime)
        }
    }
    const loadEvents = async () => {
        getAllEvents()
            .then(events => setEvents(events.map(convertDateStringsToObj)))
            .catch(error => console.error(error))
    }

    const findById = async (id: string) => {
        try {
            return await getEventById(id).then(convertDateStringsToObj)
        } catch (error) {
            console.error(error)
        }
    }

    const add = async (event: CalendarEvent) => {
        try {
            await createEvent(event)
            loadEvents().catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    }

    const update = async (id: string, event: CalendarEvent) => {
        try {
            await updateEvent(id, event)
            loadEvents().catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    }

    const remove = async (id: string) => {
        try {
            await deleteEvent(id)
            loadEvents().catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    }

    return {events, add, update, remove, findById}
}

export default useEvents;
