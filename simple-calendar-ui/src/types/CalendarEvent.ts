export interface CalendarEvent {
    id?: string | null
    title: string
    description?: string
    startDateTime: Date
    endDateTime: Date
    location?: string
}
