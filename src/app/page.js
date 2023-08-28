'use client'
// src/pages/index.js

import { useState } from 'react';
import { setCookie } from 'nookies';

const Home = () => {
  const [preference, setPreference] = useState('');

  const handleSetPreference = (preference) => {
    // Set the user preference and update the state
    setPreference(preference);

    // Set the preference cookie
    setCookie(null, 'userPreference', preference, {
      maxAge: 30 * 24 * 60 * 60, // Cookie will expire in 30 days
      path: '/',
    });

    alert(`User preference set to: ${preference}`);
  };

  return (
    <div>
      <h1>Welcome to My Cookie App</h1>
      <button onClick={() => handleSetPreference('theme: dark')}>Set Dark Theme</button>
      <button onClick={() => handleSetPreference('language: en')}>Set English Language</button>
      <p>User Preference: {preference || 'None'}</p>
    </div>
  );
};

export default Home;
