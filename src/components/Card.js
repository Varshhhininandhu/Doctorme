import React from 'react';

const Card = ({ img, title, description, children }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px' }}>
      <img src={img} alt={title} style={{ width: '100%' }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div style={{ marginTop: '20px' }}>
        {children}
      </div>
    </div>
  );
};

export default Card;