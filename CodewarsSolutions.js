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

function descendingOrder(n){
  return parseInt(n.toString().split('').sort((a,b) => b-a).join(''), 10)
}

function sumArray(arr){
  return arr.reduce((accumulator, current) => accumulator + current, 0)
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([10, 20, 30]));    // Output: 60

function productArray(arr){
  return arr.reduce((accumulator, current) => accumulator * current, 1)
}

console.log(productArray([1, 2, 3, 4, 5])); // Output: 120
console.log(productArray([2, 3, 4]));       // Output: 24

function findLongestWord(arr){
  return arr.reduce((accumulator, current) => current.length > accumulator.length ? current : accumulator)
}

console.log(findLongestWord(['apple', 'banana', 'cherry', 'date'])); // Output: 'banana'
console.log(findLongestWord(['hello', 'world', 'javascript']));      // Output: 'javascript'

function countOccurrences(arr){
  return arr.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
  }, {})
}

console.log(countOccurrences(['a', 'b', 'a', 'c', 'b', 'a'])); // Output: { a: 3, b: 2, c: 1 }
console.log(countOccurrences([1, 2, 3, 1, 2, 1]));             // Output: { 1: 3, 2: 2, 3: 1 }

function calculateAverage(arr){
  let sum = arr.reduce((acc , current) => acc + current, 0);
  return sum / arr.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5])); // Output: 3
console.log(calculateAverage([10, 20, 30, 40, 50])); // Output: 30

function narcissistic(value) {
  // Code me to return true or false
  //don't need error handling
  // split number into an array, then do an for loop of each digit;
  // input is non-zero integers
  const length = value.toString().length;
  const stringValue = value.toString()
  let sum = 0;
  for(let char of stringValue){
    sum += Math.pow(parseInt(char), length);
  }
  return sum === value;
}

var uniqueInOrder=function(iterable){
  let result = []
  let previous;
  for(let element of iterable){
    if(element !== previous){
      result.push(element);
      previous = element;
    }
  }
  return result
}

function isIsogram(str){
  str = str.toLowerCase();
  let charSet = new Set();
  for(let char of str){
    if(charSet.has(char)){
      return false
    }
    charSet.add(char)
  }
  return true;
}


//better isIsogram function:
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U')
}

function isTriangle(a,b,c){
  if(a > 0 && b > 0 && c >0){
     if(a + b> c && a + c > b && b + c > a){
       return true
     }
  }
  return false;
}

function sortArray(array) {
  const oddsOnlySorted = array.filter(num => num % 2 !== 0).sort((a,b) => a - b);
  //sort odds only, put them in an array, and sort them so that is least to greatest
  let oddIndex = 0;
  //used to count the index of the oddsArray
  return array.map(num => {
    if(num % 2 !== 0){
      return oddsOnlySorted[oddIndex++];
      //only replace the odd values with stuff from the sorted array
    }else{
      return num
    }
  })
}

function highAndLow(numbers){
  let numArray = numbers.split(' ').map(Number);
  let sortedArray = numArray.sort((a,b) => b-a)
  return (`${sortedArray[0]} ${sortedArray[sortedArray.length -1]}`)
}
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function multiplesOf3And5(number){
  if(number < 0){
    return 0
  }
  let sum = 0;
  for(let i = 0 ; i < number; i++){
    if(i % 3 === 0 || i % 5 === 0){
      sum += i
    }
  }
  return sum
}

function findShort(s){
  let stringArray = s.split(' ');
  return stringArray.reduce((smallest, current) => {
    return current.length < smallest ? current.length : smallest;
  }, Infinity)
}

function findShort(s){
  return Math.min(...s.split(' ').map((s => s.length)))
}

function sum (numbers) {
  return numbers.reduce((sum , a) => sum + a, 0)
};

function maskify(cc) {
  if(cc.length <= 4){
    return cc;
  }
  return '#'.repeat(cc.length -4) + cc.slice(-4)
}

function cakes(recipe, available) {
  let max = Infinity;
  for(let ingredient in recipe){
    if(!available[ingredient]){
      return 0;
    }
    let possible = Math.floor(available[ingredient] / recipe[ingredient]);
    max = Math.min(max, possible)
  }
  return max
}

function XO(str) {
  str = str.toLowerCase();
  let xCount = 0;
  let oCount = 0;
  for(let char of str){
    if(char === 'x'){
      xCount += 1;
    }else if (char === 'o'){
      oCount += 1;
    }
  }
  return xCount === oCount
}

function duplicateEncode(word){
  word = word.toLowerCase();
  let charCount = {}
  for(let char of word){
    charCount[char] = (charCount[char] || 0) + 1;
  }
  let encodedString  = ""
  for(let char of word){
    if(charCount[char] > 1){
      encodedString += ')'
    }else{
      encodedString += '('
    }
  }
  return encodedString
}

function getCount(str) {
  const vowels = new Set(['a','e','i','o','u'])
  return str.split('').filter((letter) => vowels.has(letter)).length;
}

function returnMissingNum(nums){
  //sort the array in order
  //compare each number to the last
  nums = nums.sort((a,b) => a-b)
  .filter(num => num > 0);
  const n = nums.length;
  if(nums[0] > 1 || n === 0){
    return 1
  }
  for(let i = 0; i < nums.length; i++){
    if(nums[i + 1] !== nums[i] + 1){
      return nums[i] + 1;
    }
  }
  return nums[n-1] + 1
}

function isPangram(string) {
  const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];

  return alphabetList.every((letter) => string.toLowerCase().includes(letter));
}

function findTwoIndexes(array, target){
  const map = {};
  for(let i =0; i < array.length; i++){
    const complement = target- array[i];
    if(map.hasOwnProperty(complement)){
      return [map[complement], i];
    }
    map[array[i]] = i;
  }
  return []
}

console.log(findTwoIndexes([5,2,3], 8))

var uniqueInOrder=function(iterable){
	return [...iterable].filter((a, i) => a !== iterable[i-1])
}

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

function tribonacci(signature,n){
  let finalArray = []
  if(!Array.isArray(signature)){
    return finalArray
  }
  finalArray = finalArray.concat(signature)
  for(let i = 0; i <= n - 4; i++){
    let sum = 0;
    sum += (finalArray[i] + finalArray[i+1] + finalArray[i+2]);
    finalArray.push(sum)
  }
  return finalArray.splice(0, n)
}

function sumMix(x){
  return x.reduce((accumulator, current) => accumulator + parseInt(current), 0)
}

function simpleMultiplication(number) {
	if(number % 2 === 0){
		return number * 8;
	}else{
		return number * 9
	}
}

function simpleMultiplication(n) {
	return n * (n % 2 ? 9 : 8);
}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
};

var number = function(busStops){
  return busStops.reduce((peopleOnBus, [peopleGetOn, peopleGetOff]) => {
    return peopleOnBus + peopleGetOn - peopleGetOff;
  }, 0)
}

var countBits = function(n) {
  // input is non-negative
  // input the count of '1' in the binary representation
  // retunr a number
  // convert n to binary
  //for each character, count number of '1' thenr return it
  return [... n.toString(2)].reduce((sum,num) => sum + parseInt(num), 0)
};

var countBits = function(n) {
  // Convert n to a binary string and then to an array of characters
  // Reduce the array, summing 1s directly
  return [...n.toString(2)].reduce((sum, bit) => sum + (bit === '1' ? 1 : 0), 0);
};

function alphabetPosition(text) {
  return text
  .toLowerCase().split('').filter(char => char >= 'a' && char <= 'z')
  .map(char => char.charCodeAt(0)-96)
  .join(' ')
}

function likes(names) {
  const patterns = [
    "no one likes this",
    `${names[0]} likes this`,
    `${names[0]} and ${names[1]} like this`,
    `${names[0]}, ${names[1]} and ${names[2]} like this`,
    `${names[0]}, ${names[1]} and ${names.length -2} others like this`
  ]
  return patterns[Math.min(names.length ,4)]
}

var solution = function(firstArray, secondArray) {

  var arr = [];

  for (var i = 0; i < firstArray.length; i++) {
    arr.push(Math.pow(secondArray[i] - firstArray[i], 2));
  }
  return arr.reduce((a,b) => a+b)/arr.length;

}

function descendingOrder(n){
  return Number([...n.toString()].sort((a,b) => b-a).join(''))
}

function tribonacci(signature, n) {
  if (n === 0) {
    return [];
  }
  
  let result = signature.slice(0, n);
  
  for (let i = 3; i < n; i++) {
    result.push(result[i-1] + result[i-2] + result[i-3]);
  }
  
  return result;
}

function firstNonRepeatingLetter(s) {
  var t=s.toLowerCase();
  for (var x=0;x<t.length;x++)
    if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
      return s[x];
  return "";
}

function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

function countBits(n) {
  return n.toString(2).split('0').join('').length;
};