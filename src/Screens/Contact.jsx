import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Components/Footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the server
      await axios.post('http://localhost:5001/api/contact', formData);

      // Clear form after successful submission
      setFormData({ username: '', email: '', phone: '' });

      console.log('Data sent successfully');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5 flex-grow-1">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
