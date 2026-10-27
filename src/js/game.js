import Character from './domain.js'; // Импорт по умолчанию (без фигурных скобок)

export default class Game {           // Экспорт по умолчанию
    start() {
        console.log('game started');
    }
}

export class GameSavingData {         // Именованный экспорт (с фигурными скобками при импорте)
}

export function readGameSaving() {    // Именованный экспорт
}

export function writeGameSaving() {   // Именованный экспорт
}