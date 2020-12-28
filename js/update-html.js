export class UpdateHtml {

    static winScore = 0;
    static drawScore = 0;
    static failScore = 0;
    static roundCounter = 1;

    updateScoreTable(result) {
        const wins = document.querySelector(".wins");
        const draws = document.querySelector(".draws");
        const fails = document.querySelector(".fails");
        const gameRound = document.querySelector(".game__round");
        gameRound.innerHTML = `Runda ${++UpdateHtml.roundCounter}. Wybierz symbol `;

        switch (result) {
            case 0:
                fails.innerHTML = ++UpdateHtml.failScore;
                break;
            case 1:
                wins.innerHTML = ++UpdateHtml.winScore;
                break;
            case 2:
                draws.innerHTML = ++UpdateHtml.drawScore;
                break;
        }
    }
    matchResultView(result, player, computer) {
        const paper = '<div class="gameBoardItem__image">papier</div>';
        const stone = '<div class="gameBoardItem__image">kamien</div>';
        const scissors = '<div class="gameBoardItem__image">nożyce</div>';
        const board = document.querySelector(".gameBoard");
        const gameBoard = document.querySelector(".game__board");


        board.innerHTML = `<div class="gameBoard__item">${paper}</div><div class="gameBoard__item">${stone}</div>`;
    }
}