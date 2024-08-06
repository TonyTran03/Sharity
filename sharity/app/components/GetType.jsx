import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState,useEffect } from 'react';

export default function GetType({ onChange }) {
  const [type, setType] = useState('Clothing');

  function handleChange(event) {
    const selectedType = event.target.value;

    setType(selectedType);
    
    if (onChange) {
      onChange(selectedType); // Call the callback function with the selected type
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange('Clothing'); // Call the callback function about the default value
    }
  }, []); 

  return (
    <FormControl sx={{ m: 1, minWidth: 130 }}>
      <InputLabel id="type-select-label">Type</InputLabel>
      <Select
        labelId="type-select-label"
        id="type-select"
        value={type}
        label="Type"
        onChange={handleChange}
      >
        <MenuItem value="Clothing">Clothing</MenuItem>
        <MenuItem value="Furniture">Furniture</MenuItem>
        <MenuItem value="Money">Money</MenuItem>
      </Select>
    </FormControl>
  );
}

