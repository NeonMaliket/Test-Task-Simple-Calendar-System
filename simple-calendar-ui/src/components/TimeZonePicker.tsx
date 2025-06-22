import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
// @ts-ignore
import {listTimeZones} from 'timezone-support';
import {useState} from "react";
import {userTimeZone} from "../shared/DateUtils.ts";

const TimeZoneSelector = ({onChange}: {
    onChange: (zone: string) => void
}) => {
    const timeZones = listTimeZones();
    const [selectedZone, setSelectedZone] = useState(
        userTimeZone
    );

    const onChangeZone = (zone: string) => {
        setSelectedZone(zone);
        onChange(zone);
    }

    return (
        <FormControl fullWidth>
            <InputLabel>Time Zone</InputLabel>
            <Select
                value={selectedZone}
                MenuProps={{
                    PaperProps: {
                        style: {
                            maxHeight: 300,
                        },
                    },
                }}
                sx={{fontSize: 14}}
                label="Time Zone"
                onChange={(e) => onChangeZone(e.target.value)}
            >
                {timeZones.map((zone: string) => (
                    <MenuItem key={zone} value={zone}>
                        {zone}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default TimeZoneSelector;
