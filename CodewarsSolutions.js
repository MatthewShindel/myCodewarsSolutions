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

function minutesToMidnight(d){
	//note, randomized tests were failling at random points, hard to to tell what the problem is
  let currentHours = d.getHours();
  let currentMinutes = d.getMinutes();
  let minutesPassed =(currentHours * 60) + currentMinutes;
  let timeUntilMidnight = 1440 - minutesPassed;
  console.log(timeUntilMidnight)
  let result = Math.round(timeUntilMidnight);
  if(result > 1){
    return(`${result} minutes`);
  }
  return(`${result} minute`)
}

var countBits = function(n) {
  const binary = n.toString(2);
  let count =0;
  for(let char of binary){
    if(char === '1'){
      count ++
    }
  }
  return count
};

function findEvenIndex(arr){
  for(let i =0; i<= arr.length; i++){
    let leftSum = arr.slice(0,i).reduce((acc,curr) => acc + curr, 0)
    let rightSum = arr.slice(i+1).reduce((acc,curr) => acc + curr, 0)
    if(leftSum === rightSum){
      return i;
    }
  }
  return -1
}

function breakingRecords(scores) {
  // outpuit is 2 numbers, max and min in that order
  // ignore first element, set max and min to first, them for each element after, check
  //
  let maxScore = scores[0];
  let minScore = maxScore;
  let timesMax = 0;
  let timesMin = 0;
  for(let i = 1; i < scores.length; i++){
      if(maxScore < scores[i]){
          maxScore = scores[i];
          timesMax += 1;
      }else if( minScore > scores[i]){
          minScore = scores[i];
          timesMin += 1;
      }
  }
  return [timesMax, timesMin]
}

function scoreThrows(radii) {
	if (radii.length === 0) {
		return 0;
	}
	
	let score = 0;
	for (const radius of radii) {
		if (radius < 5) {
			score += 10;
		} else if (radius <= 10) {
			score += 5;
		}
	}
	
	if (radii.every(radius => radius < 5)) {
		score += 100;
	}
	
	return score;
}

function isPangram(string){
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let lowerCaseString  = string.toLowerCase();
  let letterSet = new Set();
  for(let char of lowerCaseString){
    if(alphabet.includes(char)){
      letterSet.add(char)
    }
  }
  return letterSet.size === 26
}

function getMiddle(s){
  let middle = Math.floor(s.length / 2);
  if(s.length %2 === 0){
    return s[middle-1] + s[middle];
  }else{
    return s[middle]
  }
}

const binaryArrayToNumber = arr => {
  let binary = arr.join('')
  return parseInt(binary, 2)
};

function persistence(num) {
	let count = 0;
	while(num >= 10){
		num = num.toString().split('').reduce((acc,curr) => acc * curr, 1);
		count ++;
	}
 return count;
}

var solution = function(firstArray, secondArray) {
  //decimals are viable answers
  //negatives differences are positive when squared
  //return the average (total / number of elements in array)
  // arrays are the same length
  let n = firstArray.length;
  let totalOfSquares = 0;
  for(let i = 0; i < n; i++){
    let difference = firstArray[i]-secondArray[i];
    totalOfSquares += difference * difference;
  }
  return totalOfSquares / n
}

var solution = function(firstArray, secondArray) {
  // Use reduce to calculate the sum of squared differences
  const totalOfSquares = firstArray.reduce((accumulator, current, index) => {
    const difference = current - secondArray[index];
    return accumulator + difference * difference;
  }, 0);

  // Calculate and return the average
  return totalOfSquares / firstArray.length;
};
/*
Here's a breakdown of the changes:

Leveraging reduce: We use firstArray.reduce to iterate through each element (current) with its corresponding index (index).
Accumulator and Callback Function:
The first argument (accumulator) holds the accumulated value during each iteration. It's initialized to 0 (representing the initial sum of squares).
The callback function takes three arguments:
accumulator: The current accumulated value.
current: The current element from firstArray.
index: The index of the current element.
Calculating Squared Difference: Inside the callback, we calculate the squared difference between the current element (current) and the corresponding element from secondArray using current - secondArray[index]. We square this difference using difference * difference.
Updating Accumulator: The callback returns the updated accumulator by adding the squared difference to the current value. This way, accumulator keeps track of the total sum of squares across all elements.
Calculating Average: After the loop (reduce), we calculate the average by dividing totalOfSquares by the length of the array (firstArray.length).
This approach achieves the same functionality as your original loop, but with a more concise and functional style using reduce.
*/

function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}
