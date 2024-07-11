import estados from "./estados.js";


let tagUl = document.getElementById("lista-estados");
let estadosBr = []
function listarAllEstadoas() {
    for (let i = 0; i < estados.length; i++) {
         if(estados[i]){
             estadosBr.push(estados[i] )
        }
        tagUl.innerHTML += `<li><strong>Estado:</strong> ${estadosBr[i].nome}____________ <strong>Região:</strong> ${estadosBr[i].regiao.nome} </li>`
    }

    
}

listarAllEstadoas()










// setTimeout(function() {
//     tagUl.innerHTML = tagUl.innerHTML +  "<li>Estado: acre, região: norte </li>"
// }, 3000)