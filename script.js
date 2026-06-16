const generateBtn = document.getElementById("generate-btn"); // 生成ボタン
const passwordInput = document.getElementById("password"); // パスワード表示欄
const lengthInput = document.getElementById("length");  // 文字数指定欄
const uppercaseCheckbox = document.getElementById("uppercase"); // 大文字チェックボックス
const lowercaseCheckbox = document.getElementById("lowercase"); // 小文字チェックボックス
const numbersCheckbox = document.getElementById("numbers");

generateBtn.addEventListener("click", () => {
    const length = Number(lengthInput.value);

    let characters = "";

    if (uppercaseCheckbox.checked) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercaseCheckbox.checked) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbersCheckbox.checked) {
        characters += "0123456789";
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordInput.value = password;
});