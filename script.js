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
