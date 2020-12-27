const winScore = 0;
const drawScore = 0;
const failScore = 0;

export class UpdateHtml {
    updateScoreTable(result) {
        const wins = document.querySelector(".wins");
        const draws = document.querySelector(".draws");
        const fails = document.querySelector(".fails");
        //SWITCH DO POPRAWY
        switch (result) {
            case 0:
                fails.innerHTML = failScore++;
                break;
            case 1:
                wins.innerHTML = winScore++;
                break;
            case 2:
                draws.innerHTML = drawScore++;
                break;
        }
    }
}