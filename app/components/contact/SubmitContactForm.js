'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ContactForm from './ContactForm';

const SubmitContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    description: '', // Initialize description field
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/submitContactForm', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      if (result.success) {
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          description: '', // Reset description field
        });
        setSuccessMessage('Form submitted successfully!');
        // router.push(`/thank-you?name=${encodeURIComponent(formData.name)}`);
      } else {
        setIsErrorMessage(result.message || 'Submission failed');
      }
    } catch (error) {
      setIsErrorMessage('Failed to submit form');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactForm
      formData={formData}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      isErrorMessage={isErrorMessage}
      successMessage={successMessage}
    />
  );
};

export default SubmitContactForm;
