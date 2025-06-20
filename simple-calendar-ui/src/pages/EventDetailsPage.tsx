import React, { useEffect, useState } from "react";
import type { CalendarEvent } from "../types/CalendarEvent";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Card, CardActions, CardContent} from "@mui/material";
import CardRow from "../components/CardRow";
import Header from "../components/Header";


const EventDetailsPage: React.FC = () => {
    const navigate = useNavigate()
    const { id } = useParams<string>()
    const [event, setEvent] = useState<CalendarEvent>()

    useEffect(() => {
        setEvent({
            id: id?.toString() ?? "asd",
            title: "title",
            description: "Lorem ipsum, description",
            startDateTime: new Date(),
            endDateTime: new Date(),
            location: "loc"
        })
    }, [id])


    const editEvent = () => {
        navigate(`/calendar/event/edit/${event?.id}`)
    }

    const deleteEvent = () => {
        navigate('/calendar')
    }

    return (<>
        <Header title={event?.id === '4' ? "4 event title" : "1 event title"} />
        <Box height="3vw"/>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Card className="event-card">
                <CardContent>
                    <CardRow title="Description" icon="description" desc={event?.description}></CardRow>
                    <CardRow title="Location" icon="add_location_alt" desc={event?.location}></CardRow>
                    <CardRow title="Start Date" icon="today" desc={event?.startDateTime?.toDateString() ?? ""}></CardRow>
                    <CardRow title="End Date" icon="work_history" desc={event?.endDateTime?.toDateString() ?? ""}></CardRow>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button size="small" color="error" onClick={deleteEvent}>Delete</Button>
                    <Button size="small" onClick={editEvent}>Edit</Button>
                </CardActions>
            </Card>
        </Box>
    </>)
}

export default EventDetailsPage
