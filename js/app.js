const burger = document.querySelector('.burger');
const menu = document.querySelector('.main-menu');


const showMenu = () => {
  if (getComputedStyle(menu).getPropertyValue('display') === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}

burger.addEventListener('click', showMenu);