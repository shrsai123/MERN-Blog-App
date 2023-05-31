import React from 'react';
import {BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import EditPost from '../components/EditPost';
import NewPost from '../components/NewPost';
import DeletePost from '../components/DeletePost';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>

       <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<NewPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/delete/:id" element={<DeletePost />} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;