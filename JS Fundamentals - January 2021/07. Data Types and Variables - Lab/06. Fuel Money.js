function fuelMoney(distance, passengers, pricePerLiterDiesel) {

    let moneyNeeded = ((distance / 100) * 7 + (passengers * 0.1)) * pricePerLiterDiesel ;

    console.log(`Needed money for that trip is ${moneyNeeded}lv.`);
}

fuelMoney(260, 9, 2.49);
fuelMoney(90, 14, 2.88);