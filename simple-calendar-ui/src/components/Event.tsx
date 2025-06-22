// @flow
import type {EventContentArg} from "@fullcalendar/core";
import dayjs from "dayjs";
import type {FunctionComponent} from "react";
import {Tooltip} from "@mui/material";
import {getTimeZoneOffset, userTimeZone, withLocalTimeZone} from "../shared/DateUtils.ts";

interface EventProps {
    eventInfo: EventContentArg;
}

export const Event: FunctionComponent<EventProps> = ({eventInfo}) => {
    const start = dayjs(withLocalTimeZone(eventInfo.event.start!)).format("DD.MM.YYYY HH:mm");
    const end = dayjs(withLocalTimeZone(eventInfo.event.end!)).format("DD.MM.YYYY HH:mm");
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
                    { start} – {end}
                </div>
                <div style={{fontSize: "0.7rem", fontStyle: "bold"}}>
                    {userTimeZone} ({getTimeZoneOffset(userTimeZone)})
                </div>
            </div>
        </Tooltip>
    );
};
