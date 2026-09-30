import emailjs from "@emailjs/browser";


// =====================================================
// CONFIGURACIÓN
// =====================================================

const SERVICE_ID = "service_jxtmomm";
const TEMPLATE_ID = "template_ejs-test-mail-service";
const PUBLIC_KEY = "5MxkUFuZhHRzzX6EG";


// =====================================================
// FORMULARIO
// =====================================================

const formulario = document.querySelector("#contacto form");

if (!formulario) {

    console.error(
        "No se encontró el formulario de contacto."
    );

} else {

    formulario.addEventListener(
        "submit",
        async (evento) => {

            evento.preventDefault();

            const nombre = formulario
                .querySelector("#nombre")
                ?.value
                .trim();

            const email = formulario
                .querySelector("#email")
                ?.value
                .trim();

            const mensaje = formulario
                .querySelector("#mensaje")
                ?.value
                .trim();


            // ==========================================
            // VALIDACIÓN
            // ==========================================

            if (!nombre || !email || !mensaje) {

                alert(
                    "Por favor, completa todos los campos."
                );

                return;
            }


            const formatoEmail =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!formatoEmail.test(email)) {

                alert(
                    "Introduce un correo electrónico válido."
                );

                return;
            }


            // ==========================================
            // BOTÓN
            // ==========================================

            const boton =
                formulario.querySelector(
                    'button[type="submit"]'
                );

            if (boton) {

                boton.disabled = true;

                boton.textContent = "Enviando...";
            }


            try {

                const respuesta =
                    await emailjs.sendForm(
                        SERVICE_ID,
                        TEMPLATE_ID,
                        formulario,
                        {
                            publicKey: PUBLIC_KEY
                        }
                    );


                console.log(
                    "EmailJS:",
                    respuesta.status,
                    respuesta.text
                );


                alert(
                    `Gracias, ${nombre}. Tu mensaje fue enviado correctamente.`
                );


                formulario.reset();


            } catch (error) {

                console.error(
                    "Error de EmailJS:",
                    error
                );


                alert(
                    "No se pudo enviar el mensaje. Revisa la configuración de EmailJS."
                );


            } finally {

                if (boton) {

                    boton.disabled = false;

                    boton.textContent = "Enviar mensaje";
                }
            }

        }
    );
}