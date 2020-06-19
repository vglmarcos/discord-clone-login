const boton = document.getElementById("btn");
const forgetPassword = document.getElementById("forgetPassword");
const register = document.getElementById("register");
const inputPassword = document.getElementById("password");
const inputName = document.getElementById("name");
const loginForm = document.getElementById("loginForm");
const { ipcRenderer } = require('electron');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
});

boton.addEventListener('click', () => {
    const user = {
        name: inputName.value,
        password: inputPassword.value
    }
    loginForm.reset();
    inputName.focus();
    ipcRenderer.send('signUp', user);
});

forgetPassword.addEventListener("click", () => {
    ipcRenderer.send('forgetPassword');
});

register.addEventListener('click', () => {
    ipcRenderer.send('register');
});