window.onload = function() {
  const dateElement = document.getElementById('date-message');
  const alarmSound = document.getElementById('alarm-sound');

  // Reproducir el sonido de alarma
  alarmSound.play();

  // Esperamos 3 segundos para que aparezca la fecha
  setTimeout(function() {
    dateElement.style.opacity = 1; // Hacemos visible la fecha
  }, 2000); // 3 segundos después del inicio
}
