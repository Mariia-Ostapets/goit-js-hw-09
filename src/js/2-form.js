const feedbackForm = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

feedbackForm.elements.email.value = localStorage.getItem(localStorageKey) ?? "";
feedbackForm.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

feedbackForm.addEventListener("input", (event) => {
  localStorage.setItem(localStorageKey, event.target.value.trim());
});

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
      const formFieldsObject = {
        Email: feedbackForm.elements.email.value,
        Message: feedbackForm.elements.message.value.trim(),
    };
    console.log(formFieldsObject);

    localStorage.removeItem(localStorageKey);
    feedbackForm.reset();
    });
