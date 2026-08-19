const formData = {
  nombre: document.getElementById('nombre').value,
  telefono: document.getElementById('telefono').value,
  correo: document.getElementById('correo').value
};

fetch('https://script.google.com/macros/s/AKfycbwwavpbXN_B7WeL8sScINI9ctXYnYtrw8NsntDYDXhAEuTDb1QHmCjwb-dkywNsUn86Qg/exec', {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
})
.then(response => alert('Registro completado con éxito'))
.catch(error => console.error('Error:', error));
