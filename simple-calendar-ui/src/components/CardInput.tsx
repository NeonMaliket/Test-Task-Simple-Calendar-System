import {Box, FormControl, Icon, TextField} from "@mui/material";
import {type FunctionComponent, useState} from "react";

interface CardInputProps {
    label: string
    value: string | null | undefined
    icon: string
    maxLength?: number
    onChange: (text: string) => void
}

const CardInput: FunctionComponent<CardInputProps> = (props) => {

    const [error, setError] = useState<string>('')

    const onChange = (text: string) => {
        if (!text) {
            setError('Required')
        } else {
            setError('')
        }
        props.onChange(text)
    }

    const lengthInfo = props.maxLength
        ? `${(props.value ?? '').length}/${props.maxLength}`
        : undefined


    return (
        <Box display="flex" alignItems="center" height="75px">
            <Icon fontSize="large" color="primary">
                {props.icon}
            </Icon>
            <Box mx={2}/>
            <FormControl error variant="standard" fullWidth>
                <TextField
                    required
                    slotProps={{
                        inputLabel: {
                            shrink: Boolean(props.value)
                        },
                        input: {
                            inputProps: {
                                maxLength: props.maxLength,
                            },
                        }
                    }}
                    label={props.label}
                    variant="standard"
                    value={props.value}
                    fullWidth
                    onChange={(event) => onChange(event.target.value)}
                    helperText={
                        error || lengthInfo
                    }
                    error={Boolean(error)}
                />
            </FormControl>
        </Box>
    );
}

export default CardInput;
