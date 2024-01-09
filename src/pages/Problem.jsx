import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Problem() {
  // Extract the id param from the URL
  const { id } = useParams();

  return (
    <div>
        <Navbar/>
      <h1>Problem ID: {id}</h1>
      {/* Rest of your component */}
    </div>
  );
}
