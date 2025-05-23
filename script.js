const passwordBox = document.getElementById("password");
const copyIcon = document.getElementById("copyIcon");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~{}[]<>/?-=";
const allChars = upperCase + lowercase + number + symbol;
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowercase[Math.floor(Math.random()* lowercase.length)];
    password += number[Math.floor(Math.random()* number.length)];
    password += symbol[Math.floor(Math.random()* symbol.length)];

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}
function copyPassword() {
    if (passwordBox.value) {
        navigator.clipboard.writeText(passwordBox.value).then(() => {
            alert("Password copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy:", err);
        });
    } else {
        alert("Generate a password first!");
    }
}