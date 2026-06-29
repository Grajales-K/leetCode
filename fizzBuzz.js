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

  // Loop through each element to compare them one by one (like a magnifying glass)
  // This helps us see exactly WHERE the code fails if the test doesn't pass
  for (let i = 0; i < input; i++) {
    if (result.at(i) === expected.at(i)) {
      console.log(`Elements at ${i} is equal`);
    }
  }
});



// ---------- Explanation of the Code: -----------

// The problem asks to return an array based on checking the input integer and generating all numbers until reaching that integer ($n$). If the number is 3, we will generate numbers from 1 to 3; if the number is 5, we will generate numbers from 1 to 5, and so on.In this case, we will check a number and we need to store it in i, indexing from 1 to $n$. We will check if the number is divisible by 3 and 5; if it is, we will push "FizzBuzz" to the result array. If it is only divisible by 3, we will push "Fizz" to the result array; if it is only divisible by 5, we will push "Buzz" to the result array. And if it is not divisible by any of them, we will push the number as a string to the result array.Then, we will return the result array.

// This array will store the elements from 0 to $n-1$. To check if the result is the expected one, we need to create our own testCases. We can use join(), but we are currently checking two different boxes, and each box is stored in a different memory location. 

// So, they look identical, but they are not the same box. Using join() will convert them into a string, and with this, it will print that they are equal. However, if we have an expected array like ["12", "a", "b"] and the result was ["1", "2a", "b"], after using join(), both will become "12ab".

// They look the same as strings, but they weren't in the order we expected at the beginning.For that reason, we use another for loop to compare each position of the array with each position of the expected array, using .at(). This will show if they are equal or not.
