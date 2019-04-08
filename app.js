usuario = document.getElementById("user");
contrasena = document.getElementById("pw"); 
btn = document.getElementById("btn");

function yes () {
    if (btn && contrasena.value==usuario.value){
        contrasena.value = "";
        usuario.value = "";
        alert("Exito!");
    } else {
        alert("Parametros invalidos");
    }
}

