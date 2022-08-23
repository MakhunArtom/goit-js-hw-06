const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

  if (form.email.value === "" || form.password.value === "") {
    alert("Заполните все поля");
    return;
  }
  formData.forEach((value, name) => {
    console.log(`${name}: ${value} `);
    form.reset();
  });
}
