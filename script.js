document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleTheme");

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");

        // Cambia el icono del botón
        if (document.body.classList.contains("light-theme")) {
            toggleButton.textContent = "☀️";
        } else {
            toggleButton.textContent = "🌙";
        }
    });
});
