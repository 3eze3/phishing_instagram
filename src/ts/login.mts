export function login() {
	const btn = document.querySelector(".form__btn") as HTMLButtonElement
	const user = document.getElementById("username") as HTMLInputElement
	const password = document.getElementById("password") as HTMLInputElement
	btn.addEventListener("click", (e) => {
		e.preventDefault()
		if (user.value && password.value && password.value.length > 6)
			window.location.replace("https://www.instagram.com")
	})
}
