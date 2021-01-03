export const animationClasses = {
    scale: "scale",
    scaleIn: "scale_in",
    shake: "shake"
};

export const DOMelements = {
    winScore: document.querySelector(".wins"),
    drawScore: document.querySelector(".draws"),
    failScore: document.querySelector(".fails"),
    gameBoard: document.querySelector(".gameBoard")

};

export const scoreAnimation = (element) => {

    element.classList.add(`${animationClasses.scale}`);

    setTimeout(() => {
        element.classList.remove(`${animationClasses.scale}`);
    }, 500);

}

export const continueMatchAnimation = () => {

    DOMelements.gameBoard.classList.add(`${animationClasses.scaleIn}`);

    setTimeout(() => {
        DOMelements.gameBoard.classList.remove(`${animationClasses.scaleIn}`);
    }, 500);
}

export const matchResultAnimation = () => {
    DOMelements.gameBoard.classList.add(`${animationClasses.shake}`);

    setTimeout(() => {
        DOMelements.gameBoard.classList.remove(`${animationClasses.shake}`);
    }, 500);
}