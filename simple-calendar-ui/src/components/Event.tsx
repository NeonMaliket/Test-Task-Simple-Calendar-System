// @flow
import type {EventContentArg} from "@fullcalendar/core";
import type {FunctionComponent} from "react";
import {Tooltip} from "@mui/material";
import {formattedDate, getTimeZoneOffset, userTimeZone} from "../shared/DateUtils.ts";

interface EventProps {
    eventInfo: EventContentArg;
}

export const Event: FunctionComponent<EventProps> = ({eventInfo}) => {
    const start = formattedDate(eventInfo.event.start);
    const end = formattedDate(eventInfo.event.end);
    const {timeZone} = eventInfo.event.extendedProps;
    return (
        <Tooltip
            title={
                <div>
                    <div>{eventInfo.event.title}</div>
                    <div>{start} – {end}</div>
                    <div>{timeZone} ({getTimeZoneOffset(timeZone)})</div>
                </div>
            }
            arrow
        >
            <div
                style={{
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    whiteSpace: "normal",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    padding: "2px"
                }}
            >
                <div style={{fontWeight: "bold", marginBottom: "2px"}}>
                    {eventInfo.event.title || "(no title)"}
                </div>
                <div style={{fontSize: "0.7rem"}}>
                    {start} – {end}
                </div>
                <div style={{fontSize: "0.7rem", fontStyle: "bold"}}>
                    {userTimeZone} ({getTimeZoneOffset(userTimeZone)})
                </div>
            </div>
        </Tooltip>
    );
};
