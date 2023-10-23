const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value.trim();
  const dataLength = parseInt(validationInput.getAttribute("data-length"));

  if (inputValue.length === dataLength) {
    validationInput.style.border = "2px solid #4caf50";
  } else {
    validationInput.style.border = "2px solid #f44336";
  }
});
