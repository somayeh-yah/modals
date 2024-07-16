'use strict';

const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const openModalsBtn = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModals = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < openModalsBtn.length; i++)
  openModalsBtn[i].addEventListener('click', openModals);

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
