import renderCalenderMonth from './rendering/renderCalenderMonth.js';
//variables
const dayWrapper = document.getElementById('dayWrapper');
const title = document.getElementById('title');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let date = new Date;

renderCalenderMonth(date, title, dayWrapper);

next.addEventListener('click', () => {
    console.log('next');
    date.setMonth(date.getMonth() + 1);
    renderCalenderMonth(date, title, dayWrapper);
});

prev.addEventListener('click', () => {
    console.log('prev');
    date.setMonth(date.getMonth() - 1);
    renderCalenderMonth(date, title, dayWrapper);
});