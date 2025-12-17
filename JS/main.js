// Бургер меню
const burgerBtn = document.getElementById('burgerBtn');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.querySelector('.header');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    navList.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        navList.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !burgerBtn.contains(e.target)) {
        burgerBtn.classList.remove('active');
        navList.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        burgerBtn.classList.remove('active');
        navList.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

burgerBtn.addEventListener('click', () => {
    if (burgerBtn.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});