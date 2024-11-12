export function login() {
    const btn = document.querySelector(".form__btn");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.replace("https://www.instagram.com");
    });
}
