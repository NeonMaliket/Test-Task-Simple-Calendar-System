import { Button, Card, CardActions } from "@mui/material";
import { useState, type FunctionComponent } from "react";
import CardInput from "../components/CardInput";
import useEvents from "../hooks/EventHook";
import type { CalendarEvent } from "../types/CalendarEvent";
import { useNavigate, useParams } from "react-router-dom";

const EditEventPage: FunctionComponent = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { add, update, findById } = useEvents()
    const [event, setEvent] = useState<CalendarEvent>(id ? findById(id)! : {
        id: null,
        title: "",
        description: "",
        location: "",
        startDateTime: new Date(),
        endDateTime: new Date(),
    });

    const disabledButton = (): boolean => {
        return (
            !event.title.trim() ||
            !event.description.trim() ||
            !event.location.trim() ||
            !event.startDateTime ||
            !event.endDateTime
        );
    }

    const addOrUpdate = () => {
        if (id) {
            update(id, event)
        } else {
            add(event)
        }
        navigate('/calendar')
    }

    return (<>
        <div className="center">
            <Card className="event-card">
                <CardInput label="Title" icon="title" value={event.title} onChange={(text) => setEvent({ ...event, title: text })} />
                <CardInput label="Description" icon="description" value={event.description} onChange={(text) => setEvent({ ...event, description: text })} />
                <CardInput label="Location" icon="add_location_alt" value={event.location} onChange={(text) => setEvent({ ...event, location: text })} />
                <CardInput label="Start Date" icon="today" value={event.startDateTime?.toISOString()} onChange={(text) => setEvent({ ...event, startDateTime: new Date() })} />
                <CardInput label="End Date" icon="work_history" value={event.endDateTime?.toISOString()} onChange={(text) => setEvent({ ...event, endDateTime: new Date() })} />
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button size="small" disabled={disabledButton()} onClick={addOrUpdate}>Add</Button>
                </CardActions>
            </Card>
        </div>
    </>);
}

export default EditEventPage;