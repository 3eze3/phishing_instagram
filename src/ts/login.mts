export function login() {
	const btn = document.querySelector(".form__btn") as HTMLButtonElement
	btn.addEventListener("click", (e) => {
		e.preventDefault()
		window.location.replace("https://www.instagram.com")
	})
}
