//Función para inicializar la WEBCAM
function iniciar_WEBCAM(){

//Tomar los elementos creados en la interface y almacenarlos en variables
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const errorMsgElement = document.querySelector('span#errorMsg');
//Asignar dimensionalidad al área de video
const constraints = {
audio: false,
video: {width: 380, height: 280}
};
// Solicitar permiso para acceder a la WEBCAM
async function init() {
try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
} catch (e) {
    errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
}
}
// Si la función retorna que es permitido inicie la proyección en la página
function handleSuccess(stream) {
window.stream = stream;
video.srcObject = stream;
}
// Cargar al inicio
init();
// Dibujar imágen usando un oyente asignado al botón
var context = canvas.getContext('2d');
snap.addEventListener("click", function() {
      context.drawImage(video, 0, 0, 580, 330);
});


}

