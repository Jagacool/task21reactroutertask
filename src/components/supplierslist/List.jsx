import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../utils/axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axiosInstance.get()
      .then(response => setList(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Box sx={{ bgcolor: '#cfe8fc', p: "5rem" }} align="center">
      {/* ... (Rest of the List component content) */}
    </Box>
  );
}

export default List;
