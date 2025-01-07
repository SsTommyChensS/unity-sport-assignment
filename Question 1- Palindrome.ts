// Palindrome checking
// Option 1: Reversing the string
const isPalindrome = (originalString: string): boolean => {
    // Step 1: Format the string (trim spaces and convert to lowercase)
    const formattedString = originalString.trim().toLowerCase();
    
    // Step 2: Handle edge cases
    if (formattedString === '') {
        return false; // Empty string is not considered a palindrome
    }
    
    if (formattedString.length === 1) {
        return true; // Single character strings are always palindromes
    }
    
    // Step 3: Reverse the string
    let reversedString = '';
    for (let i = formattedString.length - 1; i >= 0; i--) {
        reversedString += formattedString[i];
    }
    
    // Step 4: Compare the original and reversed strings
    return formattedString === reversedString;
};

// Test cases
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello'));   // false
console.log(isPalindrome('A'));       // true
console.log(isPalindrome(' '));       // false
console.log(isPalindrome('Madam'));   // true

// Option 2: Two-Pointer Technique
const isPalindromeVer2 = (originalString: string): boolean => {
    // Step 1: Format the string
    const formattedString = originalString.trim().toLowerCase().replace(/[^a-z0-9]/g, '');

    if (formattedString === '') return false;

    // Step 2: Use Two-Pointer Technique
    let left = 0;
    let right = formattedString.length - 1;

    while (left < right) {
        if (formattedString[left] !== formattedString[right]) {
            return false; // Characters don't match
        }
        left++;
        right--;
    }

    return true; // All character pairs matched
};

// Test Cases
console.log(isPalindromeVer2('racecar')); // true
console.log(isPalindromeVer2('hello'));   // false
console.log(isPalindromeVer2(' '));       // false
console.log(isPalindromeVer2('Madam'));   // true