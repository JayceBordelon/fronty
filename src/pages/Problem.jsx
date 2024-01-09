import React from 'react';
import { useParams } from 'react-router-dom';

export default function Problem() {
  // Extract the id param from the URL
  const { id } = useParams();

  return (
    <div>
      <h1>Problem ID: {id}</h1>
      {/* Rest of your component */}
    </div>
  );
}
