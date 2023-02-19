function validate() {
  const submitBtn = document
    .getElementById("registerForm")
    .addEventListener("submit", onSubmit);
  const checkBtn = document
    .getElementById("company")
    .addEventListener("change", check);
  const userName = document.getElementById("username");
  const userNameRegx = /^[A-Za-z0-9]{3,20}$/;
  const email = document.getElementById("email");
  const emailRegx = /^[^@.]+@[^@]*\.[^@]*$/;
  const passwordForm = document.getElementById("password");
  const passwordConfirmForm = document.getElementById("confirm-password");
  const passwordRegx = /^[\w]{5,15}$/;
  const companyNumber = document.getElementById("companyNumber");
  let isValidate = true;

  function check(ev) {
    if (document.getElementById("company").checked) {
      document.getElementById("companyInfo").style.display = "block";
    } else {
      document.getElementById("companyInfo").style.display = "none";
    }
  }

  function onSubmit(ev) {
    ev.preventDefault();

    if (userNameRegx.test(userName.value)) {
      userName.style.borderColor = "none";
    } else {
      userName.style.borderColor = "red";
      isValidate = false;
    }

    if (emailRegx.test(email.value)) {
      email.style.borderColor = "none";
    } else {
      email.style.borderColor = "red";
      isValidate = false;
    }

    if (
      passwordForm.value === passwordConfirmForm.value &&
      passwordRegx.test(passwordForm.value) &&
      passwordRegx.test(passwordConfirmForm.value)
    ) {
      passwordForm.style.borderColor = "none";
      passwordConfirmForm.style.borderColor = "none";
    } else {
      passwordConfirmForm.style.borderColor = "red";
      passwordForm.style.borderColor = "red";
      isValidate = false;
    }

    if (document.getElementById("company").checked) {
      if (companyNumber.value >= 1000 && companyNumber.value <= 9999) {
        companyNumber.style.borderColor = "none";
      } else {
        companyNumber.style.borderColor = "red";
        isValidate = false;
      }
    }

    if (isValidate) {
      document.getElementById("valid").style.display = "block";
    } else {
      document.getElementById("valid").style.display = "none";
    }
  }
}
