import { getDaysFromMonth } from './helpers/getDaysFromMonth.js';

const date = new Date;
const days = getDaysFromMonth(date.getFullYear(), date.getUTCMonth());

console.log(days);

const day= new Date().getDay();
const dayName = ['Sund', 'Mond', 'Tues', 'Wedn', 'Thur', 'Frid', 'Satu'];
console.log(`Today is: ${dayName[day]}`);