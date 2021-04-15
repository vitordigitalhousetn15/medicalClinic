console.log("aula javascript no navegador");

/*
const buttons = document.querySelectorAll('.btn.btn-warning');
console.log(buttons)
*/

const totalPatients = document.querySelector("#total-patients");
console.log(totalPatients);

const totalTableItems = document.querySelectorAll("table tbody tr").length;
totalPatients.innerHTML = totalPatients.innerHTML + " " + totalTableItems;
