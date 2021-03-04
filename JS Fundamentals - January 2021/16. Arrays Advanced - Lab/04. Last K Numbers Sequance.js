function numberSequance(n, k) {
 
    let arr = [1];
   
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = i - 1;

        let sum = 0;

        for (let j = start; j < end; j++) {
            sum += end[j]
        }

        arr[i] = sum
    }

    console.log(arr.join(' '));
}

numberSequance(6, 3);
// numberSequance(8, 2);


/////////////////////////////////????????????????????????????