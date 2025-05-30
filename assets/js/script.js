const API_BASE = "https://dragonball-api.com/api/characters?limit=57";
const btnBuscar = document.getElementById("btnBuscar");
const contenedorPadre = document.getElementById("contenedordata");
const campoEntrada = document.getElementById("campoentrada");

const cargarDatos = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error en la API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const verDetalles = async (id) => {
  try {
    const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
    if(!response.ok) {
      throw new Error("Error en la API");
    }
    const data = await response.json();
    alert(data.description || "Sin descripción");
  } catch (error) {
    console.log(error);
  }
};

btnBuscar.addEventListener("click", async () => {
  contenedorPadre.innerHTML = ""; // Limpia el contenedor
  const data = await cargarDatos(API_BASE);

  // Verifica si la propiedad correcta es "items"
  const personajes = data.items || data || []; 

  console.log(personajes);

  personajes.forEach((personaje) => {
    contenedorPadre.innerHTML += `
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 pb-3 d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${personaje.image}" alt="${personaje.name}" />
          <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
            <p class="card-text">
              <strong>Raza:</strong> ${personaje.race}<br>
              <strong>Género:</strong> ${personaje.gender}<br> 
              <strong>Ki:</strong> ${personaje.ki}
            </p>
          </div>
        </div>
      </div>
    `;
  });
});


