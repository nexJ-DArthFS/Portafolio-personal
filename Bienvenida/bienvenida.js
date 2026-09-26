const form = document.getElementById("welcome-form");
const usernameInput = document.getElementById("username");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const username = usernameInput.value.trim();

    if (!username) {
        return;
    }

    sessionStorage.setItem(
        "portfolioUsername",
        username
    );

    window.location.href = "../portafolio.html";

});