import './navbar.js';
import './modal.js';
import products from './products.js';
import renderProducts from './renderProducts.js';

const productWrapper = document.querySelector('.best-selling__product');
const productTemplate = document.querySelector('#product').content;

renderProducts(products, productTemplate, productWrapper, false, '.product');