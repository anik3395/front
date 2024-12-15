import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const YourComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the Register User page
    navigate('/users/register');
  }, [navigate]);

  return null; // No UI, just performs the redirection
};

export default YourComponent;
