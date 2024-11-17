import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    specialist: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = {};

    // Validering
    if (!formData.fullName.trim()) {
      formErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      formErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }

    if (!formData.specialist) {
      formErrors.specialist = 'Please select a specialist';
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSuccessMessage('Form submitted successfully!');
          setErrorMessage('');
          setFormData({ fullName: '', email: '', specialist: '' }); 
        } else {
          throw new Error('Failed to submit form. Please try again.');
        }
      } catch (error) {
        setErrorMessage(error.message);
        setSuccessMessage('');
      }
    }
  };

  return (
    <div className="contact-container">
      <section className="contact-info">
        <h2>Contact Us</h2>
        <div className="contact-item">
          <h3>Email us</h3>
          <p>
            Please feel free to drop us a line. We will respond as soon as possible.
          </p>
          <a href="#" className="contact-link">Leave a message →</a>
        </div>
        <div className="contact-item">
          <h3>Careers</h3>
          <p>
            Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.
          </p>
          <a href="#" className="contact-link">Send an application →</a>
        </div>
      </section>

      <section className="consultation-form">
        <h2>Get Online Consultation</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="specialist">Specialist</label>
            <select
              id="specialist"
              name="specialist"
              value={formData.specialist}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select a specialist
              </option>
              <option value="specialist1">Specialist 1</option>
              <option value="specialist2">Specialist 2</option>
              <option value="specialist3">Specialist 3</option>
            </select>
            {errors.specialist && <span className="error">{errors.specialist}</span>}
          </div>

          <button type="submit" className="btn btn-primary">
            Make an appointment
          </button>
        </form>

        {/* Visa framgångs- eller felmeddelande */}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </section>
    </div>
  );
};

export default ContactForm;
