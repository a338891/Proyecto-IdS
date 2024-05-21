document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Validar las credenciales del gerente 
    if (username === "gerente" && password === "contraseña_del_gerente") {
      window.location.href = "hpcliente.html"; // Redirigir al panel del gerente
    } else {
      alert("Credenciales incorrectas para el gerente. Intente de nuevo.");
    }
  });
  