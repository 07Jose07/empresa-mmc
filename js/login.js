const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit',function(event){
    event.preventDefault();
    let users = Array(
        {
            usuario: username.Value,
            contraseña: password.Value 
        }
    );
    console.log(users)
});