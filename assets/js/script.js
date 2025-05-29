const API_BASE = "https://dragonball-api.com/api/characters";
const btnBuscar = document.getElementById("btn-buscar");
const contenedorPadre = document.getElementById("contenedor-data");
const campoEntrada = document.getElementById("campo-entrada") 
const cargarDatos = async (API_BASE) => {
  try {
    const response = await fetch(API_BASE);

    if (!response.ok) {
      throw new error("Error en la API");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
