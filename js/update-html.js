import { pawns } from "./enums.js";
import { Options } from "./options.js";
import { scoreAnimation, DOMelements, continueMatchAnimation, matchResultAnimation } from "./animations.js";

export class UpdateHtml {

    static winScore = 0;
    static drawScore = 0;
    static failScore = 0;
    static roundCounter = 1;
    static isCheck = true;
    static displayButton = false;

    scoreResetInit() {
        const scoreResetButton = document.querySelector(".reset");
        scoreResetButton.addEventListener("click", () => { this.scoreReset() });
    }

    scoreReset() {
        UpdateHtml.winScore = 0;
        UpdateHtml.drawScore = 0;
        UpdateHtml.failScore = 0;
        UpdateHtml.roundCounter = 0;

        DOMelements.failScore.innerHTML = UpdateHtml.failScore;
        DOMelements.winScore.innerHTML = UpdateHtml.winScore;
        DOMelements.drawScore.innerHTML = UpdateHtml.drawScore;
        DOMelements.gameRound.innerHTML = `Runda ${UpdateHtml.roundCounter}. Wybierz symbol`;

        this.matchView();
    }

    updateScoreTable(result) {

        switch (result) {
            case 0:
                DOMelements.failScore.innerHTML = ++UpdateHtml.failScore;
                scoreAnimation(DOMelements.failScore);
                break;
            case 1:
                DOMelements.winScore.innerHTML = ++UpdateHtml.winScore;
                scoreAnimation(DOMelements.winScore);
                break;
            case 2:
                DOMelements.drawScore.innerHTML = ++UpdateHtml.drawScore;
                scoreAnimation(DOMelements.drawScore);
                break;
        }
    }

    matchResultLabel(result) {
        switch (result) {
            case 0:
                return 'Niestety, przegrałeś! :(';
            case 1:
                return 'Gratulacje, wygrałeś!! :))';
            case 2:
                return 'Remis, graj dalej!';
        }
    }

    matchResultView(result, player, computer) {
        UpdateHtml.isCheck = false;
        const resultLabel = this.matchResultLabel(result);

        DOMelements.pawnPlaces[0].innerHTML = `${player}`;
        DOMelements.pawnPlaces[1].innerHTML = `${computer}`;
        DOMelements.pawnPlaces[2].classList.add("none");

        setTimeout(() => {
            DOMelements.pawnPlaces[1].innerHTML += `<span class="gameBoard__matchResult"><button class="gameBoard__matchResultButton">Graj dalej!</button></span>`;
            UpdateHtml.displayButton = true;

            const backToMatchView = document.querySelector(".gameBoard__matchResult");
            backToMatchView.addEventListener("click", () => { this.matchView() });
        }, 500);

        matchResultAnimation();
        DOMelements.gameRound.innerHTML = resultLabel;
    }

    matchView() {
        UpdateHtml.isCheck = true;
        UpdateHtml.displayButton = false;
        DOMelements.gameRound.innerHTML = `Runda ${++UpdateHtml.roundCounter}. Wybierz symbol`;
        DOMelements.pawnPlaces[2].classList.remove("none");

        DOMelements.pawnPlaces[0].innerHTML = `${pawns.get("paper").html}${pawns.get("arrowLeft").html}`;
        DOMelements.pawnPlaces[1].innerHTML = `${pawns.get("stone").html}${pawns.get("arrowDown").html}`;
        DOMelements.pawnPlaces[2].innerHTML = `${pawns.get("scissors").html}${pawns.get("arrowRight").html}`;

        continueMatchAnimation();
        const gameResume = new Options();
        gameResume.init();
    }


}