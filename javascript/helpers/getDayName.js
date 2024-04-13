const shortDayNames = ['Sund', 'Mond', 'Tues', 'Wedn', 'Thur', 'Frid', 'Satu'];
const longDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function getDayName(day, length="short") {
    const dayNameNumber = day.getUTCDay();
    return length.toLowerCase() === "short" ? shortDayNames[dayNameNumber] : longDayNames[dayNameNumber]
}