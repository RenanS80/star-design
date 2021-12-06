// Navbar
let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('header .navbar')

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


// Pricing
let year = document.querySelector('.pricing .price-toggler .year')
let month = document.querySelector('.pricing .price-toggler .month')
let yearAmount = document.querySelectorAll('.pricing .price .year')
let monthAmount = document.querySelectorAll('.pricing .price .month')

year.onclick = () => {
    year.classList.add('active');
    month.classList.remove('active');
    yearAmount.forEach(years => {
        years.style.display = 'block';
    });
    monthAmount.forEach(months => {
        months.style.display = 'none';
    });
};

month.onclick = () => {
    year.classList.remove('active');
    month.classList.add('active');
    yearAmount.forEach(years => {
        years.style.display = 'none';
    });
    monthAmount.forEach(months => {
        months.style.display = 'block';
    });
};


// Review Slide
let slides = document.querySelectorAll('.review .slide-container .slide')
let index = 0

function prevSlide(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

function nextSlide(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}


// FAQ
let accordion = document.querySelectorAll('.faq .accordion-container .accordion')
accordion.forEach(acc => {
    acc.onclick = () => {
        acc.classList.toggle('active');
    }
})