import React from 'react';
import Card from '../common/Card';

const Character = ({ name, image }) => (
  <Card>
    <figure>
      <img src={image} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  </Card>
);
export default Character;
