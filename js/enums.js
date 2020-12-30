export class GamePawn {
    constructor(num, html) {
        this.num = num;
        this.html = html;
    }
}

export const pawns = new Map([
    ["paper", new GamePawn(1, '<div class="gameBoardItem__image">papier</div>')],
    ["stone", new GamePawn(2, '<div class="gameBoardItem__image">kamien</div>')],
    ["scissors", new GamePawn(3, '<div class="gameBoardItem__image">nozyce</div>')],
    ["arrowLeft", new GamePawn(11, '<div class="gameBoardItem__icon">&larr;</div>')],
    ["arrowDown", new GamePawn(12, '<div class="gameBoardItem__icon">&darr;</div>')],
    ["arrowRight", new GamePawn(13, '<div class="gameBoardItem__icon">&rarr;</div>')]
]);