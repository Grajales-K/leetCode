// 412. Fizz Buzz
// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Constraints:

// 1 <= n <= 104


let fizzBuzz = function (n) {
  //we declared a result variable to store the final result which is an array of strings
  let result = [];

  //this loop start from 1 because the problem is 1-indexed and it will loop until n
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      //everything that is divisible by 3 and 5 will be pushed to the result array as "FizzBuzz" to the end of the array
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      //if the number is not divisible by 3 or 5, we will push the number as a string to the result array
      result.push(i.toString());
    }
  }
  return result;
};


//Manually test cases:


//this will be an array of test cases where each test case is an array of two elements, the first element is the input n and the second element is the expected output array
const testCases = [
  [3, ['1', '2', 'Fizz']],
  [5, ['1', '2', 'Fizz', '4', 'Buzz']],
  [15, [ '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz','Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']]
];

console.log('-------------------- test cases --------------------');

testCases.forEach(([input, expected]) => {
  const result = fizzBuzz(input);

  const passed = result.join(',') === expected.join(',');

  console.log(`Input: ${input} Expected ${expected} | Test Passed: ${passed}`);

  for (let i = 0; i < input; i++) {
    if (result.at(i) === expected.at(i)) {
      console.log(`Elements at ${i} is equal`);
    }
  }
});