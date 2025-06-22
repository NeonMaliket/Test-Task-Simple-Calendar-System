import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import type {CalendarEvent} from "../types/CalendarEvent.ts";

dayjs.extend(utc);
dayjs.extend(timezone);
export const datePlusOneHour = (date: Date) => new Date(date.getTime() + 60 * 60 * 1000)

export const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

export const convertEventToUtc = (event: CalendarEvent): CalendarEvent => ({
    ...event,
    startDateTime: dayjs.tz(event.startDateTime, event.timeZone).utc().toDate(),
    endDateTime: dayjs.tz(event.endDateTime, event.timeZone).utc().toDate(),
})
export const withLocalTimeZone = (date: string | Date) => dayjs.utc(date).tz(userTimeZone)

export const getTimeZoneOffset = (timeZone?: string) => {
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour12: false,
        timeZoneName: 'shortOffset' as 'shortOffset',
    }
    const formatter = new Intl.DateTimeFormat('en-US', options)
    const parts = formatter.formatToParts(now)
    return parts.find(p => p.type === 'timeZoneName')?.value
};
