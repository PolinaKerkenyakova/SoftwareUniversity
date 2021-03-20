function bonusScoringSystem(inputArr) {

    let input = inputArr.map(Number);
    let studentsCount = input.shift();
    let lecturesCount = input.shift();
    let additionalBonnus = input.shift();

    let maxBonus = 0;
    let studentAttendances = 0;

    for (let i = 0; i < studentsCount; i++) {
        let totalBonus = (input[i] / lecturesCount) * (5 + additionalBonnus);

        if (maxBonus < totalBonus) {
            maxBonus = totalBonus;
            studentAttendances = input[i];
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${studentAttendances} lectures.`)
}

bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);