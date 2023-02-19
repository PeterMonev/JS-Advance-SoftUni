function validate() {
  const emailForm = document.getElementById("email");
  const regexValidator = /^[a-z]+@[a-z]+\.[a-z]+/g;

  function onClick() {
    if (regexValidator.test(emailForm.value)) {
      emailForm.classList.remove("error");
    } else {
      emailForm.classList.add("error");
    }
  }

  emailForm.addEventListener("change", onClick);
}
