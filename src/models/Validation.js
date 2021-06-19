class Validation {
  constructor() {
    this.email = document.querySelector("input[type=email]");
    this.password = document.querySelector("input[type=password]");
  }

  click() {
    this.email.addEventListener("blur", this.emailValid);
    this.password.addEventListener("blur", this.passValid);
  }

  emailValid() {
    const error = this.parentElement.querySelector(".valid-label");
    const value = this.value.trim();
    const mailRegexp = /^\S+@\S+\.\S+$/;
    const isValid = mailRegexp.test(value);

    if (isValid) {
      this.classList.remove("input--in-valid");
      this.classList.add("input--is-valid");
      error.classList.remove("has-error");
      console.log(this.activ);
    } else {
      this.classList.remove("input--is-valid");
      this.classList.add("input--in-valid");
      error.classList.add("has-error");
      if (value === "") {
        error.textContent = "Էլ․ փոստը պարտադիր է";
      } else {
        error.textContent = "Մուտքագրեք իրական էլ․ փոստ";
      }
    }
  }
  passValid() {
    const error = this.parentElement.querySelector(".valid-label");
    if (this.value === "") {
      this.classList.remove("input--is-valid");
      this.classList.add("input--in-valid");
      error.classList.add("has-error");
      error.textContent = "Գաղտնաբառը պարտադիր է";
    } else {
      this.classList.remove("input--in-valid");
      this.classList.add("input--is-valid");
      error.classList.remove("has-error");
    }
  }
}

export default Validation;
