function palindromeIntegers(numArray) {

    let reversed = reversedNumbers(numArray);
    isItPalindrome(numArray, reversed);

    function isItPalindrome(arr, reverse) {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === reverse[i]) {
                console.log('true');
            } else {
                console.log('false');
            }
        }
    } 

    function reversedNumbers(nums) {

        let reversedNumArray = [];
        for (let i = 0; i < nums.length; i++) {
            let currentNum = nums[i];
            currentNum = currentNum.toString();
            let num = '';
            for (let j = currentNum.length - 1; j >= 0; j--) {
                num += currentNum[j];
            }

            reversedNumArray.push(Number(num))
        }

        return reversedNumArray;
    }
}

// palindromeIntegers([123,323,421,121]);
palindromeIntegers([123,323,421,121]);