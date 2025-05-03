let inp = document.getElementById('contra');
let bot = document.getElementById('muestra');

bot.addEventListener('mousedown',mostrarClave);
bot.addEventListener('mouseup',ocultarClave);

function mostrarClave(){
    inp.type = "text";
    document.getElementById('abierto').style.display = "block"
    document.getElementById('cerrado').style.display = "none"
}
function ocultarClave(){
    inp.type = "password";
    document.getElementById('abierto').style.display = "none"
    document.getElementById('cerrado').style.display = "block"
}