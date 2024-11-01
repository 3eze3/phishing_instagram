const slides = document.querySelectorAll(".smartphone__image")
let slideIndex = 0
export function fadeout() {
	slides[slideIndex]?.classList.toggle("smartphone__image--active")
	slideIndex++
	if (slideIndex >= slides.length) {
		slideIndex = 0
	}
	slides[slideIndex]?.classList.toggle("smartphone__image--active")

	setTimeout(fadeout, 4300)
}
