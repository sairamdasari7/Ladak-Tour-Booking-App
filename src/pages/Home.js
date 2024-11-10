// src/pages/Home.js
import React from 'react';
import BookingForm from './BookingForm';
import Service from '../components/Service';

function Home() {
    return (
        <div>
        <BookingForm/>
            <div>
                <h2>Welcome to Brisphere</h2>
                <p>Discover a unique workation experience in Ladakh.</p>
            </div>
        <Service/>
        </div>
    );
}

export default Home;
