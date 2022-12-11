const doubleDigit = (num) => {
	return num.toString().padStart(2, '0')
}

const formatDate = (date) => {
	return (
		[
			date.getFullYear(),
			doubleDigit(date.getMonth() + 1),
			doubleDigit(date.getDate()),
		].join('-') +
		' ' +
		[
			doubleDigit(date.getHours()),
			doubleDigit(date.getMinutes()),
			doubleDigit(date.getSeconds()),
		].join(':')
	)
}

export default formatDate
