/* =========================
   ASISTENTE
========================= */

const assistant =
    document.getElementById("assistant");

const chat =
    document.getElementById("chat");


function openAssistant() {

    assistant.classList.add("active");

}


function closeAssistant() {

    assistant.classList.remove("active");

}


/* =========================
   INICIAR AFILIACIÓN
========================= */

function startAffiliation() {

    openAssistant();

    setTimeout(() => {

        addBotMessage(
            "Excelente. Te ayudaré a iniciar tu proceso de afiliación. Primero necesito algunos datos básicos."
        );

        setTimeout(() => {

            window.location.href =
                "#afiliacion";

        }, 800);

    }, 300);

}


/* =========================
   OPCIONES
========================= */

function assistantChoice(choice) {


    if (choice === "afiliarme") {

        addUserMessage(
            "Quiero afiliarme"
        );

        setTimeout(() => {

            addBotMessage(
                "Perfecto. Te voy a orientar paso a paso para iniciar tu proceso de afiliación."
            );

        }, 500);

        setTimeout(() => {

            addBotMessage(
                "En la siguiente etapa podremos registrar tus datos y calcular automáticamente tu aportación de acuerdo con la frecuencia que elijas."
            );

        }, 1100);

        return;

    }



    if (choice === "informacion") {

        addUserMessage(
            "Quiero conocer PABS"
        );

        setTimeout(() => {

            addBotMessage(
                "PABS es un programa de apoyo de beneficio social enfocado en previsión y protección familiar."
            );

        }, 500);

        return;

    }



    if (choice === "aportaciones") {

        addUserMessage(
            "Quiero saber las aportaciones"
        );

        setTimeout(() => {

            addBotMessage(
                "Puedes seleccionar una frecuencia de aportación. El sistema mostrará automáticamente la cantidad correspondiente."
            );

        }, 500);

        setTimeout(() => {

            addBotMessage(
                "Semanal: $150 MXN<br>Quincenal: $300 MXN<br>Mensual: $600 MXN"
            );

        }, 1200);

        return;

    }



    if (choice === "asesor") {

        addUserMessage(
            "Quiero hablar con un asesor"
        );

        setTimeout(() => {

            addBotMessage(
                "Claro. Puedes contactar directamente al Asesor Ejecutivo Comercial Sergio Estrada por WhatsApp."
            );

        }, 500);

        setTimeout(() => {

            addBotMessage(
                '<a href="https://wa.me/526641601608" target="_blank">👉 CONTACTAR POR WHATSAPP</a>'
            );

        }, 1000);

    }

}


/* =========================
   MENSAJES
========================= */

function addBotMessage(message) {

    const div =
        document.createElement("div");

    div.className =
        "bot-message";

    div.style.marginTop =
        "12px";

    div.innerHTML =
        message;

    chat.appendChild(div);

    chat.scrollTop =
        chat.scrollHeight;

}


function addUserMessage(message) {

    const div =
        document.createElement("div");

    div.style.background =
        "#111";

    div.style.color =
        "#fff";

    div.style.padding =
        "12px 15px";

    div.style.borderRadius =
        "12px 12px 2px 12px";

    div.style.marginTop =
        "12px";

    div.style.marginLeft =
        "auto";

    div.style.maxWidth =
        "85%";

    div.innerHTML =
        message;

    chat.appendChild(div);

    chat.scrollTop =
        chat.scrollHeight;

}


/* =========================
   MENSAJE LIBRE
========================= */

function sendMessage() {

    const input =
        document.getElementById(
            "userMessage"
        );

    const message =
        input.value.trim();


    if (!message) {

        return;

    }


    addUserMessage(message);

    input.value = "";


    setTimeout(() => {

        addBotMessage(
            "Gracias por tu pregunta. En la siguiente etapa conectaremos este asistente con una base de conocimiento para poder ofrecerte respuestas más completas sobre PABS, afiliación, beneficios, aportaciones y trámites."
        );

    }, 700);

}
