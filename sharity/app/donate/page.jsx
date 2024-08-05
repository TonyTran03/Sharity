'use client'

import { Box, Typography } from "@mui/material"
import {useState, useEffect} from 'react'
import UserName from "../components/UserName.js"
import Navbar from "@/components/Navbar.jsx"

export default function DonationBox(){
    const [date, setDate] = useState([]);
    const [charity, setChairty] = useState([]);
    const [amount, setAmount] = useState(0);
    const [items, setItem] = useState([]);
    

    return(
        
        <Box>
            <Navbar/>
            <Typography variant = "h3" align="center"> Hi, <UserName/>. Start donating today </Typography>
        </Box>
        
    )
}