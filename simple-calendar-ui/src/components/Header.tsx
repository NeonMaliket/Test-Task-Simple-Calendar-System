import {Box, Button} from "@mui/material";
import type {FunctionComponent} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import type {DateRange} from "../types/DateRange.ts";
import {datePlusOneDay} from "../shared/DateUtils.ts";

const CALENDAR_LOCATION = '/calendar'
const ADD_EVENT_LOCATION = '/calendar/event/new'

interface HeaderProps {
    title: string
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {
    const navigate = useNavigate()
    const location = useLocation()

    const onCalendarClick = () => navigate(CALENDAR_LOCATION)
    const onAddEventClick = () => {
        const range: DateRange = {
            start: new Date(),
            end: datePlusOneDay(new Date())
        }
        navigate(ADD_EVENT_LOCATION, {
            state: range
        })
    }

    const isCalendarPage = () => {
        return location.pathname === CALENDAR_LOCATION
    }

    return (
        <Box display="flex" justifyContent="space-between" width="100%">
            <div></div>
            <h1
                style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    margin: 0
                }}
            >{props.title}</h1>
            {isCalendarPage() && <Button onClick={onAddEventClick}>Add Event</Button>}
            {!isCalendarPage() && <Button onClick={onCalendarClick}>Calendar</Button>}
        </Box>
    );
}

export default Header;
