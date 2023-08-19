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
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location = "/Suppliers";
      })
      .catch(error => console.error(error));
  };

  return (
    <div id='addContainer'>
      {/* ... (Rest of the AddItem component content) */}
    </div>
  );
}

export default AddItem;
