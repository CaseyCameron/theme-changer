import React from 'react';

const Character = ({ name, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
);
export default Character;
