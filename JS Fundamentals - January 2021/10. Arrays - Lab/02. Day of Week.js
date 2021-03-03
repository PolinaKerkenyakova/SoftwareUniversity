function dayOfWeekPrinter(day) {

    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];  

    if (day >= 1 && day <= 7) {
        console.log(weekDays[day - 1]);
    } else {
        console.log('Invalid day!');
    }  
}  

dayOfWeekPrinter(3);
dayOfWeekPrinter(6);
dayOfWeekPrinter(11);