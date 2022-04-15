function tseam(input) {
    let games = input[0].split(' ');

    for (let i = 1; i < input.length; i++) {
        let currentEl = input[i].split(' '); // разделя думите със спейс
        let command = currentEl[0]; // взима 1-вата дума
        let newGame = currentEl[1]; //взима 2-та дума

        if (command === 'Play') {
            break;
            //Install {game}// - add the game at the last position in the account, but only if it isn't installed already.
        } else if (command === "Install" && games.includes(newGame) === false) {
            games.push(newGame);
            //Uninstall {game} - delete the game if it exists.
        } else if (command === 'Uninstall' && games.includes(newGame)) {
            let index = games.indexOf(newGame);
            games.splice(index, 1);
            //Update {game} - update the game if it exists and place it in the last position.
        } else if (command === 'Update' && games.includes(newGame)) {
            let index = games.indexOf(newGame);
            games.splice(index, 1);
            games.push(newGame);

            //Expansion {game}-{expansion} - check if the game exists and insert after it the expansion in the following format: "{game}:{expansion}";

        } else if (command === 'Expansion') {
            let expansion = newGame.split('-');
            let game = expansion[0];

            if (games.includes(game)) {
                let expandedGame = expansion.join(':');
                let index = games.indexOf(game);
                games.splice(index + 1, 0, expandedGame);
            }
        }
    }

    console.log(games.join(' '));
}
tseam(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'
])








/*tseam(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
]);*/