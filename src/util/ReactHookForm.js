import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Controller } from 'react-hook-form';

export function TextFieldHook(props) {

    const { name, label, value, variant, margin, control, errors, textHelp, isRequired } = props

    return (
        <FormControl error={errors[name]} fullWidth>
            <Controller
                as={TextField}
                name={name}
                label={label}
                control={control}
                defaultValue={value ? value : ""}
                variant={variant}
                margin={margin}
                error={errors[name]}
                rules={{
                    required: {isRequired},
                }}
            />
            {errors[name] && (
                <FormHelperText>{textHelp}</FormHelperText>
            )}
        </FormControl>
    )
}




