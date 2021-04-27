const deleteButtons = document.querySelectorAll('button[role="delete"]');

async function onDeleteClick(event) {
  const doctorId = event.target.dataset.doctorId;

  event.target.disabled = true;

  await fetch("/doctor/" + doctorId + "?json", { method: "DELETE" });
  document.querySelector("table #doctor-" + doctorId).classList.add("d-none");
}

deleteButtons.forEach(function (button) {
  button.addEventListener("click", onDeleteClick);
});