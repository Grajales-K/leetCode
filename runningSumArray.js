//  ---------------- Requirements: --------------

// Goal:
// Practice arrays, loops, and updating values based on previous values.

// Task:
// Solve the “Running Sum of 1d Array” problem in JavaScript.

// Steps:

// Read the problem.
// Explain what “running sum” means in your own words.
// Write 2 examples manually.
// Try to solve it using a loop.
// Submit the solution on LeetCode.

// Acceptance Criteria:

// Solution is accepted.
// You can explain how each new value is calculated.
// You can solve it using a loop.
// You understand the difference between creating a new array and modifying an existing one.
// Notes include your approach and what was confusing.

// AI Rule:
// Try for 30 minutes without AI. If you are stuck, watch one explanation video before asking AI. After the video, try to solve the problem again by yourself. Use AI only after your own attempt and the video explanation, mainly for hints, debugging, or reviewing your solution. -->

// --------------- Problem: ------------

// 1480. Running Sum of 1d Array
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6



/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function (nums) {
  let newArrNumbers = [];
  let sumResult = 0;

  for (let i = 0; i < nums.length; i++) {
    sumResult = sumResult + nums[i];
    console.log(sumResult);
    newArrNumbers.push(sumResult);
  }
  return newArrNumbers;
};
