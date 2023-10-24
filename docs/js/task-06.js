const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value.trim();
  const dataLength = parseInt(validationInput.getAttribute("data-length"));

  if (inputValue.length === dataLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
