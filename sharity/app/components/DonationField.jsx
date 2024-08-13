import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useUser } from '@auth0/nextjs-auth0/client';
export default function FormPropsTextFields() {
    

  const { user, error, isLoading } = useUser();

}