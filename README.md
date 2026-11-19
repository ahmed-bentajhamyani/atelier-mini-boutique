# Atelier – Mini-boutique

**Objectif :** utiliser les méthodes des tableaux (`forEach`, `filter`, `find`, `push`, `map`, `reduce`, `findIndex`, `splice`…) pour construire un catalogue et un panier.
**Format :** en binôme
**Support :** la fiche mémo « Méthodes des tableaux JS »

## Contexte

La Mini-boutique affiche des produits venant d'une API. Le visiteur filtre par catégorie, ajoute des produits au panier, voit le total et retire des articles.

**API :** `https://dummyjson.com/products?limit=12&select=title,price,thumbnail,category,stock`

> Ouvre l'URL dans ton navigateur avant de coder : où se trouvent les produits dans la réponse ?

## Le starter

| Fichier | Contenu |
| --- | --- |
| `index.html` | La page complète, stylée avec Tailwind CSS |
| `script.js` | Les fonctions à écrire, avec leur rôle et la méthode à utiliser |

- **Ne renomme pas les fonctions** : écris seulement leur contenu.
- `init()` relie tes fonctions à la page : complète-la à chaque étape.
- Les modèles HTML d'une carte et d'une ligne du panier sont dans les commentaires.

## Les étapes

### 1. Afficher les produits
- `fetchProducts()` → `fetch`
- `displayProducts(list)` → `forEach`
- `init()` : récupère les produits et affiche-les

✅ Les 12 produits s'affichent.

### 2. Filtrer par catégorie
- `filterByCategory(category)` → `filter`
- `init()` : écoute le changement de catégorie

✅ Changer de catégorie met à jour la grille. « Toutes » réaffiche tout.

### 3. Ajouter au panier
- `findProduct(id)` → `find`
- `addToCart(id)` → `find` + `push`
- `init()` : écoute les clics sur les boutons « Ajouter »

✅ Un clic sur « Ajouter » ajoute une ligne. Un 2e clic augmente la quantité au lieu de créer une ligne en double.

### 4. Afficher le panier
- `displayCart()` → `map` + `join`

✅ Chaque ligne affiche le titre et la quantité.

### 5. Calculer le total
- `getTotal()` → `reduce`
- `getItemCount()` → `reduce`

✅ Le total (prix × quantité) et le nombre d'articles sont justes.

### 6. Retirer du panier
- `removeFromCart(id)` → `findIndex` + `splice`
- `init()` : écoute les clics sur les boutons ✕

✅ Le bouton ✕ retire la ligne, et le total se met à jour.

### Bonus
- `getFirstProducts(n)` → `slice`
- `sortByPrice(list)` → `sort` sur une copie
- `hasOutOfStock()` → `some`

## Règles
- Une méthode de tableau par besoin : pas de boucle `for` classique.
- Aucune erreur dans la console.
- Un commit par étape, avec un message clair.

## À la fin, sois capable de répondre

Pour chaque méthode utilisée : **que retourne-t-elle ?** Et **modifie-t-elle le tableau d'origine ?**
