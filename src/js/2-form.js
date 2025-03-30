let formData = { email: "", message: "" };
const formFeed = document.querySelector(".feedback-form") ;
const emailInput = document.querySelector(".email");
const messageInput = document.querySelector(".message");
const btnInput = document.querySelector(".submit");

// Checking local storage when loading a page
document.addEventListener("DOMContentLoaded", () => {
    const savedFormData = localStorage.getItem("feedback-form-state");
    if (savedFormData) {
        const parsedFormData = JSON.parse(savedFormData);
        formData.email = parsedFormData.email;
        formData.message = parsedFormData.message;
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
});

// Tracking changes to a form via the input event
emailInput.addEventListener("input", (event) => {
    formData.email = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

messageInput.addEventListener("input", (event) => {
    formData.message = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

// Validation before submitting the form
formFeed.addEventListener("submit", (event) => {
    event.preventDefault();

    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        formData.email = "";
        formData.message = "";
        messageInput.value = "";
        emailInput.value = "";
    }
});

