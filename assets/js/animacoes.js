const icons = document.querySelectorAll('.tech-icon');
const btnProjetos = document.getElementsByClassName('btn--primary');
const revealElements = document.querySelectorAll('.reveal');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
})

icons.forEach((icon, index) => {
  setTimeout(() => {
    icon.classList.add('show');
  }, index * 150);
});

revealElements.forEach((el, i) => {
  setTimeout(() => {
    el.classList.add('visible');
  }, i * 300);
});