
/*Detecta el tipo de interes seleccionado */
let tresC = document.getElementById('tresCuo');
tresC.addEventListener('change',tres);
let cuaSei = document.getElementById('seisCuo');
cuaSei.addEventListener('change',cinc);
document.getElementById('nueveCuo').addEventListener('change',cinc);
document.getElementById('doceCuo').addEventListener('change',cuaren)

/*Imprime de acuerdo al interes selecionado */
function tres(){
    let precioIn = parseInt(document.getElementById('prc').value);
    document.getElementById('tot').innerHTML = "Total a pagar:$"+precioIn;

}
function cinc(){
    let precioIn = parseInt(document.getElementById('prc').value);
    document.getElementById('tot').innerHTML = "Total a pagar:$"+(precioIn/100)*150;
}
function cuaren(){
    let precioIn = parseInt(document.getElementById('prc').value);
    document.getElementById('tot').innerHTML = "Total a pagar:$"+(precioIn/100)*140;
}