function softuniReception(inputArr) {

    let input = inputArr.map(Number);

    let firstEmployee = input[0];
    let secondEmployee = input[1];
    let thirdEmployee = input[2];

    let helpedStdentsPerHour = firstEmployee + secondEmployee + thirdEmployee;

    let studentsCount = input[3];

    let hours = 0;
    while(studentsCount > 0) {
        hours++;

        if(!(hours % 4 === 0)) {
            studentsCount -= helpedStdentsPerHour;
        }
    }

    console.log(`Time needed: ${hours}h.`)
}

softuniReception(['5','6','4','20']);
softuniReception(['1','2','3','45']);
softuniReception(['3','2','5','40']);