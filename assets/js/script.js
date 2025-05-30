const API_BASE = "https://dragonball-api.com/api/characters?limit=100";
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
