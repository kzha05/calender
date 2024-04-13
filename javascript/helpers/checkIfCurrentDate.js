export default function checkIfCurrentDate(date) {
    const currentDate = new Date();
    const currentDay = `${currentDate.getFullYear()} + ${currentDate.getMonth()} + ${currentDate.getDate()}`;
    const compareDay = `${date.getFullYear()} + ${date.getMonth()} + ${date.getDate()}`;
    if (currentDay === compareDay) { return  true}
    else { return false }
}