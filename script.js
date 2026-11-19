/*
  MINI-BOUTIQUE
  Écris le contenu de chaque fonction marquée TODO, sans changer son nom.
  Termine par init() : elle relie tes fonctions à la page.
*/

const API_URL =
  "https://dummyjson.com/products?limit=12&select=title,price,thumbnail,category,stock";

let products = []; // les produits reçus de l'API
let cart = []; // une ligne : { id, title, price, quantity }

// TODO : récupère ici les éléments du DOM dont tu as besoin

/**
 * Récupère les produits de l'API.
 * Attention : la réponse est un objet, les produits sont dans une de ses propriétés.
 * Méthode : fetch
 * @returns {Promise<Array>}
 */
async function fetchProducts() {
  // TODO
}

/**
 * Affiche une carte par produit dans productsGrid.
 * Bouton désactivé (disabled) si stock = 0.
 * Méthode : forEach
 *
 * Modèle d'une carte (remplace les valeurs en MAJUSCULES) :
 * <article class="flex flex-col gap-2 bg-white border border-slate-200 rounded-xl p-3">
 *   <img src="IMAGE" alt="TITRE" class="w-full aspect-square object-contain bg-slate-100 rounded-md">
 *   <h3 class="font-medium">TITRE</h3>
 *   <p class="font-semibold">PRIX $</p>
 *   <p class="text-sm text-slate-500">Stock : STOCK</p>
 *   <button data-add="ID" class="bg-sky-900 text-white rounded-md px-3 py-2 disabled:bg-slate-400 disabled:cursor-not-allowed">Ajouter</button>
 * </article>
 *
 * @param {Array} list
 */
function displayProducts(list) {
  // TODO
}

/**
 * Retourne les produits de la catégorie choisie.
 * Si category vaut "all", retourne tous les produits.
 * Méthode : filter
 * @param {string} category
 * @returns {Array}
 */
function filterByCategory(category) {
  // TODO
}

/**
 * Retourne le produit dont l'id correspond.
 * Méthode : find
 * @param {number} id
 * @returns {Object|undefined}
 */
function findProduct(id) {
  // TODO
}

/**
 * Ajoute le produit au panier.
 * - Déjà dans le panier ? quantity + 1
 * - Sinon : ajoute une ligne { id, title, price, quantity: 1 }
 * Méthodes : find + push
 * @param {number} id
 */
function addToCart(id) {
  // TODO
}

/**
 * Affiche les lignes du panier dans cartItems.
 * Met aussi à jour cartTotal et cartCount (avec getTotal et getItemCount).
 * Méthodes : map + join
 *
 * Modèle d'une ligne :
 * <li class="flex justify-between items-center gap-2">
 *   <span>TITRE × QUANTITÉ</span>
 *   <button data-remove="ID" class="bg-red-700 text-white rounded-md px-2 py-1">✕</button>
 * </li>
 */
function displayCart() {
  // TODO
}

/**
 * Retourne le prix total du panier (prix × quantité).
 * Méthode : reduce
 * @returns {number}
 */
function getTotal() {
  // TODO
}

/**
 * Retourne le nombre total d'articles (somme des quantités).
 * Méthode : reduce
 * @returns {number}
 */
function getItemCount() {
  // TODO
}

/**
 * Retire la ligne du produit du panier.
 * Méthodes : findIndex + splice
 * @param {number} id
 */
function removeFromCart(id) {
  // TODO
}

// ---------- BONUS ----------

/**
 * Retourne les n premiers produits.
 * Méthode : slice
 */
function getFirstProducts(n) {
  // TODO
}

/**
 * Retourne les produits triés par prix croissant, SANS modifier le tableau d'origine.
 * Méthode : sort (sur une copie)
 */
function sortByPrice(list) {
  // TODO
}

/**
 * Retourne true si au moins un produit est en rupture de stock.
 * Méthode : some
 */
function hasOutOfStock() {
  // TODO
}

// ------------------------------------------------------------
// DÉMARRAGE
// ------------------------------------------------------------

/**
 * Point d'entrée de l'application :
 * 1. récupère les produits avec fetchProducts() et les stocke dans products ;
 * 2. affiche tous les produits et le panier (vide au départ) ;
 * 3. écoute le changement de catégorie → filtre et réaffiche les produits ;
 * 4. écoute les clics sur les boutons « Ajouter » (data-add) → ajoute au panier et réaffiche le panier ;
 * 5. écoute les clics sur les boutons « ✕ » (data-remove) → retire du panier et réaffiche le panier.
 *
 * Astuce : les boutons sont créés par le JS, écoute donc les clics sur leur conteneur
 * (productsGrid, cartItems) et vérifie quel bouton a été cliqué.
 *
 * (Bonus) Gère le chargement et les erreurs avec try...catch.
 */
async function init() {
  // TODO
}

init();
