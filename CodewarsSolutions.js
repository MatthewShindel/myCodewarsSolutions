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

function scoreThrows(radii){
  let bonus = 0;
  let score = 0;
  if(radii.length === 0) {
    return 0;
  }
  for(let i = 0; i < radii.length; i++){
    if(radii[i] < 5){
      bonus ++;
      score += 10;
    }else if(radii[i] <= 10){
      score += 5
    }
  }
  if(bonus === radii.length){
    score += 100
  }
  return score;
}