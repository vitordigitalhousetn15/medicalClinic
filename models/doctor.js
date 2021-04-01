const Sequelize = require("sequelize");
const config = require("../config/database");

let doctors = [
  {
    id: "1",
    name: "Vitor José",
    crm: "SP-3030",
    document: "456.038.444.8",
  },
  {
    id: "2",
    name: "Carlos Sanchez Costa",
    crm: "SP-3031",
    document: "456.038.456.9",
  },
  {
    id: "3",
    name: "Marcela Costa",
    crm: "SP-3032",
    document: "456.038.202.5",
  },
];

async function getDoctors() {
  const db = new Sequelize(config);

  const result = await db.query("select * from doctor;", {
    type: Sequelize.QueryTypes.SELECT,
  });

  console.log("result ", result);

  return result;
}

function getDoctorById(doctorId) {
  const index = doctors.findIndex((obj) => {
    return parseInt(obj.id) === parseInt(doctorId);
  });

  return doctors[index];
}

function insertDoctor(doctor) {
  doctors.push(doctor);
  return doctors;
}

function updateDoctor(doctor) {
  const index = doctors.findIndex((obj) => {
    return parseInt(obj.id) === parseInt(doctor.id);
  });

  doctors[index] = doctor;

  return doctors[index];
}

function removeDoctor(doctorId) {
  doctors = doctors.filter(
    (doctor) => parseInt(doctor.id) !== parseInt(doctorId)
  );
}

module.exports = {
  getDoctors: getDoctors,
  insertDoctor: insertDoctor,
  updateDoctor: updateDoctor,
  removeDoctor: removeDoctor,
  getDoctorById: getDoctorById,
};
