const generateBtn = document.getElementById("generate-btn");
const passwordInput = document.getElementById("password");

generateBtn.addEventListener("click", () => {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    let password = "";

    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordInput.value = password;
});