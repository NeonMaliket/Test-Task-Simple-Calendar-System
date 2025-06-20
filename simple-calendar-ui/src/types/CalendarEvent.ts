export interface CalendarEvent {
    id: string
    title: string
    description: string
    startDateTime: Date | null
    endDateTime: Date | null
    location: string
}