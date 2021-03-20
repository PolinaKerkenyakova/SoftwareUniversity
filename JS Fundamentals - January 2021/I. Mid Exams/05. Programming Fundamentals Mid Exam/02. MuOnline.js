function muOnline(inputString) {

    let input = inputString.split('|');

    let health = 100;
    let bitcoins = 0;
    let bestRoom = 0;
    let isGameOver = false;

    for (let i = 0; i < input.length; i++) {
        let [command, number] = input[i].split(' ');

        bestRoom++;

        number = Number(number);
        if (command === 'potion') {
            let healedFor = 0;

            if (health + number > 100) {
                healedFor = 100 - health;
                health = 100;
            } else {
                health += number;
                healedFor = number;
            }

            console.log(`You healed for ${healedFor} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command === 'chest') {
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);

        } else {
            let monster = command;

            health -= number;

            if (health > 0) {
                console.log(`You slayed ${monster}.`)
            } else {
                console.log(`You died! Killed by ${monster}.`)
                console.log(`Best room: ${bestRoom}`)
                isGameOver = true;
                break;
            }
        }
    }

    if (!isGameOver) {
        console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`)
    }
}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');