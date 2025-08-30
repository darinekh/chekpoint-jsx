import React from 'react';           // On importe React pour pouvoir créer un composant
import { product } from './product'; // On importe l'objet "product" depuis product.js
// Composant fonctionnel Image
export default function Image() {
  // On retourne une balise <img> pour afficher l'image du produit
  return <img src={product.image} alt={product.name} className="rounded-lg shadow-lg" />;
}
