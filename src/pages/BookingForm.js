// src/pages/BookingForm.js
import React, { useState } from 'react';
import axios from 'axios';

function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        checkIn: '',
        checkOut: '',
        guests: 1
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://jsonplaceholder.typicode.com/todos', formData);
            alert('Booking submitted successfully');
        } catch (error) {
            alert('Failed to submit booking');
        }
    };
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input type="date" name="checkIn" onChange={handleChange} />
            <input type="date" name="checkOut" onChange={handleChange} />
            <button type="submit">Book Now</button>
        </form>
    );
}

export default BookingForm;
