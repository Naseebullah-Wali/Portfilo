

const hamburger = document.querySelector('.row .homesec .col-8  .hamburger');
const mobile_menu = document.querySelector('.row .homesec .col8 ul');
const menu_item = document.querySelectorAll('.row .homesec .col8 ul li a');
const header = document.querySelector('.row .homesec');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
