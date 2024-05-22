import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './layout/Header';
import Home from './page/Home';
import Signin from './page/Signin';
import Signup from './page/Signup';

function App() {
 
  return (
    <Router>
      <ToastContainer />
      <Header />
      <Routes>
      <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
