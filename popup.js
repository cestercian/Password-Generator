const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()-_+=[]{}|;:<>./?";
const messageElement = document.getElementById("msgen");

function generatePasswords() {
    const passwordLength = 10;
    let password1 = '';
    let password2 = '';

    for (let i = 0; i < passwordLength; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)];
        password2 += characters[Math.floor(Math.random() * characters.length)];
    }

    document.getElementById('pb1').textContent = password1;
    document.getElementById('pb2').textContent = password2;
}

function copyToClipboard(passwordBoxId) {
    const password = document.getElementById(passwordBoxId).textContent;
    navigator.clipboard.writeText(password).then(() => {
        messageElement.textContent = "COPIED TO CLIPBOARD !!";
    }).catch(() => {
        messageElement.textContent = "COULDN'T COPY!!!";
    });
}

document.getElementById("password-gen").addEventListener("click", generatePasswords);
document.getElementById("pb1").addEventListener("click", () => copyToClipboard("pb1"));
document.getElementById("pb2").addEventListener("click", () => copyToClipboard("pb2"));
