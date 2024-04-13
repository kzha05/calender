// Some voodoo shit I stole from the internet
function getAmountDaysFromMonth(y, m) { return new Date(y, m + 1, 0).getDate() }

function getDaysFromMonth(y, m) {
	// Initialize an empty array
	let days = [];

	// Gets amount of days from a month
	const amountOfDays = getAmountDaysFromMonth(y, m);

	// For each day in the total amount we get the date object corresponding to that day number
	for (let i = 0; i < amountOfDays; i++) {
		const date = new Date();
		date.setFullYear(y);
		date.setMonth(m);
		// We set the date here, there is no 0st of a month so we do +1 to start at 1
		date.setDate(i + 1);
		// Add gotten date to the array we initialized on line 6
		days.push(date);
	}

	// Return the filled array
	// console.log(days);
	return days;
}

export {getAmountDaysFromMonth, getDaysFromMonth}
