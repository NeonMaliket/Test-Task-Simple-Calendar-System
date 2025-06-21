import React, { useEffect, useState } from "react";
import type { CalendarEvent } from "../types/CalendarEvent";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import CardRow from "../components/CardRow";
import useEvents from "../hooks/EventHook";


const EventDetailsPage: React.FC = () => {
    const navigate = useNavigate()
    const { findById, remove } = useEvents()
    const { id } = useParams<string>()
    const [event, setEvent] = useState<CalendarEvent>()

    useEffect(() => {
        if (id) {
            const result = findById(id);
            //TODO: with some validator hz
            if (!result) {
                navigate('/calendar')
            }
            setEvent(result);
        }
    }, [id, findById, navigate])


    const editEvent = () => {
        navigate(`/calendar/event/edit/${event?.id}`)
    }

    const deleteEvent = () => {
        if (id) {
            remove(id)
        }
        navigate('/calendar')
    }

    return (<>
        <div className="center">
            <Card className="event-card">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {event?.title}
                    </Typography>
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
        </div>
    </>)
}

export default EventDetailsPage
