import { default as Game, GameSavingData, readGameSaving  as loadGame, writeGameSaving  as saveGame } from './game.js'
console.log('работает модуль modules/app.js');
const game = new Game();
game.start();
