const express = require("express");
const router = express.Router();
const doctorModel = require("../models/doctor");
const patientModel = require("../models/patient");

router.get("/", async function (req, res, next) {
  const doctors = await doctorModel.getDoctors();
  const patients = await patientModel.getPatient();

  res.render("attendance", { doctors: doctors, patients: patients });
});

router.post("/", async function(req, res) {
  // cadastrar no banco de dados
  res.redirect("/attendance");
})

module.exports = router;
