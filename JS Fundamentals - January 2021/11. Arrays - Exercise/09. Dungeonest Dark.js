function dungeonestDark(data) {

    let bestRoom = 0;
    let health = 100;
    let coins = 0;

    let dungeon = data[0].split('|');

    for (let room of dungeon) {
        let tokens = room.split(' ');
        let encountered = tokens[0];
        let value = Number(tokens[1]);


        if (encountered === 'potion') {
            if (health + value > 100) {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            } else {
                console.log(`You healed for ${value} hp.`);
                health += value;
            }
            console.log(`Current health: ${health} hp.`);
            bestRoom++;
        } else if (encountered === 'chest') {
            coins += value;
            console.log(`You found ${value} coins.`);
            bestRoom++;
        } else {
            health -= value;

            if (health <= 0) {
                console.log(`You died! Killed by ${encountered}.`);
                bestRoom++
                console.log(`Best room: ${bestRoom}`);
                break;
            } else {
                console.log(`You slayed ${encountered}.`);
                bestRoom++;
            }
        }
    }

    if (bestRoom === dungeon.length) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);



// function solve([string]) {
//     let health = 100;
//     let coins = 0;
//     let rooms = string.split('|');
//     for (let i = 0; i < rooms.length; i++) {
//         let [command, number] = rooms[i].split(' ');
//         number = Number(number);
//         switch (command) {
//             case 'potion':
//                 healed = health + number > 100 ? 100 - health : number;
//                 health += healed;
//                 console.log(`You healed for ${healed} hp.`);
//                 console.log(`Current health: ${health} hp.`);
//                 break;
//             case 'chest':
//                 coins += number;
//                 console.log(`You found ${number} coins.`);
//                 break;
//             default:
//                 health -= number;
//                 if (health <= 0) {
//                     console.log(`You died! Killed by ${command}.`);
//                     console.log(`Best room: ${i + 1}`);
//                     return;
//                 } else {
//                     console.log(`You slayed ${command}.`);
//                 }
//                 break;
//         }
//     }
//     console.log(`You've made it!`);
//     console.log(`Coins: ${coins}`);
//     console.log(`Health: ${health}`);
// }






// function solve([string]) {
//     let mainIndex = 0;
//     let insideIndex = 0;
//     let word = '';
//     let array = [];
//     let counter = 0;
 
//     while (mainIndex < string.length) {
//         for (let i = mainIndex; i < string.length; i++) {
//             let letter = string[i];
//             if (letter !== ' ' && letter !== '|') {
//                 word += letter;
//             } else {
//                 break;
//             }
//             counter++;
//         }
//         array.push(word);
//         counter++;
//         mainIndex = counter;
//         word = '';
//     }
 
//     let indexArray = 0;
//     let health = 100;
//     let coins = 0;
//     let room = 1;
//     let isDead = false;
 
//     while (indexArray < array.length) {
//         let itemOrMonster = array[indexArray];
//         indexArray++;
//         let number = Number(array[indexArray]);
//         if (itemOrMonster == 'potion') {
//             health += number;
//             if (health > 100) {
//                 number = 100 - (health - number);
//                 health = 100;
//             }
//             console.log(`You healed for ${number} hp.`);
//             console.log(`Current health: ${health} hp.`);
//         } else if (itemOrMonster == 'chest') {
//             coins += number;
//             console.log(`You found ${number} coins.`);
//         } else {
//             health -= number;
//             if (health <= 0) {
//                 console.log(`You died! Killed by ${itemOrMonster}.`);
//                 console.log(`Best room: ${room}`);
//                 isDead = true;
//                 break;
//             } else if (health > 0) {
//                 console.log(`You slayed ${itemOrMonster}.`);
//             }
//         }
//         room++;
//         indexArray++;
//     }
 
//     if (isDead == false) {
//         console.log(`You've made it!`);
//         console.log(`Coins: ${coins}`);
//         console.log(`Health: ${health}`);
//     }
// }