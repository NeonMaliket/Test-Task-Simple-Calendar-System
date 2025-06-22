import { Tooltip, Typography } from "@mui/material";
import type {CSSProperties} from "react";

interface EllipsisWithTooltipProps {
    text: string;
    maxWidth?: number;
}

const EllipsisWithTooltip = ({ text, maxWidth = 200 }: EllipsisWithTooltipProps) => {
    const style: CSSProperties = {
        maxWidth,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'inline-block',
        verticalAlign: 'bottom'
    };

    return (
        <Tooltip title={text}>
            <Typography variant="body1" style={style}>
                {text}
            </Typography>
        </Tooltip>
    );
};

export default EllipsisWithTooltip;
