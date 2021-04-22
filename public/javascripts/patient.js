console.log("aula javascript no navegador");

/*
const buttons = document.querySelectorAll('.btn.btn-warning');
console.log(buttons)
*/

const totalPatients = document.querySelector("#total-patients");
console.log(totalPatients);

const totalTableItems = document.querySelectorAll("table tbody tr").length;
totalPatients.innerHTML = totalPatients.innerHTML + " " + totalTableItems;

const genders = document.querySelectorAll("table tbody tr td.gender");

let countM = 0;
let countF = 0;

genders.forEach(function (item) {
  if (item.innerHTML === "F") {
    countF = countF + 1;
  }

  if (item.innerHTML === "M") {
    countM = countM + 1;
  }
});

// outra opção document.querySelector('#man-count')
document.getElementById("man-count").innerHTML =
  document.getElementById("man-count").innerHTML + countM;

// outra opção document.querySelector('#woman-count')
document.getElementById("woman-count").innerHTML =
  document.getElementById("woman-count").innerHTML + countF;

totalPatients.addEventListener("dblclick", function () {
  totalPatients.classList.add("text-danger");
});

totalPatients.addEventListener("mouseover", function () {
  totalPatients.classList.add("text-success");
});

totalPatients.addEventListener("mouseout", function () {
  totalPatients.classList.remove("text-success");
});

const inputFormName = document.querySelector("#register-patient #name");
const inputFormBirthDate = document.querySelector(
  "#register-patient #birth_date"
);
const inputFormDocument = document.querySelector("#register-patient #document");
const inputFormGender = document.querySelector("#register-patient #gender");
const alertDanger = document.querySelector(".alert-danger");

function onInvalid(inputForm, liId) {
  alertDanger.classList.remove("d-none");

  if (inputForm.value === "") {
    document.getElementById(liId).classList.remove("d-none");
  } else {
    document.getElementById(liId).classList.add("d-none");
  }
}

inputFormName.addEventListener("keyup", function () {
  document.getElementById("invalid-name").classList.add("d-none");
});

inputFormName.addEventListener("invalid", function () {
  onInvalid(inputFormName, "invalid-name");
});

inputFormGender.addEventListener("invalid", function () {
  onInvalid(inputFormGender, "invalid-gender");
});

inputFormBirthDate.addEventListener("invalid", function () {
  onInvalid(inputFormGender, "invalid-birth-date");
});

inputFormDocument.addEventListener("invalid", function () {
  onInvalid(inputFormGender, "invalid-document");
});
