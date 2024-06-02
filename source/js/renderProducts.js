import { getAddtoCardBtns}  from "./modal.js";

export default (products, template, target, isTargetList = false, templateClass = '') => {

    const fragment = document.createDocumentFragment();

    let productElement = template.querySelector('.product');
    if(isTargetList) {
        const node = document.createElement('li');
        node.innerHTML = productElement.innerHTML;

        Array.prototype.forEach.call(productElement.attributes, function( attr ) {
            node.setAttribute( attr.name, attr.value );
        });

        node.classList.add(templateClass);
        productElement = node;
    } 
    products.forEach( product => {
        const itemElement = productElement.cloneNode(true);
        const imageElement = itemElement.querySelector('.product__image');
        const nameElement = itemElement.querySelector('.product__name');
        const priceElement = itemElement.querySelector('.product__price');
        const oldPriceElement = itemElement.querySelector('.product__old-price');
        const buttonElement = itemElement.querySelector('.product__button');
        const {id, isBig, status, image, name, price, oldPrice} = product;

        itemElement.dataset.productId = id;
        imageElement.src = image;
        nameElement.textContent = name;
        priceElement.textContent = `${price} ₽`;
        oldPriceElement.textContent = `${oldPrice} ₽`;

        if(isBig) {
            itemElement.classList.remove('product')
            itemElement.classList.add('product-exclusive')
            itemElement.classList.add('product-exclusive--hot');
            buttonElement.classList.add('product-exclusive__button');
            nameElement.classList.add('product-exclusive__name')
            priceElement.classList.add('product-exclusive__price')
            oldPriceElement.classList.add('product-exclusive__old-price')
        }  
        if(status === 'new'){
            itemElement.classList.add(`product--${status}`);
        }
       
        fragment.appendChild(itemElement);
   
    });
    target.innerHTML = '';
    target.appendChild(fragment);
    getAddtoCardBtns(target)
}