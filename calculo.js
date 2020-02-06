var valor = document.querySelector('input');
var butao = document.querySelector('button');

var valores = [0,1,2,3,4,5,6,7,8,9];

function calcularvalores(){
    for(vlr of valores){
        var valr = parseInt(valor.value);
        var texto = document.createTextNode( valr+" * "+vlr+" = "+vlr*valr);
        var res = document.createElement('li');
        console.log(texto);
        res.appendChild(texto);
        var lista = document.querySelector('ul');
        lista.appendChild(res);
    }
}
butao.onclick = calcularvalores;