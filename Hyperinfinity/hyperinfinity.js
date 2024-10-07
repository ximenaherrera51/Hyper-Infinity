window.onload = function() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";

    // Cerrar el modal cuando se hace clic en el botón de cerrar (x)
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    // Cerrar el modal cuando se hace clic fuera de la ventana modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Cerrar el modal cuando se presiona la tecla "Esc"
    window.onkeydown = function(event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    };

    // Cambiar al formulario de registro
    var registerLink = document.getElementById("registerLink");
    registerLink.onclick = function() {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("registerForm").style.display = "block";
        return false;
    };
};

var registerForm = document.getElementById("registerForm");
registerForm.onsubmit = function(event) {
    event.preventDefault(); // Evitar recargar la página

    // Obtener el nombre del usuario registrado
    var userName = document.getElementById("name").value;

    // Ocultar el formulario de registro y mostrar el mensaje de bienvenida
    registerForm.style.display = "none";
    var welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.style.display = "block";
    
    // Insertar el nombre del usuario en el mensaje de bienvenida
    document.getElementById("userName").innerText = userName;
};

// Cerrar el mensaje de bienvenida
var closeWelcome = document.getElementById("closeWelcome");
closeWelcome.onclick = function() {
    modal.style.display = "none";
};
