// Problem Two Example One 
function ProblemTwoExampleOne(value) {
    const charSet = new Set();
    let maxLength = 0;
    let left = 0; 

    for (let right = 0; right < value.length; right++) {
        const currentChar = s[right];

        while (charSet.has(currentChar)) {
            charSet.delete(s[left]);
            left++;
        }

        
        charSet.add(currentChar);

      
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}


const valueOne = "34kletjelrfjaslfd";
const resultProblemTwoExampleOne = ProblemTwoExampleOne(valueOne);
// console.log(resultProblemTwoExampleOne, "problem two expmaple ONE")


// ProblemTwoExampleTwo
function ProblemTwoExampleTwo(value) {
    const charSet = new Set(); 
    let maxLength = 0;
    let left = 0; 

    for (let right = 0; right < value.length; right++) {
        const currentChar = value[right];

        while (charSet.has(currentChar)) {
          
            charSet.delete(value[left]);
            left++;
        }

      
        charSet.add(currentChar);

        // Update the maximum length if needed
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usageTwo
const  value= "bbbbb";
const resultProblemTwoExampleTwo = ProblemTwoExampleTwo(s);
console.log(resultProblemTwoExampleTwo); 



// ProblemTwoExampleThre 
function ProblemTwoExampleThre(value) {
    const charIndexMap = new Map(); 
    let maxLength = 0;
    let left = 0; 

    for (let right = 0; right < value.length; right++) {
        const currentChar = value[right];

        if (charIndexMap.has(currentChar)) {
           
            left = Math.max(left, charIndexMap.get(currentChar) + 1);
        }

       
        charIndexMap.set(currentChar, right);

      
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usageThree
const valueTwo = "pwwkew";
const resultProblemTwoExampleThre = ProblemTwoExampleThre(valueTwo);
console.log(resultProblemTwoExampleThre, "problem two example three"); 



// ProblemTwoExampleTFour
function ProblemTwoExampleTFour(value) {
    const charSet = new Set(); // To store characters in the current substring
    let maxLength = 0;
    let left = 0; // Left pointer of the sliding window

    for (let right = 0; right < value.length; right++) {
        const currentChar = value[right];

        while (charSet.has(currentChar)) {
            
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(currentChar);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usageFoure
const valueFour = "abcdefg";
const resultProblemTwoExampleTFour = ProblemTwoExampleTFour(valueFour);
console.log(resultProblemTwoExampleTFour, "PROBLEM TWO EXAMPLE FOUR"); 