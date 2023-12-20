document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  document
    .getElementById("submit-button")
    .addEventListener("click", function (event) {
      console.log("Submit button clicked");
      event.preventDefault();
      validateForm();
    });

  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      console.log("Form submit event triggered");
      event.preventDefault(); // Prevent the form from submitting
      validateForm();
    });

  function validateForm() {
    console.log("Running validateForm");
    var inputs = document.querySelectorAll("#myForm .input-container input");
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        console.log("Empty input found", input);
        input.parentElement.classList.add("input-container-error");
      } else {
        console.log("Valid input found", input);
        input.parentElement.classList.remove("input-container-error");
      }
    });
  }
});
