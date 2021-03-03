function dungeonestDark(input) {
    let dungeonsRooms = input[0].split("|")

    let health = 100;
    let coins = 0;
    let bestRoom = 0;
    let isGameOver = false;

    for (let i = 0; i < dungeonsRooms.length; i++) {
        let [itemOrMonster, number] = dungeonsRooms[i].split(' ');

        number = Number(number);
        bestRoom++;

        let healedFor = 0;
        if (itemOrMonster === 'potion') {
            if (health + number > 100) {
                healedFor = 100 - health;
                health = 100;

            } else {
                health += number;
                healedFor = number;
            }

            console.log(`You healed for ${healedFor} hp.`)
            console.log(`Current health: ${health} hp.`)

        } else if (itemOrMonster === 'chest') {
            coins += number;
            console.log(`You found ${number} coins.`)
        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${itemOrMonster}.`)
            } else {
                console.log(`You died! Killed by ${itemOrMonster}.`);
                console.log(`Best room: ${bestRoom}`);
                isGameOver = true;
                break;
            }
        }
    }

    if (!isGameOver) {
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);