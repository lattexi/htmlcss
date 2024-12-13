const loginButton = document.getElementById('login');
const dialog = document.getElementById('dialog');

loginButton.addEventListener('click', () => {
    dialog.showModal();
});


const menuToggle = document.getElementById('menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
    if (navUl.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

const bulkFilterButton = document.getElementById('bulking');
const cutFilterButton = document.getElementById('cutting');
const showAll = document.getElementById('all');

const bulkFilter = document.querySelectorAll('.bulk');
const cutFilter = document.querySelectorAll('.cut');

bulkFilterButton.addEventListener('click', () => {
    bulkFilter.forEach(element => {
        element.style.display = 'flex';
    });
    cutFilter.forEach(element => {
        element.style.display = 'none';
    });
});

cutFilterButton.addEventListener('click', () => {
    cutFilter.forEach(element => {
        element.style.display = 'flex';
    });
    bulkFilter.forEach(element => {
        element.style.display = 'none';
    });
});

showAll.addEventListener('click', () => {
    cutFilter.forEach(element => {
        element.style.display = 'flex';
    });
    bulkFilter.forEach(element => {
        element.style.display = 'flex';
    });
});