import React from 'react';           // Import de React pour créer le composant
import { product } from './product'; // Import de l'objet "product" depuis product.js

// Composant fonctionnel Price
export default function Price() {
  // On retourne un <p> pour afficher le prix du produit
  return <p className="text-green-600 font-semibold">{product.price}</p>;
}
