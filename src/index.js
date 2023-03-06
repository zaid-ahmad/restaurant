/* eslint-disable no-plusplus */
import './style.css';
import Chef from './images/chef.jpg';

const heroEl = document.querySelector('.hero');
const homeLink = document.querySelector('#home');
const aboutLink = document.querySelector('#about');
const menuLink = document.querySelector('#menu');
const exploreBtn = document.querySelector('#btn');
const homeContent = document.querySelector('#home-content');
const aboutContent = document.querySelector('#about-content');
const menuContent = document.querySelector('#menu-content');

const addHeroImage = () => {
  const hImgCon = document.createElement('div');
  hImgCon.classList.add('img');

  const heroImage = new Image();
  heroImage.src = Chef;

  hImgCon.appendChild(heroImage);
  heroEl.appendChild(hImgCon);
};

const clearCurrent = () => {
  homeContent.style.display = 'none';
  aboutContent.style.display = 'none';
  menuContent.style.display = 'none';
};

const showHome = () => {
  homeContent.style.display = 'block';
};

const showAbout = () => {
  aboutContent.style.display = 'block';
};

const showMenu = () => {
  menuContent.style.display = 'block';
};

homeLink.addEventListener('click', () => {
  clearCurrent();
  showHome();
});

aboutLink.addEventListener('click', () => {
  clearCurrent();
  showAbout();
});

menuLink.addEventListener('click', () => {
  clearCurrent();
  showMenu();
});

exploreBtn.addEventListener('click', () => {
  clearCurrent();
  showMenu();
});

addHeroImage();
