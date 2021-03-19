function numberSearch(arrOne, arrTwo) {

    let numbersToBeTaken = arrTwo[0];
    let numbersToBeDeleted = arrTwo[1];
    let numberToBeSearchFor = arrTwo[2];

    let nums = arrOne.slice(0, numbersToBeTaken);
    nums = nums.slice(numbersToBeDeleted);

    let occuringTimes = 0;
    for (let i = 0; i < nums.length; i++) {
       
        if (nums[i] === numberToBeSearchFor) {
            occuringTimes++;
        }
    }

    console.log(`Number ${numberToBeSearchFor} occurs ${occuringTimes} times.`)
}

numberSearch([5, 2, 3, 4, 1, 6],
    [5, 2, 3])