module.exports = (req, res, next) => {
	let current_datetime = new Date();
	let formatted_date =
		current_datetime.getFullYear() +
		'-' +
		(current_datetime.getMonth() + 1) +
		'-' +
		current_datetime.getDate() +
		' ' +
		current_datetime.getHours() +
		':' +
		current_datetime.getMinutes() +
		':' +
		current_datetime.getSeconds();
	let method = req.method;
	let url = req.url;
	let status = res.statusCode;
	let log = `Date & Time-[${formatted_date}] Request - [${method}:${url}] Status - [${status}]`;
	console.log(log);
	const { statusCode, statusMessage } = res;
	const headers = res.getHeaders();

	console.log(
		JSON.stringify({
			res: {
				statusCode,
				statusMessage,
				headers
			}
		})
	);
	next();
};
