let emailValido ="root@cbtis258.edu.mx";
let passValido="admin123";

const chquelogin=(event) => {
    event.preventDefault();
 
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const mensaje=document.getElementById("loginMensaje");

    if(email === emailValido && password === passValido){
        mensaje.textContent= "incio de sesion correcto";
        mensaje.style.color="green";

        setTimeout(() =>{
            window.location.href = "dfedfer.html";
        },1000)
        }
        else{
            mensaje.textContent ="Email o contraseña incorrecta";
            mensaje.style.color ="blue";
        }

};