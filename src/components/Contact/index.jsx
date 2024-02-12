import React ,{useState} from 'react'
import './ContactForm.css';
const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const validateForm = () => {
    return formValues.name && formValues.email && formValues.message;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      // Reset the form
      setFormValues({
        name: '',
        email: '',
        message: ''
      });
    } else {
      alert('Please fill out all fields correctly.');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="contact-form">
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={formValues.name}
      onChange={handleChange}
      required
    />

    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formValues.email}
      onChange={handleChange}
      required
    />

    <label htmlFor="message">Message:</label>
    <textarea
      id="message"
      name="message"
      value={formValues.message}
      onChange={handleChange}
      required
    />

    <button type="submit" disabled={!validateForm()}>
      Submit
    </button>
  </form>
  )
}

export default Contact