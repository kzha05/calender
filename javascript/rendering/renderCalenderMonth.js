import getDayName from '../helpers/getDayName.js'
import createDay from './createDay.js'
import {getDaysFromMonth} from '../helpers/getDaysFromMonth.js';
import checkIfCurrentDate from '../helpers/checkIfCurrentDate.js';

const currentDay = new Date()

export default function renderCalenderMonth(date, title, parent){
    parent.innerHTML = null;
    const days = getDaysFromMonth(date.getFullYear(), date.getUTCMonth());

    const monthNames=['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'];

    const getFullYear = date.getFullYear();
    const getFullMonth = date.getMonth(); 

    const fullMonthName = monthNames[getFullMonth];

    title.textContent = `${fullMonthName} ${getFullYear}`;

    days.forEach(day => {
        const dayNumber = day.getDate();
        const dayName = getDayName(day);

        createDay(parent, dayName, dayNumber, checkIfCurrentDate(day));
    });
};