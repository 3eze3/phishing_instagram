export function login() {
    const btn = document.querySelector(".form__btn");
    const user = document.getElementById("username");
    const password = document.getElementById("password");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (user.value && password.value && password.value.length > 6)
            window.location.replace("https://www.instagram.com");
    });
}
