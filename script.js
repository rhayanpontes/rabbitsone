const btnMenu = document.querySelector('#btn-menu');

function toggleMenu(event) {
  if(event.type === 'touchstart') event.preventDefault()
  const nav = document.querySelector('#nav');

  nav.classList.toggle('active');

  const active = nav.classList.contains('active')

  event.currentTarget.setAttribute('aria-expanded', active)

  if(active) {
    event.currentTarget.setAttribute('aria-label', 'Close Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Open Menu');

  }
}

btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);