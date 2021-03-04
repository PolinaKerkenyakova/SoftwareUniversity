function grades(grade) {

    let result = '';

    if (grade >= 2 && grade < 3) {
            result = 'Fail';
    } else if (grade >= 3 && grade < 3.5) {
        result = 'Poor';
    } else if (grade >= 3.5 && grade < 4.5) {
        result = 'Good';
    } else if (grade >= 4.5 && grade < 5.5) {
        result = 'Very good';
    } else if (grade >= 5.5) {
        result = 'Exellent';
    }

    if (result === 'Fail') {
       return (`${result} (2)`);
    } else {
        return (`${result} (${grade.toFixed(2)})`);
    }
}

console.log(grades(3.33));  //Poor (3.33)
console.log(grades(4.50));  //Very good (4.50)
console.log(grades(2.99));  // Fail (2)