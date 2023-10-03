// ProblemThreeExampleOne

function ProblemThreeExampleOnenumSquares(number) {
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= number; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }

    return dp[number];
}

const valueOne = 12;
const resultProblemThreeExampleOnenumSquares = ProblemThreeExampleOnenumSquares(n);
console.log(resultProblemThreeExampleOnenumSquares, "Problem three example One"); 



// ProblemThreeExampleTwo
function ProblemThreeExampleTwonumSquares(number) {
  
    const dp = new Array(number + 1).fill(Infinity);
    dp[0] = 0;

   
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }

    return dp[number];
}

const valueTwo = 13;
const resultProblemThreeExampleTwonumSquares = ProblemThreeExampleTwonumSquares(valueTwo);
console.log(ProblemThreeExampleTwonumSquares, "Problem three example two"); 



// ProblemThreeExampleThree

function ProblemThreeExampleThreenumSquares(number) {
    // Create an array to store the least number of perfect squares for each value from 0 to n
    const dp = new Array(number + 1).fill(Inumberfinity);
    dp[0] = 0;

    // Calculate the perfect squares up to n and fill in the dp array
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }

    return dp[number];
}

// Example usage
const valueThree = 25;
const resultProblemThreeExampleThreenumSquares = ProblemThreeExampleThreenumSquares(valueThree);
console.log(resultProblemThreeExampleThreenumSquares, "Problem three example three"); 
