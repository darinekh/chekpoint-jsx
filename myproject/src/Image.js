import React from 'react';
import { product } from './product';

export default function Image() {
  return <img src={product.image} alt={product.name} className="rounded-lg shadow-lg" />;
}
