function sumFirstLast(inputArray) {

   let first = Number(inputArray[0]);
   let last = Number(inputArray[inputArray.length - 1]);

   console.log(first + last);
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);