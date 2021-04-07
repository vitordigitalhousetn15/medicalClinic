const express = require("express");
const patientModel = require("../models/patient");

const router = express.Router();

router.get("/", function (req, res) {
  const patients = patientModel.getPatient();
  res.render("patient", { patients: patients });
});

router.get("/edit/:id", function (req, res) {
  const patientId = req.params.id;
  const patient = patientModel.getPatientById(patientId);
  res.render("patient/edit", { patient: patient });
});

router.post("/", async function (req, res) {
  const patient = req.body;
  await patientModel.insertPatient(patient);
  res.redirect("/patient");
});

router.put("/", function (req, res) {
  const patient = req.body;

  patientModel.updatePatient(patient);
  res.redirect("/patient");
});

router.delete("/", function (req, res) {
  const patient = req.body;

  patientModel.removePatient(patient.id);
  res.redirect("/patient");
});

module.exports = router;
