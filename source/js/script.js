const navBar = document.querySelector(".main-nav");
const BtnCloseNavBar = document.querySelector(".main-nav__close");
const btnOpenNavbar = document.querySelector(".header__burger");
const AllBntAddProduct = document.querySelectorAll('.product-exclusive__button,.product__button')
const modal = document.querySelector('#modal_cart')
const modalBtn = document.querySelectorAll('#modal_cart > button')

const removeClassNavbar = () => {
  navBar.classList.remove("main-nav--showed");
  BtnCloseNavBar.removeEventListener("click", removeClassNavbar);
};

const addclassNavbar = () => {
  navBar.classList.add("main-nav--showed");
  BtnCloseNavBar.addEventListener("click", removeClassNavbar);
};

btnOpenNavbar.addEventListener("click", addclassNavbar);

AllBntAddProduct.forEach((button)=>{
   button.addEventListener('click',()=>{
    modal.classList.remove('modal--hidden')
   })
})

const clickBtnModal = (button) => {
  modal.classList.add('modal--hidden')
  button.removeEventListener('click',clickBtnModal);
}

modalBtn.forEach(button=>{
  button.addEventListener('click',()=>{clickBtnModal(button)});
})