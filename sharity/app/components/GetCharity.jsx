
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState,useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
export default function GetCharity({ selectedCharity,onChange}) {

    const [charities, setCharities] = useState([]); //use for listing out charity, 

    
    useEffect(() => {
        // Fetch the charity options from the JSON file
        fetch('/charities.json')
          .then(response => response.json())
          .then(data => setCharities(data))
          .catch(error => console.error('Error fetching charity data:', error));
    }, []);



    return(
    <FormControl 
    sx={{ marginRight: 2, width: '30ch' }} 
    >
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Autocomplete
        freeSolo
        options={charities.map((charity) => charity.name)} // Extract the charity names for options
        value={selectedCharity}
        
        onChange={(event, newValue) => onChange(newValue)} // Pass the selected value directly
        renderInput={(params) => (
          <TextField
            {...params}
            label="Charity"
            variant="outlined"
          />
        )}
      />
</FormControl>
    )
}