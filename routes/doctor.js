const express = require("express");
const doctorModel = require("../models/doctor");

const router = express.Router();

router.get("/", async function (req, res) {
  const doctors = await doctorModel.getDoctors();
  res.render("doctor", { doctors: doctors });
});

router.get("/edit/:id", async function (req, res) {
  const doctorId = req.params.id;
  const doctor = await doctorModel.getDoctorById(doctorId);
  res.render("doctor/edit", { doctor: doctor });
});

router.post("/", async function (req, res) {
  const doctor = req.body;
  await doctorModel.insertDoctor(doctor);
  res.redirect("/doctor");
});

router.put("/", async function (req, res) {
  const doctor = req.body;
  await doctorModel.updateDoctor(doctor);
  res.redirect("/doctor");
});

router.delete("/:id", async function (req, res) {
  const doctorId = req.params.id;

  await doctorModel.removeDoctor(doctorId);
  
  if(req.query.json) {
    return res.sendStatus(200);
  }
  res.redirect("/doctor");
});

module.exports = router;
