//-----------------------------------------------

//Inicio 

console.log("Inicio");
const form = document.querySelector("form");
const dineroInput = document.getElementById("dinero");
const porcentajeInput = document.getElementById("porcentaje");
const aniosInput = document.getElementById("anios");
const list = document.querySelector("ul");
form.addEventListener("submit", runEvent);

function runEvent(e) { 

  e.preventDefault();
  console.log("Submit");

  let tempDinero = parseFloat(dineroInput.value);
  console.log(tempDinero);
  let tempPorcentaje = parseFloat(porcentajeInput.value/100/12);
  console.log(tempPorcentaje);
  let tempAnios = parseFloat(aniosInput.value*12);
  console.log(tempAnios);

  let tempMensual = (tempDinero*tempPorcentaje*Math.pow(1+tempPorcentaje,tempAnios))/((Math.pow(1+tempPorcentaje,tempAnios)-1));
  let tempTotal = tempMensual*tempAnios;
  let tempInter = tempTotal-tempDinero;

  console.log(tempMensual);
  console.log(tempTotal);
  console.log(tempInter);

  newTask = document.createElement("li");
  newTask.setAttribute("class", "collection-item");
  newTask.innerHTML = `
  <li>Monthly Payment  $ ${tempMensual.toFixed(2)}</li>
  <li>Total Payment  $ ${tempTotal.toFixed(2)}</li>
  Interest $ ${tempInter.toFixed(2)}
  `;
  list.appendChild(newTask);
}

