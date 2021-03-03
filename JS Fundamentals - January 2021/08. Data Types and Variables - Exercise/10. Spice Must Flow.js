function spiceMustFlow(startingYeild) {

    let spices = startingYeild;
    let totalAmount = 0;
    let days = 0;

    while (startingYeild >= 100) {
        days++;
        spices = startingYeild - 26;
        totalAmount += spices;
        
        startingYeild -= 10;
    }

    totalAmount -= 26;

    console.log(days);
    console.log(Math.max(0, totalAmount));
}

spiceMustFlow(111);