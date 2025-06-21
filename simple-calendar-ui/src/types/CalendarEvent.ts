export interface CalendarEvent {
    id?: string | null
    title: string
    description: string
    startDateTime?: Date | null
    endDateTime?: Date | null
    location: string
}
