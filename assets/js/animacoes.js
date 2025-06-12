const logosSVG = document.querySelectorAll(".technologies__logo");
const icons = document.querySelectorAll('.tech-icon');
const btnProjetos = document.getElementsByClassName('btn--primary');

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
})

icons.forEach((icon, index) => {
  setTimeout(() => {
    icon.classList.add('show');
  }, index * 150);
});