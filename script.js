"use strict";

// Referencio elementos del DOM
const getEL = (id) => document.getElementById(id);
const input1 = getEL("input1");
const input2 = getEL("input2");
const input3 = getEL("input3");
const btnBorrar = getEL("btnBorrar");

// Borrado de inputs
const borrarInputs = () => {
  document.querySelectorAll("input").forEach((input) => (input.value = ""));
};

btnBorrar.addEventListener('click',()=>{
  borrarInputs()
})
