class Validation {
  constructor() {
    this.email = document.querySelector("input[type=email]");
    //   this.password = document.querySelector("input[type=password]");
    this.name = document.querySelector("input[name=name]");
    this.surname = document.querySelector("input[name=surname]");
    this.dataDay = document.querySelector("input[name=dataDay]");
    this.dataYear = document.querySelector("input[name=dataYear]");
    this.number = document.querySelector("input[name=number]");
    this.regPassword = document.querySelector("input[name=password]");
    this.repPassword = document.querySelector("input[name=repPassword]");
  }

  click() {
    this.email.addEventListener("blur", this.emailValid);
    //   this.password.addEventListener("blur", this.passValid);
    this.name.addEventListener("blur", this.nameValid);
    this.surname.addEventListener("blur", this.surnameValid);
    this.dataDay.addEventListener("blur", this.dataDayValid);
    this.dataYear.addEventListener("blur", this.dataYearValid);
    this.number.addEventListener("blur", this.numberValid);
    this.regPassword.addEventListener("blur", this.regPasswordValid);
    this.repPassword.addEventListener("blur", this.repPasswordValid);
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

  nameValid() {
    const error = this.parentElement.querySelector(".valid-label");
    const value = this.value.trim();
    const nameRegexp = /^[a-zA-Z ]{2,30}$/;
    const isValid = nameRegexp.test(value);
    if (isValid) {
      this.classList.remove("input--in-valid");
      this.classList.add("input--is-valid");
      error.classList.remove("has-error");
    } else {
      this.classList.remove("input--is-valid");
      this.classList.add("input--in-valid");
      error.classList.add("has-error");
      if (value === "") {
        error.textContent = "Անունը պարտադիր է";
      } else {
        error.textContent = "Մուտքագրեք իրական անուն";
      }
    }
  }

  surnameValid() {
    const error = this.parentElement.querySelector(".valid-label");
    const value = this.value.trim();
    const surnameRegexp = /^[a-zA-Z ]{2,30}$/;
    const isValid = surnameRegexp.test(value);
    if (isValid) {
      this.classList.remove("input--in-valid");
      this.classList.add("input--is-valid");
      error.classList.remove("has-error");
    } else {
      this.classList.remove("input--is-valid");
      this.classList.add("input--in-valid");
      error.classList.add("has-error");
      if (value === "") {
        error.textContent = "Ազգանունը պարտադիր է";
      } else {
        error.textContent = "Մուտքագրեք իրական ազգանունը";
      }
    }
  }

  dataDayValid() {
    const error =
      this.parentElement.parentElement.querySelector(".valid-label");
    const value = this.value.trim();
    const dayRegexp = /0[1-9]|[12]\d|3[01]/;
    const isValid = dayRegexp.test(value);
    if (isValid) {
      this.classList.remove("input--in-valid");
      this.classList.add("input--is-valid");
      error.classList.remove("has-error");
    } else {
      this.classList.remove("input--is-valid");
      this.classList.add("input--in-valid");
      error.classList.add("has-error");
      if (value === "") {
        error.textContent = "Ծնն․ Օրը պարտադիր է";
      } else {
        error.textContent = "Մուտքագրեք իրական Ծնն․ Օր";
      }
    }
  }

  dataYearValid() {
    const error =
      this.parentElement.parentElement.querySelector(".valid-label");
    const value = this.value.trim();
    const yearRegexp = /^(194[5-9]|19[5-9]\d|200\d|201[0-3])$/;
    const isValid = yearRegexp.test(value);
    if (isValid) {
      this.classList.remove("input--in-valid");
      this.classList.add("input--is-valid");
      error.classList.remove("has-error");
    } else {
      this.classList.remove("input--is-valid");
      this.classList.add("input--in-valid");
      error.classList.add("has-error");
      if (value === "") {
        error.textContent = "Ծնն․ տարեթիվը պարտադիր է";
      } else {
        error.textContent = "Մուտքագրեք իրական Ծնն․ տարեթիվ";
      }
    }
  }

  numberValid() {
    const error = this.parentElement.querySelector(".valid-label");
    const value = this.value.trim();
    const numberRegexp =
      /^\+?(374)\)?[-. ]?([0-9]{2})[-. ]?([0-9]{3})?[-. ]?([0-9]{3})$/;
    const isValid = numberRegexp.test(value);
    if (isValid) {
      this.classList.remove("input--in-valid");
      this.classList.add("input--is-valid");
      error.classList.remove("has-error");
    } else {
      this.classList.remove("input--is-valid");
      this.classList.add("input--in-valid");
      error.classList.add("has-error");
      if (value === "") {
        error.textContent = "ՀԵռախոսահամարը պարտադիր է";
      } else {
        error.textContent = "Մուտքագրեք իրական ՀԵռախոսահամար";
      }
    }
  }

  regPasswordValid() {
    const error = this.parentElement.querySelector(".valid-label");
    const value = this.value.trim();
    const passwordRegexp = /^[a-zA-Z0-9]{8,20}$/;
    const isValid = passwordRegexp.test(value);
    if (isValid) {
      this.classList.remove("input--in-valid");
      this.classList.add("input--is-valid");
      error.classList.remove("has-error");
    } else {
      this.classList.remove("input--is-valid");
      this.classList.add("input--in-valid");
      error.classList.add("has-error");
      if (value === "") {
        error.textContent = "Գաղտնաբառը պարտադիր է";
      } else {
        error.textContent =
          "Գաղտնաբառը պետք է ունենա 8-20 նիշ, մեծատառ,փոքրատառ տառեր և թվեր";
      }
    }
  }

  repPasswordValid() {
    const error = this.parentElement.querySelector(".valid-label");
    const passValue = document.querySelector("input[name=password]").value;
    const value = this.value.trim();
    if (value === passValue) {
      this.classList.remove("input--in-valid");
      this.classList.add("input--is-valid");
      error.classList.remove("has-error");
    } else {
      this.classList.remove("input--is-valid");
      this.classList.add("input--in-valid");
      error.classList.add("has-error");
      if (value === "") {
        error.textContent = "Գաղտնաբառը պարտադիր է";
      } else {
        error.textContent = "Գաղտնաբառը պետք է լինի նույնը";
      }
    }
  }
}

export default Validation;
