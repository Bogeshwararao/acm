import { useState } from 'react';  // Remove the second import for React
import axios from 'axios';

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
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
