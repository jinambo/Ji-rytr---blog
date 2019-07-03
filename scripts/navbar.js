let navbar = document.querySelector('.header-navbar');

function dropNavbar() {
    navbar.style.display = 'block';
    setTimeout(() => {
        navbar.style.top = 0;        
    }, 100);
}

function closeNavbar() {
    navbar.style.top = "-100%";   
    setTimeout(() => {
        navbar.style.display = 'none';     
    }, 500); 
}