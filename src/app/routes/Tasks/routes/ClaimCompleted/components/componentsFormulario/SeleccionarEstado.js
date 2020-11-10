import React from 'react'

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
    {
        value: 'Demo 1',
    },
    {
        value: 'Demo 2',
    },
    {
        value: 'Demo 3',
    },
    {
        value: 'Demo 4',
    },
];

const ModeloSelect = ({ filters, setFilters }) => {

    return (
        <div className="row">
            <div className="p-3 col-md-12 col-12">
                <FormControl variant="outlined" className="w-100 mb-2">
                    <InputLabel>Estado</InputLabel>
                    <Select
                        label="Estado"
                        onChange={e => setFilters({
                            ...filters,
                            currencyInput: e.target.value
                        })}
                    >
                        {currencies.map(curriencie => 
                            <MenuItem key={curriencie.value} value={curriencie.value || ''}>
                                {curriencie.value || ''}
                            </MenuItem>
                        )}
                        
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default ModeloSelect