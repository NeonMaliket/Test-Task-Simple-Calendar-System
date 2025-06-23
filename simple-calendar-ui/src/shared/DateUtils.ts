import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import {DATE_FORMAT} from "../constants/DateConstants.ts";

dayjs.extend(utc);
dayjs.extend(timezone);

export const datePlusOneHour = (date: Date) => new Date(date.getTime() + 60 * 60 * 1000)

export const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

export const formattedDate = (date: Date | string | null) => {
    return dayjs(date).format(DATE_FORMAT)
}

export const getTimeZoneOffset = (timeZone?: string) => {
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour12: false,
        timeZoneName: 'shortOffset',
    }
    const formatter = new Intl.DateTimeFormat('en-US', options)
    const parts = formatter.formatToParts(now)
    return parts.find(p => p.type === 'timeZoneName')?.value
};
