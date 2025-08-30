import React from 'react';           // Import de React pour créer le composant
import { product } from './product'; // Import de l'objet "product" depuis product.js

// Composant fonctionnel Name
export default function Name() {
  // On retourne un <h2> pour afficher le nom du produit
  return <h2 className="text-xl font-bold">{product.name}</h2>;
}
