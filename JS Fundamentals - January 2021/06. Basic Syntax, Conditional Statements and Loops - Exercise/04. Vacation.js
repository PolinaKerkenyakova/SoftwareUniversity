function vacation(peopleCount, groupType, dayOfWeek) {
    
    let price = 0;

    if (dayOfWeek === 'Friday') {
        switch (groupType) {
            case 'Students': 
                price = 8.45;
                break;
            case 'Business':
                price = 10.9;
                break;
            case 'Regular':
                price = 15;
                break;
        }

    } else if (dayOfWeek === 'Saturday') {
        switch (groupType) {
            case 'Students': 
                price = 9.8;
                break;
            case 'Business':
                price = 15.6;
                break;
            case 'Regular':
                price = 20;
                break;
        }

    } else if (dayOfWeek === 'Sunday') {
        switch (groupType) {
            case 'Students': 
                price = 10.46;
                break;
            case 'Business':
                price = 16;
                break;
            case 'Regular':
                price = 22.5;
                break;
        }
    }

    let totalPrice = 0;

    if (groupType === 'Students' && peopleCount >= 30) {
        totalPrice = peopleCount * price * .85
    } else if (groupType === 'Business' && peopleCount >= 100) {
        totalPrice = (peopleCount - 10) * price;
    } else if (groupType === 'Regular' && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice = peopleCount * price *.95;
    } else {
        totalPrice = peopleCount * price;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);               
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");