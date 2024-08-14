'use client'
import React from 'react';
import { Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, OutlinedInput } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import GetType from "@/components/GetType.jsx";
import GetCharity from "@/components/GetCharity.jsx";
import NewEntry from "../components/NewEntry.jsx";
import CharityCarousel from '@/components/CharityCarousel.jsx';

export default function DonationBox() {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const clothesOptions = ["Shirt", "Hat", "Pants", "Shoes", "Jacket"];
  const furnitureOptions = ["Table", "Chair", "Sofa", "Bed", "Cabinet"];
  const items = [
    { name: "Adidas NMD R1 OG", price: "$ 349.00" },
    { name: "LV Porte-Documents Jour", price: "$ 1,650.00" },
    { name: "Another Item", price: "$ 199.00" },
    { name: "Another Item", price: "$ 199.00" }
  ];

  const [selectedType, setSelectedType] = useState('Clothing');
  const [selectedCharity, setSelectedCharity] = useState('');
  const [article, setArticle] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [submit, setSubmit] = useState(false);
  
  const { user } = useUser();  
  if (!user) {
    return <Typography variant="h6" align="center">Loading...</Typography>;
  }

  function handleTypeChange(type) {
    setSelectedType(type);
  }

  function handleCharityChange(charity) { 
    setSelectedCharity(charity); 
  }

  function handleArticleChange(event) {
    const {
      target: { value },
    } = event;
    setArticle(typeof value === 'string' ? value.split(',') : value);
  }

  function handleFurnitureChange(event) {
    const {
      target: { value },
    } = event;
    setFurniture(typeof value === 'string' ? value.split(',') : value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmit(true); // Open the popup on submit
  }

  return (

    
    <div>
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          margin: '25px 25px 0',
          width: '50%', // This sets the width of the form area to half the screen
        }}
      >
      
        <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
          Donate today
        </Typography>
        
        <GetType onChange={handleTypeChange} sx={{ width: '100%', mb: 2 }} />

        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 2 }}>
          <TextField
            id="filled-read-only-input"
            label="Name"
            defaultValue={user.name}
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
            sx={{ flex: 1 }} 
          />

          <GetCharity selectedCharity={selectedCharity} onChange={handleCharityChange}  sx={{ flex: 1 }} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', mt: 2 }}>
          {selectedType === "Clothing" ? (
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-checkbox-label">Clothes</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={article}
                onChange={handleArticleChange}
                input={<OutlinedInput label="Clothes" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {clothesOptions.map((clothesOptions) => (
                  <MenuItem key={clothesOptions} value={clothesOptions}>
                    <Checkbox checked={article.indexOf(clothesOptions) > -1} />
                    <ListItemText primary={clothesOptions} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : selectedType === "Money" ? (
            <TextField
              type="search"
              fullWidth
              id="outlined-helperText"
              label="Enter an Amount"
            />
          ) : (
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-checkbox-label">Furniture</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={furniture}
                onChange={handleFurnitureChange}
                input={<OutlinedInput label="Furniture" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >

                
                {furnitureOptions.map((furnitureOptions) => (
                  <MenuItem key={furnitureOptions} value={furnitureOptions}>
                    <Checkbox checked={furniture.indexOf(furnitureOptions) > -1} />
                    <ListItemText primary={furnitureOptions} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Box>

        <Button
          sx={{ mt: 3, alignSelf: 'flex-start' }}
          variant="contained"
          endIcon={<AddCircleOutlineIcon />}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>

      <NewEntry open={submit} onClose={() => setSubmit(false)} items={items} />


    </div>

  );
}
