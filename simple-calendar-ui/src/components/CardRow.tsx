import {Box, Icon, Stack} from "@mui/material";
import type {FunctionComponent} from "react";
import EllipsisWithTooltip from "./EllipsisWithTooltip.tsx";

interface CardRowProps {
    desc: string | undefined,
    title: string,
    icon: string
}

const CardRow: FunctionComponent<CardRowProps> = (props) => {

    return (
        <Box display="flex" justifyContent="flex-start" alignItems="center">
            <Icon fontSize="large" color="primary">
                {props.icon}
            </Icon>
            <Box mx={2}/>
            <Stack direction="row"
                   justifyContent="space-between"
                   alignItems="center"
                   width="100%">
                <h3>{props.title}</h3>
                <Box textAlign="right">
                    <EllipsisWithTooltip text={props.desc ?? ''} />
                </Box>
            </Stack>
        </Box>
    );
}

export default CardRow;
