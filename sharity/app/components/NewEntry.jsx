// src/components/NewEntry.jsx
import React from 'react';
import { Card, CardContent, Typography, Box, Divider, Button, IconButton, Backdrop } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import GetDate from './GetDate';

const NewEntry = ({ open, onClose, charity, items }) => {
  const hasManyItems = items.length > 5;

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <Card
        sx={{
          width: 500,
          borderRadius: 3,
          boxShadow: 3,
          bgcolor: 'background.paper',
          p: 2.5,
          position: 'relative', // To position the close button
        }}
      >
        <CardContent>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <IconButton>
              <EmailIcon color="primary" />
            </IconButton>
            <Typography variant="h6" component="div">
              Donating to: {charity}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <GetDate />
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2" color="textSecondary">
                SUMMARY
              </Typography>
              <Typography variant="body2" color="textSecondary">
                QTY
              </Typography>
            </Box>
            <Box
              sx={{
                maxHeight: hasManyItems ? 100 : 'auto', // Adjust the height as needed
                overflowY: hasManyItems ? 'auto' : 'visible',
                mt: 1,
                '&::-webkit-scrollbar': {
                  width: '0px', // For WebKit browsers (Chrome, Safari)
                  display: 'none',
                },
                '&': {
                  '-ms-overflow-style': 'none', // For Internet Explorer and Edge
                  'scrollbar-width': 'none', // For Firefox
                },
              }}
            >
              {items.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                  <Typography variant="body1">
                    Test
                  </Typography>
                  <Typography variant="body1">
                    1
                  </Typography>
                </Box>
              ))}
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body1" fontWeight="bold">
                Total
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                4
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
            <Button variant="text" startIcon={<EmailIcon />}>
              Email this receipt
            </Button>
            <Button variant="text" startIcon={<ChatIcon />}>
              Chat with us
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Backdrop>
  );
};

export default NewEntry;
