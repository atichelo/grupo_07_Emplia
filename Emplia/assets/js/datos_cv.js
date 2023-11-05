var experienciaContainer;
var educacionContainer;
function guardarDatos(event) {
  experienciaContainer = document.getElementById("experiencia-container");
  educacionContainer = document.getElementById("educacion-container");
  event.preventDefault();
  var datos = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    correo: document.getElementById("correo").value,
    telefono: document.getElementById("telefono").value,
    direccion: document.getElementById("direccion").value,
    resumen: document.getElementById("resumen").value,
    habilidades: document.getElementById("habilidades").value,
    idiomas: document.getElementById("idiomas").value,
    logros: document.getElementById("logros").value,
    referencias: document.getElementById("referencias").value,
  };
  var experienciaCount = experienciaContainer.childElementCount;
  for (var i = 0; i < experienciaCount; i++) {
    datos["empresa1" + (i + 1)] = document.getElementById("empresa1" + (i + 1)).value;
    datos["puesto" + (i + 1)] = document.getElementById("puesto" + (i + 1)).value;
    datos["fecha_inicio" + (i + 1)] = document.getElementById("fecha_inicio" + (i + 1)).value;
    datos["fecha_fin" + (i + 1)] = document.getElementById("fecha_fin" + (i + 1)).value;
    datos["descripcion" + (i + 1)] = document.getElementById("descripcion" + (i + 1)).value;
  }
  var educacionCount = educacionContainer.childElementCount;
  for (var j = 0; j < educacionCount; j++) {
    datos["titulo" + (j + 1)] = document.getElementById("titulo" + (j + 1)).value;
    datos["institucion" + (j + 1)] = document.getElementById("institucion" + (j + 1)).value;
    datos["inicio" + (j + 1)] = document.getElementById("inicio" + (j + 1)).value;
    datos["fin" + (j + 1)] = document.getElementById("fin" + (j + 1)).value;
  }
  // Muestra el objeto datos en la consola (opcional)
  console.log(datos);
}

function addExperience() {
  var experienciaContainer = document.getElementById("experiencia-container");
  var experienciaCount = experienciaContainer.childElementCount + 1;
  var nuevaExperiencia = document.createElement("div");
  nuevaExperiencia.className = "mb-3 grid-container";
  nuevaExperiencia.innerHTML = `
    <div class="empuesto">
      <label for="empresa1${experienciaCount}" class="form-label">Nombre de la empresa:</label>
      <input type="text" id="empresa1${experienciaCount}" name="empresa1${experienciaCount}" class="form-control" placeholder="Ingrese el nombre de la empresa">
      <label for="puesto${experienciaCount}" class="form-label">Puesto:</label>
      <input type="text" id="puesto${experienciaCount}" name="puesto${experienciaCount}" class="form-control" placeholder="Ingrese su puesto en la empresa">
    </div>
    <div class="fechas-container">
      <label for="fecha_inicio${experienciaCount}" class="form-label">Fecha de inicio:</label>
      <input type="date" id="fecha_inicio${experienciaCount}" name="fecha_inicio${experienciaCount}" class="form-control">
      <label for="fecha_fin${experienciaCount}" class="form-label">Fecha de fin:</label>
      <input type="date" id="fecha_fin${experienciaCount}" name="fecha_fin${experienciaCount}" class="form-control">
    </div>
    <label class="form-label">Descripción del trabajo:</label>
    <textarea name="responsabilidades${experienciaCount}" rows="4" class="form-control" placeholder="Describa sus responsabilidades y logros"></textarea>
  `;
  experienciaContainer.appendChild(nuevaExperiencia);
}

function addEducation() {
  var educacionContainer = document.getElementById("educacion-container");
  var educacionCount = educacionContainer.childElementCount + 1;
  var nuevaEducacion = document.createElement("div");
  nuevaEducacion.className = "mb-3 grid-container";
  nuevaEducacion.innerHTML = `
    <label for="titulo${educacionCount}" class="form-label">Título obtenido:</label>
    <input type="text" id="titulo${educacionCount}" name="titulo${educacionCount}" class="form-control" placeholder="Ej. Diploma de Educación">
    <label for="institucion${educacionCount}" class="form-label">Institución:</label>
    <input type="text" id="institucion${educacionCount}" name="institucion${educacionCount}" class="form-control">
    <label for="inicio${educacionCount}" class="form-label">Fecha de inicio:</label>
    <input type="date" id="inicio${educacionCount}" name="inicio${educacionCount}" class="form-control">
    <label for="fin${educacionCount}" class="form-label">Fecha de finalización (si corresponde):</label>
    <input type="date" id="fin${educacionCount}" name="fin${educacionCount}" class="form-control">
  `;
  educacionContainer.appendChild(nuevaEducacion);
}