document.title = 'SHOW PASSWORD';

const passwordInput = document.getElementById('pwd');

let word = document.getElementById('change');


const togglePassword = () => {
    if (passwordInput.type === "password"){
        passwordInput.type = "text"
        word.innerText = 'SHOW PASSWORD'
    } else {
        passwordInput.type = "password";
        word.innerText = 'HIDE'
    }
}
