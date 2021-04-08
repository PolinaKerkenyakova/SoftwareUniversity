function heroesOfCodeLogic(input) {

    let heroesCount = input.shift();
    let heroes = {};
    for (let i = 0; i < heroesCount; i++) {
        let [hero, hp, mp] = input.shift().split(' ');

        hp = Number(hp);
        mp = Number(mp);

        if (hp > 100) {
            hp = 100;
        }

        if (mp > 200) {
            mp = 200;
        }

        heroes[hero] = { hp, mp };
    }

    let commandLine = input.shift();
    while (commandLine !== 'End') {
        let [command, heroName, firstArgument, secondArgument] = commandLine.split(' - ');

        if (command === 'CastSpell') {
            let mpNeeded = Number(firstArgument);
            let spellName = secondArgument;

            if (heroes[heroName].mp >= mpNeeded) {
                heroes[heroName].mp -= mpNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }

        } else if (command === 'TakeDamage') {
            let damage = Number(firstArgument);
            let attacker = secondArgument;

            if (heroes[heroName].hp - damage > 0) {
                heroes[heroName].hp -= damage;
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`)
            } else {
                console.log(`${heroName} has been killed by ${attacker}!`)
                delete heroes[heroName];
            }

        } else if (command === 'Recharge') {
            let amount = Number(firstArgument);
            let rechargedFor = 0;
            if (heroes[heroName].mp + amount > 200) {
                rechargedFor = 200 - heroes[heroName].mp;
                heroes[heroName].mp = 200;
            } else {
                heroes[heroName].mp += amount;
                rechargedFor = amount;
            }
            console.log(`${heroName} recharged for ${rechargedFor} MP!`)

        } else if (command === 'Heal') {
            let amount = Number(firstArgument);
            let rechargedFor = 0;
            if (heroes[heroName].hp + amount > 100) {
                rechargedFor = 100 - heroes[heroName].hp;
                heroes[heroName].hp = 100;
            } else {
                heroes[heroName].hp += amount;
                rechargedFor = amount;
            }

            console.log(`${heroName} healed for ${rechargedFor} HP!`)
        }

        commandLine = input.shift();
    }

    let heroesEntries = Object.entries(heroes);

    heroesEntries.sort((a, b) => {
        if (a[1].hp !== b[1].hp) {
            return b[1].hp - a[1].hp;
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    for (let kvp of heroesEntries) {
        console.log(`${kvp[0]}`);
        console.log(` HP: ${kvp[1].hp}`);
        console.log(` MP: ${kvp[1].mp}`);
    }
}

heroesOfCodeLogic([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
  ]);

  heroesOfCodeLogic([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
  ]);