const button = document.querySelector('#hamburger');
const img = document.querySelector('#img');
const navBar = document.querySelector('#nav-bar');

button.addEventListener('click', () => {
  // console.log(navBar);

  showBtn = !showBtn;

  // button.appendChild(img);
  if (showBtn == true) {
    img.src = './images/icon-close.svg';
    navBar.style.display = 'block';
  } else {
    navBar.style.display = 'none';
    img.src = './images/icon-hamburger.svg';
  }
});

let showBtn = false;
