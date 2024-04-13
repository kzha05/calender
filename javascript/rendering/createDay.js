export default function createDay(parent, dayName, dayNumber, isCurrentDay){
    const day = document.createElement('div');
    day.classList.add('day');
    if (isCurrentDay) {
        day.classList.add('currentDay')
      }
    parent.appendChild(day);

    const weekDay = document.createElement('p');
    weekDay.classList.add('week-day');
    weekDay.textContent = dayName;
    day.appendChild(weekDay);

    const monthDay = document.createElement('p');
    monthDay.classList.add('month-day');
    monthDay.textContent = dayNumber;
    day.appendChild(monthDay);
}