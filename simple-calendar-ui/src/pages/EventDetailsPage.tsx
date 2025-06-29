import React, {useEffect, useState} from "react";
import type {CalendarEvent} from "../types/CalendarEvent";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import CardRow from "../components/CardRow";
import useEvents from "../hooks/EventHook";
import {formattedDate} from "../shared/DateUtils.ts";


const EventDetailsPage: React.FC = () => {
    const navigate = useNavigate()
    const {findById, remove} = useEvents()
    const {id} = useParams<string>()
    const [event, setEvent] = useState<CalendarEvent>()

    useEffect(() => {
        if (!id) return
        findById(id)
            .then(result => {
                if (!result) {
                    navigate('/calendar')
                } else {
                    setEvent(result)
                }
            })
            .catch(console.error)
    }, [id])

    const editEvent = () => {
        navigate(`/calendar/event/edit/${id}`)
    }

    const deleteEvent = async () => {
        if (id) {
            await remove(id)
        }
        navigate('/calendar')
    }

    return (
        <div className="center">
            <Card className="event-card">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {event?.title}
                    </Typography>
                    <CardRow title="Description" icon="description" desc={event?.description}></CardRow>
                    <CardRow title="Location" icon="add_location_alt" desc={event?.location}></CardRow>
                    <CardRow title="Start Date" icon="today"
                             desc={event && formattedDate(event.startDateTime)}></CardRow>
                    <CardRow title="End Date" icon="work_history"
                             desc={event && formattedDate(event.endDateTime)}></CardRow>
                </CardContent>
                <CardActions sx={{justifyContent: 'flex-end'}}>
                    <Button size="small" color="error" onClick={deleteEvent}>Delete</Button>
                    <Button size="small" onClick={editEvent}>Edit</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default EventDetailsPage
