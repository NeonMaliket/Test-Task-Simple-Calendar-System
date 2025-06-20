import { Box, Button } from "@mui/material";
import type { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    title: string
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {
    const navigate = useNavigate();
    const onCalendarClick = () => navigate('/calendar');

    return (<>
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
            <Button onClick={onCalendarClick}>Calendar</Button>
        </Box>
    </>);
}

export default Header;