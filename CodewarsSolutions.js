function firstNonRepeatingLetter(s) {
	const lowerCaseString = s.toLowerCase();
	const charCount = {};
	for (let char of lowerCaseString) {
		charCount[char] = (charCount[char] || 0) + 1;
	}
	for (let i = 0; i < s.length; i++) {
		if (charCount[lowerCaseString[i]] === 1) {
			return s[i];
		}
	}
	return "";
}

function scoreThrows(radii) {
	let bonus = 0;
	let score = 0;
	if (radii.length === 0) {
		return 0;
	}
	for (let i = 0; i < radii.length; i++) {
		if (radii[i] < 5) {
			bonus++;
			score += 10;
		} else if (radii[i] <= 10) {
			score += 5
		}
	}
	if (bonus === radii.length) {
		score += 100
	}
	return score;
}

var countBits = function (n) {
	let binary = n.toString(2);
	let count = 0;
	for (let char of binary) {
		if (char === '1') {
			count++
		}
	}
	return count
};

function likes(names) {
	switch (names.length) {
		case 0:
			return "no one likes this";
		case 1:
			return `${names[0]} likes this`;
		case 2:
			return `${names[0]} and ${names[1]} like this`;
		case 3:
			return `${names[0]}, ${names[1]} and ${names[2]} like this`;
		default:
			return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
	}
}

function findNb(m) {
	let n = 0;
	let totalVolume = 0;
	while (totalVolume < m) {
		n++
		totalVolume += Math.pow(n, 3)
	}
	return totalVolume === m ? n : -1;
}

function digitalRoot(n) {
	return (n - 1) % 9 + 1;
}

function firstNonRepeatingLetter(s) {
	const charCount = {};
	for (let char of s) {
		const lowerChar = char.toLowerCase();
		charCount[lowerChar] = (charCount[lowerChar] || 0) + 1;
	}

	for (let char of s) {
		if (charCount[char.toLowerCase()] === 1) {
			return char;
		}
	}
	return ""
}

function alphabetPosition(text) {
	let result = [];
	for (let char of text) {
		let lowerChar = char.toLowerCase();
		if (lowerChar >= 'a' && lowerChar <= 'z') {
			let position = lowerChar.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
			result.push(position);
		}
	}
	return result.join(' ')
}

function bouncingBall(h, bounce, window) {
	if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
		return -1
	}
	let count = 0;
	while (h > window) {
		count++
		h *= bounce;
		if (h > window) {
			count++
		}
	}
	return count;
}

function queueTime(customers, n) {
	// Create an array to keep track of the time remaining at each till
	let tills = Array(n).fill(0);
	// Iterate over each customer in the queue
	for (let time of customers) {
		// Find the till that will be free the earliest (with the minimum remaining time), using ...tills , a spread operator
		// spread operators can use used to expand an iterable item such that i can look at the contents or an iterable.
		let currentTill = tills.indexOf(Math.min(...tills));
		// Add the customer's checkout time to this till
		tills[currentTill] += time;
	}
	// The total time required is the maximum value in the tills array
	return Math.max(...tills)
}

function findOutlier(integers) {
	let odds = integers.filter(num => num % 2 === 0);
	let evens = integers.filter(num => num % 2 !== 0);
	return evens.length === 1 ? evens[0] : odds[0];
}

function dnaStrand(dna) {
	const complements = {
		'A': 'T',
		'T': 'A',
		'C': 'G',
		'G': 'C',
	}
	return dna.split('').map(base => complements[base]).join('');
}

function tribonacci(signature, n) {
	if (n === 0) {
		return [];
	}
	let result = signature.slice(0, n);
	while (result.length < n) {
		let nextNumber = result.slice(-3).reduce((sum, num) => sum + num, 0);
		result.push(nextNumber);
	}

	return result;
}

function narcissistic(value) {
  let length = value.toString().length;
  let digits = value.toString().split('');
  let sum = 0;
  for(let digit of digits){
    console.log(`digit ${digit} length ${length}`)
    sum += (Math.pow(digit,length));
    console.log(sum)
  }
  if(sum === value){
    return true
  }
  return false;
}