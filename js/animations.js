export const animationClasses = {
    scale: "scale",
    scaleIn: "scale_in",
    shake: "shake"
};

export const DOMelements = {
    winScore: document.querySelector(".wins"),
    drawScore: document.querySelector(".draws"),
    failScore: document.querySelector(".fails"),
    gameBoard: document.querySelector(".gameBoard"),
    gameRound: document.querySelector(".game__round"),
    pawnPlaces: document.querySelectorAll(".gameBoard__item")
};

export const scoreAnimation = (element) => {

    element.classList.add(`${animationClasses.scale}`);

    setTimeout(() => {
        element.classList.remove(`${animationClasses.scale}`);
    }, 500);

}

export const continueMatchAnimation = () => {

    DOMelements.pawnPlaces.forEach(element => {
        element.classList.add(`${animationClasses.scaleIn}`);

        setTimeout(() => {
            element.classList.remove(`${animationClasses.scaleIn}`);
        }, 500);
    });
}

export const matchResultAnimation = () => {
    DOMelements.pawnPlaces.forEach(element => {
        element.classList.add(`${animationClasses.shake}`);

        setTimeout(() => {
            element.classList.remove(`${animationClasses.shake}`);
        }, 500);
    });
}