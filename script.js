// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
// });

const resButton = document.querySelector('.btn');
const popup = document.querySelector('.popup');
const body = document.querySelector('body');
const closeSign = document.querySelector('.form-close');
const reservation = document.querySelector('.booking-btn-form');

resButton.addEventListener('click', () => {
    popup.matches('.open') ? false : popup.classList.add('open') && body.classList.add('body_open')

});

closeSign.addEventListener('click', () => {
    popup.classList.remove('open');
    body.classList.remove('body_open');
})

reservation.addEventListener('click', () => {
    popup.classList.remove('open');
    body.classList.remove('body_open');
})

// 