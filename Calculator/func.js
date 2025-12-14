document.addEventListener('DOMContentLoaded', () => {
	const display = document.querySelector('.input');
	let current = '';
	let previous = '';
	let operation = null;

	const buttons = Array.from(document.querySelectorAll('button'));

	buttons.forEach(btn => {
		const text = btn.textContent.trim();
		if (text === 'C') { btn.addEventListener('click', clearAll); return; }
		if (text === '=') { btn.addEventListener('click', computeAndShow); return; }
		if (['+','-','x','/'].includes(text)) { btn.addEventListener('click', () => chooseOperation(text)); return; }
		btn.addEventListener('click', () => appendNumber(text));
	});

	function appendNumber(n) {
		if (n === '.' && current.includes('.')) return;
		if (n === '.' && current === '') current = '0.';
		else current = (current === '0' && n !== '.') ? n : current + n;
		updateDisplay();
	}

	function chooseOperation(op) {
		if (current === '' && previous !== '') { operation = op; updateDisplay(); return; }
		if (current === '') return;
		if (previous !== '') compute();
		operation = op;
		previous = current;
		current = '';
		updateDisplay();
	}

	function compute() {
		const prev = parseFloat(previous);
		const curr = parseFloat(current);
		if (isNaN(prev) || isNaN(curr)) return;
		let result = 0;
		switch (operation) {
			case '+': result = prev + curr; break;
			case '-': result = prev - curr; break;
			case 'x': result = prev * curr; break;
			case '/':
				if (curr === 0) { clearAll(); display.value = 'Error'; return; }
				result = prev / curr; break;
			default: return;
		}
		current = String(roundResult(result));
		previous = '';
		operation = null;
	}

	function computeAndShow() {
		if (current === '' || previous === '') return;
		compute();
		updateDisplay();
	}

	function clearAll() {
		current = '';
		previous = '';
		operation = null;
		updateDisplay();
	}

	function updateDisplay() {
		if (current !== '') display.value = current;
		else if (previous !== '') display.value = previous + (operation ? ' ' + operation : '');
		else display.value = '0';
	}

	function roundResult(num) {
		return Math.round((num + Number.EPSILON) * 1e12) / 1e12;
	}

	updateDisplay();
});

