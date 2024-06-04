import './navbar.js';
import './modal.js';
import renderProducts from './renderProducts.js';
import { fetchParams } from './api.js';

const productWrapper = document.querySelector('.best-selling__list');
const productTemplate = document.querySelector('#product').content;

const dataProducts = fetchParams('https://zsa-studio.ru/catalog.php')

dataProducts.then((products)=>renderProducts(products, productTemplate, productWrapper, false, '.best-selling__product'))
