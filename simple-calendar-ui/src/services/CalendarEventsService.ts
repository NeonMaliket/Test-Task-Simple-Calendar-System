import type {CalendarEvent} from "../types/CalendarEvent";
import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/calendar/events';

export const createEvent = async (event: CalendarEvent): Promise<CalendarEvent> => {
    const response = await axios.post(BASE_URL, event);
    return response.data;
};

export const getAllEvents = async (): Promise<CalendarEvent[]> => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

export const getEventById = async (id: string): Promise<CalendarEvent> => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
};

export const updateEvent = async (id: string, event: CalendarEvent): Promise<CalendarEvent> => {

    console.log("IN PROMISE: ", event, "")
    const response = await axios.put(`${BASE_URL}/${id}`, event);
    return response.data;
};

export const deleteEvent = async (id: string): Promise<void> => {
    await axios.delete(`${BASE_URL}/${id}`);
};
