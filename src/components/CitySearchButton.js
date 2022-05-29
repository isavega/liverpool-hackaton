import Button from '@mui/material/Button';
import React from 'react'
import { TextField } from '@mui/material';

// Search button, will pass city search data to resultados

const CitySearchButton = (handleChange) => {
    return (
        <div>
            <TextField  onChange={handleChange} id="outlined-basic" label="Ciudad" variant="outlined" />
        </div>
    )
}

export default CitySearchButton