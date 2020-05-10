const button = document.querySelector('#hamburger');
const img = document.querySelector('#img');
const navBar = document.querySelector('#nav-bar');
document.getElementById('ul').style.display = 'none';

const x = window.matchMedia('(min-width: 768px)');

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    navBar.classList.add('hidden');
  } else {
    navBar.classList.remove('hidden');
    button.addEventListener('click', () => {
      showBtn = !showBtn;
      if (showBtn == false) {
        document.getElementById('ul').style = 'display:flex';
        img.src = './images/icon-close.svg';
        navBar.style.display = 'flex';
      } else {
        document.getElementById('ul').style = 'display:none';
        navBar.style.display = 'none';
        img.src = './images/icon-hamburger.svg';
      }
    });

    let showBtn = true;
  }
}
myFunction(x);
x.addListener(myFunction);
