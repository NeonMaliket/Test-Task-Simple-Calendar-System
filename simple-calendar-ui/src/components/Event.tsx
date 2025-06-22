// @flow
import type {EventContentArg} from "@fullcalendar/core";
import dayjs from "dayjs";
import type {FunctionComponent} from "react";
import {Tooltip} from "@mui/material";

interface EventProps {
    eventInfo: EventContentArg;
}

export const Event: FunctionComponent<EventProps> = ({eventInfo}) => {
    const start = dayjs(eventInfo.event.start).format("DD.MM.YYYY HH:mm");
    const end = dayjs(eventInfo.event.end).format("DD.MM.YYYY HH:mm");

    return (
        <Tooltip
            title={
                <div>
                    <div>{eventInfo.event.title}</div>
                    <div>{start} – {end}</div>
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
                <div style={{ fontWeight: "bold", marginBottom: "2px" }}>
                    {eventInfo.event.title || "(no title)"}
                </div>
                <div style={{ fontSize: "0.7rem" }}>
                    {start} – {end}
                </div>
            </div>
        </Tooltip>
    );
};
