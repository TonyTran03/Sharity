'use client'

import { Box, Typography } from "@mui/material";
import { useState } from 'react';
import UserName from "../components/UserName.js";
import Navbar from "@/components/Navbar.jsx";
import TextField from '@mui/material/TextField';
import GetType from "@/components/GetType.jsx";
import { useUser } from '@auth0/nextjs-auth0/client';
import Select from '@mui/material/Select';
import GetCharity from "@/components/GetCharity.jsx";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

import NewEntry from "../components/NewEntry.jsx";
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
    { name: "Another Item", price: "$ 199.00" },{ name: "Another Item", price: "$ 199.00" }
    // Add more items as needed
  ];
  const [selectedType, setSelectedType] = useState('Clothing'); // Initialize with 'clothing'
  function handleTypeChange (type){
    setSelectedType(type);
  };

  const [selectedCharity, setSelectedCharity ] = useState(''); 
  function handleCharityChange(charity){ 
    setSelectedCharity(charity); 
  };


  const [article, setArticle] = useState([]);
  function handleArticleChange (event){
    const {
      target: { value },
    } = event;
    setArticle(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [furniture, setFurniture] = useState([]);
  function handleFurnitureChange (event){
    const {
      target: { value },
    } = event;
    setFurniture(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const [submit, setSubmit] = useState(false);
  function handleSubmit(event){
    event.preventDefault();
    setSubmit(true); // Open the popup on submit
  }


  const {user} = useUser();  
  if (!user) {
    return <Typography variant="h6" align="center">Loading...</Typography>;
  }
  return (

    <Box >
      <Navbar />
      <h1 style={{ 
        all: 'unset', 
        display: 'block', 
        fontSize: '2em', 
        marginBlockStart: '0.67em', 
        marginBlockEnd: '0.67em', 
        fontWeight: 'bold', 
        margin: '1em'
      }}>
        Donate today
        
      </h1>
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          margin: '25px 25px 0',
        }}
      >
        
        <GetType onChange={handleTypeChange} />

        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 1.5 }}>
          <TextField
          
            id="filled-read-only-input"
            label="Name"
            defaultValue={user.name}
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
            sx={{ marginRight: 2, width: '30ch'  }} 
          />

            
            <GetCharity selectedCharity={selectedCharity} onChange={handleCharityChange}/>
            

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
            //furniture
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
          <Button
            sx={{ ml: 1 }}
            variant="contained"
            endIcon={<AddCircleOutlineIcon />}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>



        
      </Box>

      <NewEntry open={submit} onClose={() => setSubmit(false)} items={items} /> 
    </Box>

  );
}
