import React from 'react';          // On importe React pour pouvoir créer un composant
import { product } from './product'; // On importe l'objet "product" depuis le fichier product.js

// Composant fonctionnel Description
export default function Description() {
  // On retourne un paragraphe qui contient la description du produit
  // "text-gray-700" est une classe Tailwind qui applique une couleur de texte gris
  return <p className="text-gray-700">{product.description}</p>;
}
