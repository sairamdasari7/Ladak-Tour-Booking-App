// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Service from './components/Service';
import BookingForm from './pages/BookingForm';
import './styles/App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Service />} />
                <Route path="/booking" element={<BookingForm />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
