function meeting(input) {

    let schedule = new Map();

    for (let appoitment of input) {
        let [weekDay, name] = appoitment.split(' ');

        if (!(schedule.has(weekDay))) {
            schedule.set(weekDay, name);
            console.log(`Scheduled for ${weekDay}`);
        } else {
            console.log(`Conflict on ${weekDay}!`);
        }
    }

    for (let appoitment of schedule) {
        console.log(`${appoitment[0]} -> ${appoitment[1]}`);
    }
}

meeting(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);