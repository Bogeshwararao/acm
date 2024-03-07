import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Components/Footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
  });

  const [searchEmail, setSearchEmail] = useState('');
  const [searchResult, setSearchResult] = useState(null);

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

  const handleSearch = async () => {
    try {
      // Fetch data from the server based on searchEmail
      const response = await axios.get(`http://localhost:5001/api/data/${searchEmail}`);
      setSearchResult(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5 flex-grow-1">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              {/* ... (Your form fields) */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Search Bar */}
        <div className="row justify-content-center mt-3">
          <div className="col-md-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search by email"
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Display Search Result */}
        {searchResult && (
          <div className="row justify-content-center mt-3">
            <div className="col-md-6">
              <h3>Search Result:</h3>
              <p>
                <strong>Username:</strong> {searchResult.username}
              </p>
              <p>
                <strong>Email:</strong> {searchResult.email}
              </p>
              <p>
                <strong>Phone:</strong> {searchResult.phone}
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
