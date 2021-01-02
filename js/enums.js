export class GamePawn {
    constructor(num, html) {
        this.num = num;
        this.html = html;
    }
}

export const pawns = new Map([
    ["paper", new GamePawn(1, '<img class="gameBoardItem__image" src="img/paper.svg" alt="paper">')],
    ["stone", new GamePawn(2, '<img class="gameBoardItem__image" src="img/stone.svg" alt="stone">')],
    ["scissors", new GamePawn(3, '<img class="gameBoardItem__image" src="img/scissors.svg" alt="scissors">')],
    ["arrowLeft", new GamePawn(11, '<div class="gameBoardItem__icon">&larr;</div>')],
    ["arrowDown", new GamePawn(12, '<div class="gameBoardItem__icon">&darr;</div>')],
    ["arrowRight", new GamePawn(13, '<div class="gameBoardItem__icon">&rarr;</div>')]
]);