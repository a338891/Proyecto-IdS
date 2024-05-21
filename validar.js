function validateForm() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  if (username.value.trim() === "") {
    username.setCustomValidity("Por favor, ingrese su usuario.");
    return false;
  } else {
    username.setCustomValidity("");
  }

  if (password.value.trim() === "") {
    password.setCustomValidity("Por favor, ingrese su contraseña.");
    return false;
  } else {
    password.setCustomValidity("");
  }

  // Redirigir a hpcliente.html
  window.location.href = "hpcliente.html";
  return false; // Esto evita que el formulario se envíe si la redirección ocurre correctamente
}

var users = []; // Esta variable simula una base de datos de usuarios

function addUser() {
  var newUsername = document.getElementById("username").value;
  var newPassword = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (newPassword !== confirmPassword) {
    alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
    return false;
  }

  // Agregar usuario a la "base de datos" (simulada con el array)
  var newUser = {
    username: newUsername,
    password: newPassword
  };

  users.push(newUser); // Agregar el nuevo usuario al array

  alert("Usuario registrado correctamente. Redirigiendo al inicio...");
  window.location.href = "logincliente.html" ;
  return false;
}

function redirectToRegister() {
  window.location.href = "registro.html";
}


