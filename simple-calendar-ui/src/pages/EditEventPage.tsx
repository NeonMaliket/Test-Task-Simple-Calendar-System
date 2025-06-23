import {Box, Button, Card, CardActions, Stack, Typography} from "@mui/material";
import {type FunctionComponent, useEffect, useState} from "react";
import CardInput from "../components/CardInput";
import useEvents from "../hooks/EventHook";
import type {CalendarEvent} from "../types/CalendarEvent";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {DateTimePicker} from "../components/DateTimePicker.tsx";
import dayjs from "dayjs";


const EditEventPage: FunctionComponent = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    const {add, update, findById} = useEvents()
    const [event, setEvent] = useState<CalendarEvent>({
        id: null,
        title: "",
        description: "",
        location: "",
        startDateTime: dayjs(location.state?.start).toDate() ?? new Date(),
        endDateTime: dayjs(location.state?.end).toDate() ?? new Date()
    });

    useEffect(() => {
        if (id) {
            findById(id)
                .then((localEvent) => {
                    if (localEvent) {
                        setEvent(localEvent)
                    }
                })
        }
    }, [id])

    const isDatesValid = () => {
        const startDateTime = event.startDateTime
        const endDateTime = event.endDateTime

        return startDateTime && endDateTime && startDateTime < endDateTime
    }

    const disabledButton = (): boolean => {
        return (
            !event.title.trim() ||
            !event.startDateTime ||
            !event.endDateTime ||
            !isDatesValid()
        );
    }

    const addOrUpdate = async () => {
        if (id) {
            await update(id, event)
        } else {
            await add(event)
        }
        navigate('/calendar')
    }

    return (
        <div className="center">
            <Card className="event-card">
                <CardInput label="Title" icon="title" value={event.title}
                           maxLength={20}
                           required
                           onChange={(text) => setEvent({...event, title: text})}/>
                <CardInput label="Description" icon="description" value={event.description}
                           maxLength={50}
                           onChange={(text) => setEvent({...event, description: text})}/>
                <CardInput label="Location" icon="add_location_alt" value={event.location}
                           onChange={(text) => setEvent({...event, location: text})}/>
                <Box height="25px"/>
                <Stack direction="row" justifyContent="space-between">
                    <DateTimePicker value={event.startDateTime}
                                    onSelected={(date) => setEvent({...event, startDateTime: date})}
                                    label="Start Date Time"/>
                    <DateTimePicker value={event.endDateTime}
                                    onSelected={(date) => setEvent({...event, endDateTime: date})}
                                    label="End Date Time"/>
                </Stack>
                <Box height="25px"/>
                {!isDatesValid() && (
                    <Box mt={2} ml={1}>
                        <Typography variant="body2" color="error">
                            End date must be after start date.
                        </Typography>
                    </Box>
                )}
                <Box height="25px"/>
                <CardActions sx={{justifyContent: 'flex-end'}}>
                    <Button size="small" disabled={disabledButton()}
                            onClick={addOrUpdate}>{id ? 'Edit' : 'Add'}</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default EditEventPage;
