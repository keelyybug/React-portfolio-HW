import React from 'react';
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.company === "" ||
      formData.service === "" ||
      formData.message === ""
    ) {
      setError(true);
    } else {
      setError(false);
      alert(`Name: ${formData.name}, Email: ${formData.email}, Company: ${formData.company}, Service: ${formData.service}, Message: ${formData.message}`);
    }
  };

  return (
    <div>
      <h2>Let's Get Started On Something Great!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">What is your name?</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="email">What is your email?</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        <label htmlFor="company">What is the name of your organization?</label>
        <textarea id="company" name="company" value={formData.company} onChange={handleChange} />

        <label htmlFor="service">What services are you looking for?</label>
        <textarea id="service" name="service" value={formData.service} onChange={handleChange} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} />

        <button type="submit">Send it!</button>
      </form>
    </div>
  );
}

