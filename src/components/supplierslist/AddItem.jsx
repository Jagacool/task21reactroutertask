import React, { useState } from 'react';
import { axiosInstance } from '../../utils/axios';

function AddItem() {
  const [name, setName] = useState('');
  const [contactName, setContactName] = useState('');
  // ... (Rest of the state variables)

  const handleSubmit = (event) => {
    event.preventDefault();
    const supplier = {
      companyName: name,
      contactName: contactName,
      // ... (Rest of the supplier object properties)
    };

    axiosInstance.post('', supplier)
      .
