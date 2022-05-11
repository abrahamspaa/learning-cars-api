module.exports = {
	handlePromise: async promise => {
		const data = await promise.catch(error => [error])
		return [null, data]
	}
}