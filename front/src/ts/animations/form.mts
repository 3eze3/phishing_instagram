export function animaitonLogin(): void {
	const $inputs = document.querySelectorAll(
		".form__input"
	) as NodeListOf<HTMLInputElement>
	const $labels = document.querySelectorAll(
		".form__label"
	) as NodeListOf<HTMLLabelElement>
	const btnpwd = document.querySelector(".form__pwdShow") as HTMLButtonElement
	$inputs.forEach(($input, index) => {
		$input.addEventListener("input", () => {
			const texto = $input.value
			$labels[index]?.classList.toggle(
				"form__label--active",
				texto.trim() != ""
			)
			if ($input.getAttribute("id") == "password" && texto != "") {
				btnpwd.classList.add("form__pwdShow--active")
			} else if (
				$input.getAttribute("id") == "password" &&
				texto.length == 0
			) {
				btnpwd.classList.remove("form__pwdShow--active")
				btnpwd.textContent = "Show"
			}
			$input?.classList.toggle("form__input--active", texto.trim() != "")
		})
	})
}

export function toggleBtn() {
	const btnpwd = document.querySelector(".form__pwdShow") as HTMLButtonElement
	const pwdInput = document.getElementById("password")
	btnpwd.addEventListener("click", (event) => {
		event.preventDefault()
		btnpwd.textContent = btnpwd.textContent == "Show" ? "Hide" : "Show"
		if (btnpwd.textContent == "Show") {
			pwdInput?.setAttribute("type", "password")
		} else {
			pwdInput?.setAttribute("type", "text")
		}
	})
}
