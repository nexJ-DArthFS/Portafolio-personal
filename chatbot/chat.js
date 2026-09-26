const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotWindow = document.getElementById("chatbot-window");
const chatbotClose = document.getElementById("chatbot-close");

const chatbotForm = document.getElementById("chatbot-form");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotMessages = document.getElementById("chatbot-messages");


function openChat() {
    chatbotWindow.classList.add("active");

    chatbotWindow.setAttribute("aria-hidden", "false");
    chatbotToggle.setAttribute("aria-expanded", "true");

    chatbotInput.focus();
}


function closeChat() {
    chatbotWindow.classList.remove("active");

    chatbotWindow.setAttribute("aria-hidden", "true");
    chatbotToggle.setAttribute("aria-expanded", "false");
}


function addMessage(text, sender) {

    const message = document.createElement("div");

    message.classList.add(
        "chat-message",
        sender
    );

    message.textContent = text;

    chatbotMessages.appendChild(message);

    chatbotMessages.scrollTop =
        chatbotMessages.scrollHeight;
}

const username = sessionStorage.getItem("portfolioUsername");

if (username) {
    addMessage(
        `Hola ${username}. ¿Qué quieres conocer sobre el portafolio?`,
        "bot"
    );
}

function generateTemporaryResponse(message) {

    const text = message.toLowerCase();

    if (text.includes("hola")) {
        return "Hola. ¿Qué quieres conocer sobre Juan?";
    }

    if (text.includes("proyecto")) {
        return "Puedes encontrar los proyectos en la sección correspondiente del portafolio.";
    }

    if (text.includes("habilidad")) {
        return "Puedes consultar las principales habilidades en la sección de habilidades.";
    }

    if (
        text.includes("contacto") ||
        text.includes("correo")
    ) {
        return "Puedes encontrar la información de contacto al final del portafolio.";
    }

    return "Todavía estoy aprendiendo. Prueba preguntándome por los proyectos, habilidades o contacto.";
}


chatbotToggle.addEventListener("click", () => {

    const isOpen =
        chatbotWindow.classList.contains("active");

    if (isOpen) {
        closeChat();
    } else {
        openChat();
    }

});


chatbotClose.addEventListener(
    "click",
    closeChat
);


chatbotForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        const message =
            chatbotInput.value.trim();

        if (!message) {
            return;
        }

        addMessage(message, "user");

        chatbotInput.value = "";

        setTimeout(() => {

            const response =
                generateTemporaryResponse(message);

            addMessage(response, "bot");

        }, 300);

    }
);