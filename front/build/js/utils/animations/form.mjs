const pwdInput = document.getElementById("password");
export function animaitonLogin() {
    const $inputs = document.querySelectorAll(".form__input");
    const $labels = document.querySelectorAll(".form__label");
    const btnpwd = document.querySelector(".form__pwdShow");
    $inputs.forEach(($input, index) => {
        $input.addEventListener("input", () => {
            const texto = $input.value;
            $labels[index]?.classList.toggle("form__label--active", texto.trim() != "");
            if ($input.getAttribute("id") == "password" && texto != "") {
                btnpwd.classList.add("form__pwdShow--active");
                pwdInput?.setAttribute("type", "password");
            }
            else if ($input.getAttribute("id") == "password" &&
                texto.length == 0) {
                pwdInput?.setAttribute("type", "text");
                btnpwd.classList.remove("form__pwdShow--active");
                btnpwd.textContent = "Show";
            }
            $input?.classList.toggle("form__input--active", texto.trim() != "");
        });
    });
}
export function toggleBtn() {
    const btnpwd = document.querySelector(".form__pwdShow");
    btnpwd.addEventListener("click", (event) => {
        event.preventDefault();
        btnpwd.textContent = btnpwd.textContent == "Show" ? "Hide" : "Show";
        if (btnpwd.textContent == "Show") {
            pwdInput?.setAttribute("type", "password");
        }
        else {
            pwdInput?.setAttribute("type", "text");
        }
    });
}
