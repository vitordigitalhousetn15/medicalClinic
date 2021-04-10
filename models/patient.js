const Sequelize = require("sequelize");
const config = require("../config/database");
const db = new Sequelize(config);

let patients = [
  {
    id: "1",
    name: "Paciente 01",
    document: "456.038.444.8",
    birth_date: "1995-12-10",
    gender: "F",
  },
  {
    id: "2",
    name: "Paciente 02",
    document: "456.038.456.9",
    birth_date: "1987-09-12",
    gender: "M",
  },
  {
    id: "3",
    name: "Paciente 03",
    document: "456.038.202.5",
    birth_date: "2002-02-18",
    gender: "F",
  },
];

async function getPatient(initialLetter) {
  let searchQuery = "select * from patient;";
  if(initialLetter !== undefined) {
    searchQuery = "select * from patient where LOWER(name) like :initialLetter";
  }

  const result = await db.query(searchQuery, {
    type: Sequelize.QueryTypes.SELECT,
    replacements: {
      initialLetter: initialLetter + '%'
    }
  });

  return result
}

function getPatientById(patientId) {
  const index = patients.findIndex((obj) => {
    return parseInt(obj.id) === parseInt(patientId);
  });

  return patients[index];
}

async function insertPatient(patient) {
  await db.query('insert into patient (name, document, birth_date, gender) values (:name, :document, :birth_date, :gender);', {
    replacements: {
      name: patient.name,
      document: patient.document,
      birth_date: patient.birth_date,
      gender: patient.gender
    }
  });
}

function updatePatient(patient) {
  const index = patients.findIndex((obj) => {
    return parseInt(obj.id) === parseInt(patient.id);
  });

  patients[index] = patient;

  return patients[index];
}

function removePatient(patientId) {
  patients = patients.filter(
    (patient) => parseInt(patient.id) !== parseInt(patientId)
  );
}

module.exports = {
  getPatient: getPatient,
  insertPatient: insertPatient,
  updatePatient: updatePatient,
  removePatient: removePatient,
  getPatientById: getPatientById,
};
