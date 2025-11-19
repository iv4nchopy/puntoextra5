// Inicializa EmailJS
emailjs.init("Mij2hxi74IOrpJ8KQ"); // Tu Public Key

// Formulario de Datos Personales
const datosForm = document.getElementById('datosForm');
if(datosForm){
  datosForm.addEventListener('submit', function(event){
    event.preventDefault();

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
      datosForm.reset();
    })
    .catch((error) => {
      console.error(error);
      document.getElementById('status-message').innerText = "Error al enviar los datos.";
    });
  });
}

// Formulario de Encuesta
const encuestaForm = document.getElementById('encuestaForm');
if(encuestaForm){
  encuestaForm.addEventListener('submit', function(event){
    event.preventDefault();

    emailjs.send("service_a3697qc", "template_z6xjm5i", {
      music: document.getElementById('music').value,
      sports: document.getElementById('sports').value,
      studies: document.getElementById('studies').value,
      work: document.getElementById('work').value,
      others: document.getElementById('others').value
    })
    .then(() => {
      document.getElementById('status-message-encuesta').innerText = "¡Encuesta enviada con éxito!";
      encuestaForm.reset();
    })
    .catch((error) => {
      console.error(error);
      document.getElementById('status-message-encuesta').innerText = "Error al enviar la encuesta.";
    });
  });
}
