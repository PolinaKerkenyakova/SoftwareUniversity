function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let brokenHelmetTimes = Math.floor(lostFightsCount / 2);
    let brokenSwordTimes = Math.floor(lostFightsCount / 3);
    let brokenShielTimes = Math.floor(lostFightsCount / 6);
    let brokenArmorTimes = Math.floor(brokenShielTimes / 2);

    let totalExpenses = brokenHelmetTimes * helmetPrice +
    brokenSwordTimes * swordPrice +
    brokenShielTimes * shieldPrice +
    brokenArmorTimes * armorPrice;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);