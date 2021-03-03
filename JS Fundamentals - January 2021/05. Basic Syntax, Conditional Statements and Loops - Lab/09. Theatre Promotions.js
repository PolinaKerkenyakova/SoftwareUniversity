function theatrePromotions(dayOfWeek, age) {

    let price = '';
    let isError = '';

    if (age >= 0 && age <= 18) {
        if (dayOfWeek === 'Weekday') {
            price = '12$';
        } else if (dayOfWeek === 'Weekend') {
            price = '15$';
        } else if (dayOfWeek === 'Holiday') {
            price = '5$';
        }

    } else if (age > 18 && age <= 64) {
        if (dayOfWeek === 'Weekday') {
            price = '18$';
        } else if (dayOfWeek === 'Weekend') {
            price = '20$';
        } else if (dayOfWeek === 'Holiday') {
            price = '12$';
        }

    } else if (age > 64 && age <= 122) {
        if (dayOfWeek === 'Weekday') {
            price = '12$';
        } else if (dayOfWeek === 'Weekend') {
            price = '15$';
        } else if (dayOfWeek === 'Holiday') {
            price = '10$';
        }

    } else {
        isError = true;
    }


    if (isError) {
        console.log('Error!');
    } else {
        console.log(price);
    }
} 

theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 15);