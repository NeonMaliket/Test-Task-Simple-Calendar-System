import type {FunctionComponent} from "react";
import {DateTimePicker as MuiDateTimePicker, PickersDay} from "@mui/x-date-pickers";
import {IconButton, styled} from "@mui/material";
import dayjs from "dayjs"

const StyledButton = styled(IconButton)(({theme}) => ({
    borderRadius: theme.shape.borderRadius,
}));
const StyledDay = styled(PickersDay)(({theme}) => ({
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.secondary.light,
    ...theme.applyStyles('light', {
        color: theme.palette.secondary.dark,
    }),
}));

type DateTimePickerProps = {
    value: Date,
    label: string,
    onSelected: (date: Date) => void
};
export const DateTimePicker: FunctionComponent<DateTimePickerProps> = (props: DateTimePickerProps) => {
    return (
        <div>
            <MuiDateTimePicker
                label={props.label}
                slots={{
                    openPickerButton: StyledButton,
                    day: StyledDay,
                }}
                value={ props.value ? dayjs(props.value) : null}
                onChange={(event) => props.onSelected(event?.toDate() ?? new Date())}
                slotProps={{
                    openPickerIcon: {fontSize: 'large'},
                    openPickerButton: {color: 'primary'},
                    textField: {
                        variant: 'filled',
                        focused: true,
                        color: 'primary',
                    },
                }}
            />
        </div>
    );
};
