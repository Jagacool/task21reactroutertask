import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DrawerAppBar from './components/navbar/Navbar';
import HomePage from './components/homepage/HomePage';
import List from './components/supplierslist/List';
import Details from './components/supplierslist/Details';
import AddItem from './components/addsupplier/AddItem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DrawerAppBar />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/Suppliers" element={<List />} />
          <Route path="/Suppliers/:id" element={<Details />} />
          <Route path="/Add" element={<AddItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
