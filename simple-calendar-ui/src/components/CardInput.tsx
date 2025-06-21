import {Box, FormControl, FormHelperText, Icon, TextField} from "@mui/material";
import {type FunctionComponent, useState} from "react";

interface CardInputProps {
    label: string
    value: string | null | undefined
    icon: string
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

    return (
        <Box display="flex" alignItems="flex-end" height="75px">
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
                        }
                    }}
                    label={props.label}
                    variant="standard"
                    value={props.value}
                    fullWidth
                    onChange={(event) => onChange(event.target.value)}
                />
                {(error && <FormHelperText>{error}</FormHelperText>)}
            </FormControl>
        </Box>
    );
}

export default CardInput;
