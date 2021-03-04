function tseamAccount(input) {

    let games = input.shift().split(' ');

    let commandGame = input.shift();

    while (commandGame !== 'Play!') {

        let [command, gameName] = commandGame.split(' ');
        let [game, expansion] = gameName.split('-')
        let gameIndex = games.indexOf(game);

        if (command === 'Install') {
            if (!(gameIndex > -1)) {
                games.push(game);
            }

        } else if (command === 'Uninstall') {
            if (gameIndex > -1) {
                games.splice(gameIndex, 1);

            }

        } else if (command === 'Update') {
            if (gameIndex > -1) {
                games.splice(gameIndex, 1);
                games.push(game);
            }

        } else if (command === 'Expansion') {
            if (gameIndex > -1) {
                games.splice(gameIndex + 1, 0, `${game}:${expansion}`);
            }
        }

        commandGame = input.shift();
    }

    console.log(games.join(' '));
}

tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']);
tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']);