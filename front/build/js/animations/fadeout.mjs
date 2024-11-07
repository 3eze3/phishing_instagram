const slides = document.querySelectorAll(".smartphone__image");
let slideIndex = 0;
export function fadeout() {
    slides[slideIndex]?.classList.add("smartphone__image--show");
    slideIndex++;
    if (slideIndex >= slides.length) {
        setTimeout(() => {
            slides[slideIndex - 1]?.classList.remove("smartphone__image--show");
            slideIndex = 0;
        }, 3000);
    }
    setTimeout(() => {
        slides[slideIndex - 1]?.classList.remove("smartphone__image--show");
        slides[slideIndex]?.classList.add("smartphone__image--show");
    }, 3000);
    setTimeout(fadeout, 3000);
}
