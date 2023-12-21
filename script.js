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
      let errorElementId = input.name + "-error"; // Construct the error element ID
      let errorElement = document.getElementById(errorElementId);

      if (input.value.trim() === "") {
        console.log("Empty input found", input);
        input.parentElement.classList.add("input-container-error");
        if (errorElement) {
          errorElement.style.display = "block";
        }
      } else if (input.type === "email" && !validateEmail(input.value)) {
        console.log("Invalid email found", input);
        input.parentElement.classList.add("input-container-error");
        if (errorElement) {
          errorElement.textContent = "Looks like this is not an email"; // Update error message for email
          errorElement.style.display = "block";
        }
      } else {
        console.log("Valid input found", input);
        input.parentElement.classList.remove("input-container-error");
        if (errorElement) {
          errorElement.style.display = "none";
        }
      }
    });
  }

  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
    return emailRegex.test(email);
  }
});
