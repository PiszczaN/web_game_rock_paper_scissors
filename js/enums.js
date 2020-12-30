export class GamePawn {
    constructor(num, html) {
        this.num = num;
        this.html = html;
    }
}

export const pawns = [
    new GamePawn(1, '<div class="gameBoardItem__image">papier</div>'),
    new GamePawn(2, '<div class="gameBoardItem__image">kamien</div>'),
    new GamePawn(3, '<div class="gameBoardItem__image">nozyce</div>'),
    new GamePawn(11, '<div class="gameBoardItem__icon">&larr;</div>'),
    new GamePawn(12, '<div class="gameBoardItem__icon">&darr;</div>'),
    new GamePawn(13, '<div class="gameBoardItem__icon">&rarr;</div>')
];