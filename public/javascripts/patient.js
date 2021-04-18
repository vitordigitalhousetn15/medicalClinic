console.log("aula javascript no navegador");

/*
const buttons = document.querySelectorAll('.btn.btn-warning');
console.log(buttons)
*/

const totalPatients = document.querySelector("#total-patients");
console.log(totalPatients);

const totalTableItems = document.querySelectorAll("table tbody tr").length;
totalPatients.innerHTML = totalPatients.innerHTML + " " + totalTableItems;

const genders = document.querySelectorAll('table tbody tr td.gender');

let countM = 0;
let countF = 0;

genders.forEach(function(item) {
  if (item.innerHTML === 'F') {
    countF = countF + 1;
  }

  if (item.innerHTML === 'M') {
    countM = countM + 1;
  }
})

// outra opção document.querySelector('#man-count')
document.getElementById('man-count').innerHTML =
  document.getElementById('man-count').innerHTML + countM;

// outra opção document.querySelector('#woman-count')
document.getElementById('woman-count').innerHTML =
  document.getElementById('woman-count').innerHTML + countF;

console.log('Masculino', countM);
console.log('Feminino', countF);