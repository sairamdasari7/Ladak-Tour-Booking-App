import React from 'react';
import './Service.css';
import { FaWifi, FaUtensils, FaHome, FaCar, FaConciergeBell, FaMountain, FaSuitcase, FaShoppingCart } from 'react-icons/fa';

const Services = () => (
  <section className="services">
    <h2>Our Services</h2>
    <div className="services-list">
      <div className="service-item">
        <FaWifi size={32} />
        <h3>High-Speed Internet</h3>
        <p>Optical fiber connections provided not only in your cabins but also in scenic working spaces and dining areas.</p>
      </div>
      <div className="service-item">
        <FaUtensils size={32} />
        <h3>Healthy Meals</h3>
        <p>Enjoy a healthy breakfast and pleasant dinner daily.</p>
      </div>
      <div className="service-item">
        <FaHome size={32} />
        <h3>Homely Stay</h3>
        <p>Spacious interiors for a cozy workation experience.</p>
      </div>
      <div className="service-item">
        <FaCar size={32} />
        <h3>Transportation</h3>
        <p>Convenient and comfortable transportation options.</p>
      </div>
      <div className="service-item">
        <FaConciergeBell size={32} />
        <h3>Food Delivery</h3>
        <p>Access to timely food delivery services.</p>
      </div>
      <div className="service-item">
        <FaMountain size={32} />
        <h3>Tourism</h3>
        <p>Guided tours to explore Ladakh's beauty.</p>
      </div>
      <div className="service-item">
        <FaSuitcase size={32} />
        <h3>Job Support</h3>
        <p>Spaces equipped to support your remote work.</p>
      </div>
      <div className="service-item">
        <FaShoppingCart size={32} />
        <h3>Rental Service</h3>
        <p>Access to various rental services for a comfortable stay.</p>
      </div>
    </div>
  </section>
);

export default Services;
