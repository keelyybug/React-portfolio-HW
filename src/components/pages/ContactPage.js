import React from 'react';
import { useState } from "react";
import bootrap from 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

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
    }
  };

  return (
    <Container className=''>
      <h2>Let's Get Started On Something Great!</h2>
      <Row>
        <Col Lg='7' className='d-flex align-items-center'>
          <form className='w-100' onSubmit={handleSubmit}>
            <Row>
              <Col>
              <label htmlFor="name">What is your name?</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder='Doe' />
              </Col>
              <Col>
              <label htmlFor="email">What is your email?</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='Doe@email.com' />
              </Col>
              <Col>
              <label htmlFor="company">What is the name of your organization?</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder='Doe.Co' />
              </Col>
              <Col>
              <label htmlFor="service">What services are you looking for?</label>
              <input type="text" id="service" name="service" value={formData.service} onChange={handleChange} placeholder='Web Design etc.' />
              </Col>
              <Col>
              <label htmlFor="message">Anything Else?</label>
              <input type="text" id="message" name="message" value={formData.message} onChange={handleChange} placeholder='Cant Wait To Meet' />
              </Col>
            </Row>
            {/* <label htmlFor="name">What is your name?</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

            <label htmlFor="email">What is your email?</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

            <label htmlFor="company">What is the name of your organization?</label>
            <textarea id="company" name="company" value={formData.company} onChange={handleChange} />

            <label htmlFor="service">What services are you looking for?</label>
            <textarea id="service" name="service" value={formData.service} onChange={handleChange} />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} /> */}

            <button type="submit">Send it!</button>
            {error && <p>Oops! You forgot something!</p>}
          </form>
      </Col>
      <Col className='mb-5'>
      <h3 className='py-4'>add icon image here, My Information</h3>
          <br/>
          <address>
            <strong>do emailJS</strong>
          </address>
          <br/>
          <br/>
          <h2>add socials from footer</h2>
      </Col>
      </Row>
    </Container>
  );
}

