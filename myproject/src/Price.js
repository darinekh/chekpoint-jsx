import React from 'react';
import { product } from './product';

export default function Price() {
  return <p className="text-green-600 font-semibold">{product.price}</p>;
}
