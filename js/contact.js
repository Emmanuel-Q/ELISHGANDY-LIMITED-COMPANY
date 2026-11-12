const form = document.querySelector("#business-enquiry");

if (form) {
  const status = form.querySelector(".form-status");
  const checkButton = form.querySelector("[data-check-enquiry]");

  checkButton?.addEventListener("click", () => {
    if (!form.reportValidity()) return;

    status.textContent = "Your message has not been sent. This form is not connected to a submission service yet. Please contact the company using its verified contact details when they are added.";
    status.setAttribute("role", "status");
  });
}
