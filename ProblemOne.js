
// Problem one expmple one 
const ProblemOneExampleOne = (l1, l2) => {
   
    const mergedArray = [...l1, ...l2].sort((a, b) => a - b);
    return mergedArray;
}

const P1Exm1l1 = [1, 2, 4];
const P1Exm1l2 = [1, 3, 4];
const resultOfProblemOneExample1 = ProblemOneExampleOne(P1Exm1l1, P1Exm1l2);
// console.log(resultOfProblemOneExample1, "Problem One example one"); 

// Problem one expmple two
const ProblemOneExampleTwo = (l1, l2) => {
  
    const mergedArray = [...l1, ...l2].sort((a, b) => a - b);
    return mergedArray;
}

const P1Exm2l1 = [];
const P1Exm2l2 = [0];
const resultOfProblemOneExample2 = ProblemOneExampleTwo(P1Exm2l1, P1Exm2l2);
// console.log(resultOfProblemOneExample2, Problem One example two);  

// Problem one expmple three 
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
function arrayToList(arr) {
    let head = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        head = new ListNode(arr[i], head);
    }
    return head;
}
function ProblemTwoExampleThree(head) {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

const P1Exm2l3 = arrayToList([2, 3, 4]);
const P1Exm2l4 = arrayToList([4, 5, 6]);
const resultOfProblemTwoExampleThree= ProblemTwoExampleThree(P1Exm2l3, P1Exm2l3)
console.log(resultOfProblemTwoExampleThree, "Problem One example three")



