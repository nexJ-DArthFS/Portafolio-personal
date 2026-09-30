import { DialogueBrain } from "../DialogueBrain/src/DialogueBrain.js";

// =====================================================
// ELEMENTOS
// =====================================================

const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotWindow = document.getElementById("chatbot-window");
const chatbotClose = document.getElementById("chatbot-close");

const chatbotForm = document.getElementById("chatbot-form");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotMessages = document.getElementById("chatbot-messages");

// =====================================================
// VERIFICACIÓN
// =====================================================

if (
    !chatbotToggle ||
    !chatbotWindow ||
    !chatbotClose ||
    !chatbotForm ||
    !chatbotInput ||
    !chatbotMessages
) {
    throw new Error(
        "No se encontraron los elementos necesarios del chatbot."
    );
}


// =====================================================
// DIALOGUE BRAIN
// =====================================================

const brain = new DialogueBrain({

    name: "PortfolioBrain",

    intents: [

        {
            name: "greeting",

            keywords: [
                "hola",
                "buenas",
                "hey",
                "saludos"
            ],

            responses: [
                "Hola. Soy el asistente de este portafolio. ¿En qué puedo ayudarte?",
                "¡Hola! ¿Qué quieres conocer sobre el portafolio?"
            ]
        },

        {
            name: "presentation",

            keywords: [
                "quien eres",
                "presentate",
                "hablame de ti",
                "sobre ti"
            ],

            responses: [
                "Soy el asistente virtual del portafolio de Juan Daniel Falcones."
            ]
        },

        {
            name: "studies",

            keywords: [
                "que estudias",
                "estudias",
                "carrera",
                "universidad",
                "matematica",
                "matematicas"
            ],

            responses: [
                "Juan Daniel estudia Matemáticas y también desarrolla conocimientos en programación, inteligencia artificial y tecnología."
            ]
        },

        {
            name: "skills",

            keywords: [
                "habilidades",
                "conocimientos",
                "programacion",
                "javascript",
                "html",
                "css"
            ],

            responses: [
                "Sus principales áreas incluyen matemática, programación, JavaScript, HTML, CSS, desarrollo web e inteligencia artificial."
            ]
        },

        {
            name: "projects",

            keywords: [
                "proyectos",
                "proyecto",
                "que has creado",
                "trabajos"
            ],

            responses: [
                "Puedes consultar los proyectos disponibles en la sección de proyectos del portafolio."
            ]
        },

        {
            name: "experience",

            keywords: [
                "experiencia",
                "experiencia laboral",
                "has trabajado",
                "trabajado antes"
            ],

            responses: [
                "La experiencia está orientada principalmente al desarrollo de proyectos propios, investigación y aprendizaje técnico."
            ]
        },

        {
            name: "contact",

            keywords: [
                "contacto",
                "contactar",
                "correo",
                "email"
            ],

            responses: [
                "Puedes encontrar la información de contacto en la sección Contacto del portafolio."
            ]
        },

        {
            name: "thanks",

            keywords: [
                "gracias",
                "muchas gracias"
            ],

            responses: [
                "Gracias por visitar mi portafolio."
            ]
        },

        {
            name: "goodbye",

            keywords: [
                "adios",
                "chao",
                "hasta luego",
                "nos vemos"
            ],

            responses: [
                "Hasta luego. Gracias por visitar mi portafolio."
            ]
        }

    ]
});


// =====================================================
// FUNCIONES
// =====================================================

function openChat() {

    chatbotWindow.classList.add("active");

    chatbotWindow.setAttribute(
        "aria-hidden",
        "false"
    );

    chatbotToggle.setAttribute(
        "aria-expanded",
        "true"
    );

    chatbotInput.focus();
}


function closeChat() {

    chatbotWindow.classList.remove("active");

    chatbotWindow.setAttribute(
        "aria-hidden",
        "true"
    );

    chatbotToggle.setAttribute(
        "aria-expanded",
        "false"
    );
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


// =====================================================
// ABRIR / CERRAR
// =====================================================

chatbotToggle.addEventListener(
    "click",
    () => {

        const abierto =
            chatbotWindow.classList.contains("active");

        if (abierto) {
            closeChat();
        } else {
            openChat();
        }

    }
);


chatbotClose.addEventListener(
    "click",
    closeChat
);


// =====================================================
// ENVIAR MENSAJE
// =====================================================

chatbotForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        const texto =
            chatbotInput.value.trim();

        if (!texto) {
            return;
        }

        // Mensaje del usuario
        addMessage(
            texto,
            "user"
        );

        // DialogueBrain procesa el mensaje
        const resultado =
            brain.process(texto);

        // Mostrar respuesta
        addMessage(
            resultado.response,
            "bot"
        );

        // Debug
        console.log("Usuario:", texto);
        console.log("Intent:", resultado.intent);

        // Limpiar
        chatbotInput.value = "";
        chatbotInput.focus();
    }
);

console.log("DialogueBrain conectado correctamente.");