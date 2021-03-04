function firstAndLastK(arrInput) {

    let k = arrInput.shift();

    let first = arrInput.slice(0 , k);
    let last = arrInput.slice(arrInput.length - k, arrInput.length)
    
    console.log(first.join(' '));
    console.log(last.join(' '));
}

firstAndLastK([2, 7, 8, 9]);
firstAndLastK([3, 6, 7, 8, 9])