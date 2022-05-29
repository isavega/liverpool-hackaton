import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const BikeCard = (bikeInfo) => {
    return (
      <Card variant="outlined" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {bikeInfo.address}
          </Typography>
          <Typography variant="h5" component="div">
            {bikeInfo.title}
          </Typography>
          <CardMedia
                component="img"
                height="140"
                image={bikeInfo.img_url}
            />    
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {bikeInfo.price}
          </Typography>
          <Typography variant="body2">
            {bikeInfo.available}
            <br />
            {bikeInfo.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">arrendar</Button>
        </CardActions>
      </Card>
    );
  }

export default BikeCard

