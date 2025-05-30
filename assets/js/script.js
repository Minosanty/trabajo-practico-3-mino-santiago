const API_BASE = "https://dragonball-api.com/api/characters?limit=57";
const API_Busqueda = "https://dragonball-api.com/api/characters?name=";
const btnmostrar = document.getElementById("btnmostrar");
const contenedorPadre = document.getElementById("contenedordata");
const campoEntrada = document.getElementById("campoentrada");
const verMas = document.getElementById("verMas");

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

    alert(data.description);
  } catch (error) {
    console.log(error);
  }
};

btnmostrar.addEventListener("click", async () => {
  contenedorPadre.innerHTML = ""; // Limpia el contenedor
  const data = await cargarDatos(API_BASE);

  // Verifica si la propiedad correcta es "items"
  const personajes = data.items || data || []; 

  console.log(personajes);


  personajes.forEach((personaje) => {
    contenedorPadre.innerHTML += `
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 pb-3 d-flex justify-content-center" data-id="${personaje.id}">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${personaje.image}" alt="${personaje.name}" />
          <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
            <p class="card-text">
              <strong>Raza:</strong> ${personaje.race}<br>
              <strong>Género:</strong> ${personaje.gender}<br> 
            
              <div class="center" role="search">
                        <center> <button class="btn btn-primary btn-ver-detalles"> ver mas </button> </center>
            </div>
            
            </p>
          </div>
        </div>
      </div>
    `;
  });
});

// Botón buscar
btnBuscar.addEventListener("click", async (e) => {
  e.preventDefault();
  contenedorPadre.innerHTML = "";


  const terminoBusqueda = campoEntrada.value.trim().toLowerCase();
  const personajes = await cargarDatos(API_Busqueda + terminoBusqueda);
console.log(personajes)


  if (personajes.length === 0) {
    contenedorPadre.innerHTML = `<p class="text-center text-danger">No se encontraron personajes.</p>`;
    return;
  }
personajes.forEach((personaje) => {
    contenedorPadre.innerHTML += `
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 pb-3 d-flex justify-content-center" data-id="${personaje.id}">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${personaje.image}" alt="${personaje.name}" />
          <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
            <p class="card-text">
              <strong>Raza:</strong> ${personaje.race}<br>
              <strong>Género:</strong> ${personaje.gender}<br> 
            
            </p>
          </div>
        </div>
      </div>
    `;
  });

 });

contenedorPadre.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-ver-detalles")) {
    const card = e.target.closest(".col-12");
    const id = card.getAttribute("data-id");
    console.log(id)
    verDetalles(id);
  }
});