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

function getPatient() {
  return patients;
}

function getPatientById(patientId) {
  const index = patients.findIndex((obj) => {
    return parseInt(obj.id) === parseInt(patientId);
  });

  return patients[index];
}

function insertPatient(patient) {
  patients.push(patient);
  return patients;
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
