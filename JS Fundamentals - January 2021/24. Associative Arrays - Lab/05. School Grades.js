function schoolGrades(input) {

    let students = new Map();

    for (let line of input) {
        let [name, ...grades] = line.split(' ');

        grades = grades.map(Number);

        if ((students.has(name))) {
            let currentGrades = students.get(name);
            students.set(name, currentGrades.concat(grades));
        } else {
            students.set(name, grades);
        }
    }

    let sortedGradeEntries = Array.from(students.entries());

    sortedGradeEntries.sort((a, b) => {
        let averrageGradeA = getAverageGrade(a[1]);
        let averrageGradeB = getAverageGrade(b[1]);

        return averrageGradeA - averrageGradeB;
    });


    for (let kvp of sortedGradeEntries) {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`)
    }

    function getAverageGrade(grades) {
        let gradesSum = 0;

        for (let grade of grades) {
            gradesSum += grade;
        }

        return gradesSum / grades.length;
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);