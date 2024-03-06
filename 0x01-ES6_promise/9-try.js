export default unction guardrail(mathFuntion) {
	let queue = [];
	value = mathFuntion();
	try {
		queue.push(value);
	}
	catch(error) {
		queue.push(error);
	}
	finally {
		queue.push("Guardrail was processed");
	}
	return queue;
};
