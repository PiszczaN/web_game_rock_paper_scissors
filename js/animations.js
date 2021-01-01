export class Animations {
    static addAnimation(element, animation) {
        element.classList.add("fade_in", "fade_out");
    }

    static executeAnimation(element, animation) {

        element.classList.remove("fade_out");


    }
}