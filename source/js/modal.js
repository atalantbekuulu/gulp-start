const modal = document.querySelector('#modal_cart')
const modalCloseBtn = modal.querySelector('.modal__close')
const modalСontinueBtn = modal.querySelector('.modal__continue')

const getAddtoCardBtns = (products)=>{
   if (products){
      const addToCardBtns = products.querySelectorAll('.add-card-btn')
      const CloseModalBtns = [modalCloseBtn,modalСontinueBtn]
      const CloseModalFilteredBtns = CloseModalBtns.filter((button) => {
          return button !== null;
        });
      
       if(addToCardBtns?.length) {
          addToCardBtns.forEach((button)=>{
              button.addEventListener('click',()=>{
               modal.classList.remove('modal--hidden')
              })
           })
       } else {
          console.error('кнопки добавления в корзину не найдены')
       }
       
       const closeModalWindow = (button) => {
         modal.classList.add('modal--hidden')
         button.removeEventListener('click',closeModalWindow);
       }
       
       if(CloseModalFilteredBtns?.length){
          CloseModalFilteredBtns.forEach(button=>{
              button.addEventListener('click',()=>{closeModalWindow(button)});
            })
       }  else {
          console.error('кнопки закрытия модального окна не найдены')
       }
      }
   }

   export {getAddtoCardBtns}