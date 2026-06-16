const generateBtn = document.getElementById("generate-btn");
const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");

generateBtn.addEventListener("click", () => {
    const length = Number(lengthInput.value);

    let characters = "";

    if (uppercaseCheckbox.checked) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercaseCheckbox.checked) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordInput.value = password;
});