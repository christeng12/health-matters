import React from 'react';
import { useParams } from 'react-router-dom';

const Services = () => {
  const { title, type } = useParams();

  return (
    <div>
      <h1>{title}</h1>
      <p>Type: {type}</p>
      {/* ... rest of your service page content */}
    </div>
  );
};

export default Services;