burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlinks = document.querySelector('.navlinks')


burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp');
    navlinks.classList.toggle('v-class-resp');
});