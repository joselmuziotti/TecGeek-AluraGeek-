import { conexionAPI } from "./conexionAPI.js";

function borrarCard(e) {
    const btnBorrar = document.querySelector("[data-borrar]")
  
    btnBorrar.addEventListener("click", async (e) => {
      await conexionAPI.borrarCard(e)
    })
  }

borrarCard()

