const navBar = document.querySelector(".main-nav");
const BtnCloseNavBar = document.querySelector(".main-nav__close");
const btnOpenNavbar = document.querySelector(".header__burger");


const removeClassNavbar = () => {
  navBar.classList.remove("main-nav--showed");
  BtnCloseNavBar.removeEventListener("click", removeClassNavbar);
};

const addclassNavbar = () => {
  navBar.classList.add("main-nav--showed");
  BtnCloseNavBar.addEventListener("click", removeClassNavbar);
};

btnOpenNavbar.addEventListener("click", addclassNavbar);