import { API_BASE_URL } from "./config.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const dni = form.dni.value.trim();
    const edad = parseInt(form.edad.value);
    const peso = parseFloat(form.peso.value);

    // Validación de DNI
    if (!/^\d{7,9}$/.test(dni)) {
      alert("DNI inválido. Debe contener solo números y tener entre 7 y 9 dígitos.");
      return;
    }

    // Validación de edad
    if (isNaN(edad) || edad < 18 || edad > 65) {
      alert("La edad debe ser un número entre 18 y 65 años.");
      return;
    }

    // Validación de peso
    if (isNaN(peso) || peso < 45) {
      alert("El peso debe ser un número mayor a 45 kg.");
      return;
    }

    const datos = {
      nombre: form.nombre.value.trim(),
      apellido: form.apellido.value.trim(),
      dni,
      edad,
      peso,
      grupoSanguineo: form.grupo.value,
      enfermedades: form.enfermedades.value.trim()
    };

    try {
      const respuesta = await fetch(`${API_BASE_URL}/donantes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
      });

      if (respuesta.ok) {
        alert("Donante registrado correctamente");
        form.reset();
      } else {
        const error = await respuesta.json();
        alert(error.error || "Error al registrar donante");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al conectar con el servidor");
    }
  });
});
