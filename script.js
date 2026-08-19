const formData = {
  nombre: document.getElementById('nombre').value,
  telefono: document.getElementById('telefono').value,
  correo: document.getElementById('correo').value
};

fetch('https://script.google.com/macros/s/AKfycbzVrtnsyZ0uP3jRqQjS7fDOZ1g5aaYC9V5aESV9QnvRoX3vahoWrbyNZqAHRtADqfQQCw/exec', {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: URLSerchParams(no-cors)
})
.then(response => alert('Registro completado con éxito'))
.catch(error => console.error('Error:', error));
function e.parameter {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // 1. Guardar los datos en el Mini CRM (Google Sheets)
    sheet.appendRow([
      new Date(),
      data.nombre,
      data.telefono,
      data.correo,
      "Nuevo Registro"
    ]);
    
    // 2. Enviar la notificación a WhatsApp
    enviarNotificacionWhatsApp(data.nombre, data.telefono, data.correo);
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}

function enviarNotificacionWhatsApp(nombre, telefono, correo) {
  // ⚙️ CONFIGURACIÓN DE CALLMEBOT
  var miTelefono = "+526641601608";
  var apiKey = "3889415";    

  var textoMensaje = "🚨 *¡Nueva Afiliación Registrada!*\n\n" +
                     "👤 *Nombre:* " + nombre + "\n" +
                     "📞 *Teléfono:* " + telefono + "\n" +
                     "✉️ *Correo:* " + correo + "\n\n" +
                     "📊 *CRM:* Guardado en Google Sheets";

  var url = "https://api.callmebot.com/whatsapp.php?phone=" + miTelefono + 
            "&text=" + encodeURIComponent(textoMensaje) + 
            "&apikey=" + apiKey;

  try {
    UrlFetchApp.fetch(url);
  } catch (err) {
    Logger.log("Error al enviar WhatsApp: " + err);
  }
}const URL_WEBHOOK = "https://script.google.com/macros/s/AKfycbzVrtnsyZ0uP3jRqQjS7fDOZ1g5aaYC9V5aESV9QnvRoX3vahoWrbyNZqAHRtADqfQQCw/exec";

function registrarAfiliacion(event) {
  event.preventDefault(); // Evita que la página se recargue

  const datosCliente = {
    nombre: document.getElementById('nombre').value,
    telefono: document.getElementById('telefono').value,
    correo: document.getElementById('correo').value
  };

  fetch(URL_WEBHOOK, {
    method: 'POST',
    mode: 'no-cors', // Evita bloqueos de origen cruzado (CORS)
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosCliente)
  })
  .then(() => {
    alert("¡Registro exitoso! En breve nos pondremos en contacto.");
    document.getElementById('miFormulario').reset();
  })
  .catch(error => {
    console.error("Error al registrar:", error);
    alert("Ocurrió un error al enviar el registro.");
  });
}
function doPost(e) {
  // 1. Abrimos el cuaderno
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // 2. Leemos la carta que llegó
  var nombre = e.parameter.nombre;
  var telefono = e.parameter.telefono;
  var correo = e.parameter.correo;
  var estado = "Nuevo Lead"; // Le ponemos una etiqueta automática
  
  // 3. Escribimos los datos en un renglón nuevo
  hoja.appendRow([new Date(), nombre, telefono, correo, estado]);
  
  // 4. Decimos "¡Listo, gracias!"
  return ContentService.createTextOutput("Registrado con éxito");
}
// Cuando llenen el formulario:
const datos = new URLSearchParams();
datos.append('nombre', document.getElementById('nombre').value);
datos.append('telefono', document.getElementById('telefono').value);
datos.append('correo', document.getElementById('correo').value);

// Enviamos el mensaje a la dirección del robot
fetch('AQUÍ_PEGA_TU_URL_DE_APPS_SCRIPT', {
  method: 'POST',
  mode: 'no-cors', // Para que el navegador no lo bloquee
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: datos
})
.then(() => {
  alert('¡Gracias por registrarte!');
})
.catch(error => console.error('Error:', error));
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Hoja 1");
    
    // Si los datos se envían como JSON
    var data = JSON.parse(e.postData.contents);
    
    // Si los datos se envían como URLSearchParams / FormData, usa: e.parameter.nombre
    var nombre = data.nombre || e.parameter.nombre || "";
    var telefono = data.telefono || e.parameter.telefono || "";
    var correo = data.correo || e.parameter.correo || "";
    var estado = data.estado || e.parameter.estado || "Pendiente";
    var fecha = new Date();

    sheet.appendRow([fecha, nombre, telefono, correo, estado]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
