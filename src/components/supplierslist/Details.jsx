import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../utils/axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Details() {
  const [supplier, setSupplier] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axiosInstance.get(`/${id}`)
      .then(response => setSupplier(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const card = (
    <CardContent>
      {/* ... (Rest of the card content) */}
    </CardContent>
  );

  return (
    <Box sx={{ minWidth: 275, m: "15rem" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

export default Details;
