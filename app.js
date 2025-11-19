// Inicializa EmailJS con tu API Key pública
emailjs.init("Mij2hxi74IOrpJ8KQ");

// ----------------------
// Formulario Datos Personales
// ----------------------
const datosForm = document.getElementById('datosForm');
if (datosForm) {
  datosForm.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.send("service_a3697qc", "template_z6xjm5i", {
      ci: document.getElementById('ci').value,
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      address: document.getElementById('address').value,
      sex: document.getElementById('sex').value,
      city: document.getElementById('city').value,
      phone: document.getElementById('phone').value,
      birthDate: document.getElementById('birthDate').value,
      email: document.getElementById('email').value
    })
    .then(() => {
      document.getElementById('status-message').innerText = "¡Datos enviados con éxito!";
      e.target.reset();
    })
    .catch(err => {
      console.error("Error EmailJS (Datos):", err);
      document.getElementById('status-message').innerText = "Error al enviar los datos";
    });
  });
}

// ----------------------
// Formulario Encuesta
// ----------------------
const encuestaForm = document.getElementById('encuestaForm');
if (encuestaForm) {
  encuestaForm.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.send("service_a3697qc","template_q33r6qn",{
      music: document.getElementById('music').value,
      sports: document.getElementById('sports').value,
      studies: document.getElementById('studies').value,
      work: document.getElementById('work').value,
      others: document.getElementById('others').value,
      userEmail: document.getElementById('email').value // solo para mostrar en el correo
    })
    .then(() => {
      document.getElementById('status-message-encuesta').innerText = "¡Encuesta enviada con éxito!";
      e.target.reset();
    })
    .catch(err => {
      console.error("Error EmailJS (Encuesta):", err);
      document.getElementById('status-message-encuesta').innerText = "Error al enviar la encuesta";
    });
  });
}
