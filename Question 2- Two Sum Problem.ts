// Two sum problem
const twoSum = (nums: number[], target: number): number[][] => {
    let seen: { [key: number]: number } = {};  // To store numbers and their indices
    let result: number[][] = [];  // To store the result pairs

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        // Check if the complement is in the seen object
        if (seen[complement] !== undefined) {
            result.push([seen[complement], i]);  // Add the pair of indices to the result
        }

        // Store the current number and its index
        seen[nums[i]] = i;
    }

    return result;
}

// Test cases
const nums1 = [3, 2, 4, 3];
const target1 = 6;
console.log(twoSum(nums1, target1)); // Output: [[1, 2], [0, 3]] 

const nums2 = [2, 7, 11, 15];
const target2 = 9;
console.log(twoSum(nums1, target1)); // Output: [[0, 1]] 