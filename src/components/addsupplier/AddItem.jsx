import React, { useState } from 'react';
import { axiosInstance } from '../../utils/axios';

function AddItem() {
  const [name, setName] = useState('');
  const [contactName, setContactName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [phone, setPhone] = useState('');
  const [region, setRegion] = useState('');
  const [postal, setPostal] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const supplier = {
      companyName: name,
      contactName: contactName,
      contactTitle: title,
      address: {
        street: street,
        city: city,
        region: region,
        postalCode: postal,
        country: country,
        phone: phone
      }
    };
    
    axiosInstance.post('/', supplier)
      .then(response => {
        console.log(response);
        window.location = "/Suppliers";
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div id="addContainer">
      <h1>Add new supplier</h1>
      <form id="formcustom">
        {/* Form fields and inputs */}
        {/* ... */}
        <div id="button_container_custom">
          <button id="submitButtonCustom" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
