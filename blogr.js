
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.querySelector('.close-icon');
const sideMenu = document.querySelector('.mobile-menu-container');

menuIcon.addEventListener("click",()=>{
    sideMenu.classList.add('active');
})

closeIcon.addEventListener("click", ()=>{
    sideMenu.classList.remove('active');
})


 document.addEventListener('DOMContentLoaded', () => {
   const toggle = document.querySelector('.dropdown-toggle1');
   const menu = document.querySelector('.dropdown-menu1');
   const arrow = document.querySelector('.arrow-icon');

   if (toggle && menu && arrow) {
     toggle.addEventListener('click', () => {
       menu.classList.toggle('active');
       arrow.classList.toggle('rotate');
     });
   }

   const secondToggle = document.querySelector('.dropdown-toggle2');
   const secondMenu = document.querySelector('.dropdown-menu2');
   const secondArrow = document.querySelector('.arrow-icon2');


   if (secondToggle && secondMenu && secondArrow) {
     secondToggle.addEventListener('click', () => {
       secondMenu.classList.toggle('active');
       secondArrow.classList.toggle('rotate');
     });
   }

 const thirdToggle = document.querySelector('.dropdown-toggle3');
 const thirdMenu = document.querySelector('.dropdown-menu3');
 const thirdArrow = document.querySelector('.arrow-icon3');

 if (secondToggle && secondMenu && secondArrow) {
   thirdToggle.addEventListener('click', () => {
    thirdMenu.classList.toggle('active');
     thirdArrow.classList.toggle('rotate');
   });
 }

const productDropDown = document.querySelector('.product-dropdown');
const desktopArrowIcon = document.querySelector('.desktop-arrow-icon1');
const desktopProduct = document.querySelector('.desktop-product');



if (desktopProduct && desktopArrowIcon && productDropDown) {
  const toggleDropdown = () => {
    productDropDown.classList.toggle('active');
    desktopArrowIcon.classList.toggle('rotate');
  };

  desktopProduct.addEventListener('click', (e) => {
    e.preventDefault(); 
    toggleDropdown();
  });

  desktopArrowIcon.addEventListener('click', toggleDropdown);
}

const desktopCompany = document.querySelector('.desktop-company');
const desktopArrowIcon2 = document.querySelector('.desktop-arrow-icon2');
const companyDropDown = document.querySelector('.company-dropdown');


if(desktopCompany && desktopArrowIcon2 && companyDropDown){
   const toggleDropDown2 = () =>{
       companyDropDown.classList.toggle('active');
       desktopArrowIcon2.classList.toggle('rotate');
   };
   desktopCompany.addEventListener("click", (e) =>{
    toggleDropDown2()
        e.preventDefault(); 
   });

     desktopArrowIcon2.addEventListener('click', toggleDropDown2);
}

    const desktopConnect = document.querySelector('.desktop-connect');
    const desktopArrowIcon3 = document.querySelector('.desktop-arrow-icon3');
    const connectDropDown = document.querySelector('.connect-dropdown');

    if(desktopConnect && desktopArrowIcon3 && connectDropDown){
      const toggleDropDown3 = () =>{
        connectDropDown.classList.toggle('active');
        desktopArrowIcon3.classList.toggle('rotate')
      };
      desktopConnect.addEventListener("click", (e) =>{
        toggleDropDown3()
        e.preventDefault()
      });

       desktopArrowIcon3.addEventListener('click', toggleDropDown3);
    }
   
 });


