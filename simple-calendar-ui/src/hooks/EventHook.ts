import {useEffect, useState} from "react";
import type {CalendarEvent} from "../types/CalendarEvent";
import {createEvent, deleteEvent, getAllEvents, getEventById, updateEvent} from "../api/CalendarEventsApi";

const useEvents = () => {
    const [events, setEvents] = useState<CalendarEvent[]>([])
    const [errors, setErrors] = useState<Error | null>()

    useEffect(() => {
        loadEvents().catch(error => setErrors(error))
    }, [])

    const loadEvents = async () => {
        getAllEvents()
            .then(events => setEvents(events))
            .catch(error => setErrors(error))
    }

    const findById = async (id: string) => {
        try {
            return await getEventById(id)
        } catch (error) {
            setErrors(error as Error)
        }
    }

    const add = async (event: CalendarEvent) => {
        try {
            await createEvent(event)
            loadEvents().catch(error => setErrors(error))
        } catch (error) {
            setErrors(error as Error)
        }
    }

    const update = async (id: string, event: CalendarEvent) => {
        try {
            await updateEvent(id, event)
            loadEvents().catch(error => setErrors(error))
        } catch (error) {
            setErrors(error as Error)
        }
    }

    const remove = async (id: string) => {
        try {
            await deleteEvent(id)
            loadEvents().catch(error => setErrors(error))
        } catch (error) {
            setErrors(error as Error)
        }
    }

    return {events, errors, add, update, remove, findById}
}

export default useEvents;
