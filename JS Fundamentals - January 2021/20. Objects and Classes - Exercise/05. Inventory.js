function inventory(input) {

    let heroes = [];
    for (let i = 0; i < input.length; i++) {
        let [heroName, heroLevel, tokens] = input[i].split(' / ');

        let item = tokens.split(', ')        
        item.sort((a, b) => {
            return a.localeCompare(b);
        });

        let sortedItems = item.join(', ');

        let hero = {
            name: heroName,
            level: Number(heroLevel),
            items: sortedItems,
        }
        heroes.push(hero);
    }

    heroes.sort((a, b) => {
        return a.level - b.level;
    });
   
   heroes.forEach(hero => {
    console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
   });
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]);