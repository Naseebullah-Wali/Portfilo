const hamburger = document.querySelector('#main .homesec .col-8  .hamburger');
const mobile_menu = document.querySelector('#main .homesec .nav ul');
const menu_item = document.querySelectorAll('#main .homesec .nav ul li a');
const header = document.querySelector('#main.container');

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
