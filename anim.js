// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "💕 te amoo 💘", time: 13 },
  { text: "Flaca vos sos hermosa🥰💖", time: 18 },
  { text: "Y te mereces todo💕", time: 20 },
  { text: "Amarte es mi necesidad💞", time: 22 },
  { text: "Mi necesidad 🥰", time: 24 },
  { text: "De ti me gustan cosas 😍", time: 26 },
  { text: "La verdad todo 💖", time: 28 },
  { text: "Quitarte esa inseguridad 💓", time: 30 },
  { text: "Es mi necesidad 😘💞", time: 32 },
  { text: "Es darte un par de besitoos....", time: 34 },
  { text: "TE AMO NAYDA😘💓", time: 44 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);