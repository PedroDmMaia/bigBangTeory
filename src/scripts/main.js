window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        let scroll = document.querySelector('.to-top-button')
        scroll.classList.toggle('to-top-button--active', window.scrollY > 450)
    });

    window.addEventListener('load', showHeroImg());
});

function showHeroImg() {
    const image = document.querySelector('.hero__image');
    setTimeout(() => {
        image.classList.add('hero__image--active');
    }, 1000)
}

function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}