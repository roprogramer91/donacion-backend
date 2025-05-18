import { API_BASE_URL } from "./config.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const datos = {
        nombre: form.nombre.value,
        apellido: form.apellido.value,
        dni: form.dni.value,
        edad: parseInt(form.edad.value),
        paciente: form.paciente.value,
        grupoSanguineo: form.grupo.value,
        hospital: form.hospital.value,
        direccion: form.direccion.value,
        nivelUrgencia: form.urgencia.value,
        motivo: form.motivo.value
      };
      
      try {
        const respuesta = await fetch(`${API_BASE_URL}/solicitudes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datos),
        });
  
        if (respuesta.ok) {
          alert("Solicitud registrada correctamente");
          form.reset();
        } else {
          alert("Error al registrar la solicitud");
        }
      } catch (error) {
        alert("Error al conectar con el servidor");
      }
    });
  });
  