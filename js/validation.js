function validacion() {
    let correcto = true;
    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let email = document.getElementById('email');
    let provincia = document.getElementById('provincia');
    let aceptar = document.getElementById('exampleCheck1');
    let sexo = document.querySelectorAll('input[name="sexo"]:checked');
    let contrasena = document.getElementById('contrasena');
    let confirmarContrasena = document.getElementById('confirmarContrasena');

    // Validaciones individuales
    if (nombre.value === '') {
        correcto = false;
        nombre.style.borderColor = "red";
        document.getElementById('nombreHelp').style.visibility = "visible";
    } else {
        nombre.style.borderColor = "";
        document.getElementById('nombreHelp').style.visibility = "hidden";
    }

    // Resto de validaciones para apellidos, email y provincia...

    if (sexo.length === 0) {
        correcto = false;
        document.getElementById('sexoHelp').style.visibility = "visible";
    } else {
        document.getElementById('sexoHelp').style.visibility = "hidden";
    }

    // Validaciones adicionales
    if (!aceptar.checked) {
        correcto = false;
        document.getElementById('aceptarHelp').style.visibility = "visible";
    } else {
        document.getElementById('aceptarHelp').style.visibility = "hidden";
    }

    // Validación de contraseña
    if (contrasena.value === '') {
        correcto = false;
        contrasena.style.borderColor = "red";
        document.getElementById('contrasenaHelp').innerText = "La contraseña no puede estar vacía.";
        document.getElementById('contrasenaHelp').style.visibility = "visible";
    } else if (contrasena.value.length < 8 || contrasena.value.length > 12) {
        correcto = false;
        contrasena.style.borderColor = "red";
        document.getElementById('contrasenaHelp').innerText = "La contraseña debe tener entre 8 y 12 caracteres.";
        document.getElementById('contrasenaHelp').style.visibility = "visible";
    } else {
        contrasena.style.borderColor = "";
        document.getElementById('contrasenaHelp').style.visibility = "hidden";
    }

    // Validación de confirmación de contraseña
    if (confirmarContrasena.value === '') {
        correcto = false;
        confirmarContrasena.style.borderColor = "red";
        document.getElementById('confirmarContrasenaHelp').innerText = "Por favor, confirma tu contraseña.";
        document.getElementById('confirmarContrasenaHelp').style.visibility = "visible";
    } else if (confirmarContrasena.value !== contrasena.value) {
        correcto = false;
        confirmarContrasena.style.borderColor = "red";
        document.getElementById('confirmarContrasenaHelp').innerText = "Las contraseñas no coinciden.";
        document.getElementById('confirmarContrasenaHelp').style.visibility = "visible";
    } else {
        confirmarContrasena.style.borderColor = "";
        document.getElementById('confirmarContrasenaHelp').style.visibility = "hidden";
    }

    return correcto;
}

function resetear(id) {
    document.getElementById(id + 'Help').style.visibility = "hidden";
    document.getElementById(id).style.borderColor = "lightgray";
}

