'use client'

import { Box, Typography } from "@mui/material"
import {useState, useEffect} from 'react'
import UserName from "./UserName"

export default function DonationBox(){

    const [date, setDate] = useState([]);
    const [charity, setChairty] = useState([]);
    const [amount, setAmount] = useState(0);

    

    return(
        <Box>
            <Typography variant = "h2" align="center"> Hi, <UserName/>, view your donations here </Typography>
        </Box>
        
    )
}