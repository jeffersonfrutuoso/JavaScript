import estados from "./estados.js";


let tagUl = document.getElementById("lista-estados");
let tagLi = document.getElementById("item-li");
// let estadosBr = []

for (let i = 0; i < estados.length; i++) {
    let estado = estados[i];
    tagUl.innerHTML = tagUl.innerHTML + `<li id= "item-${i}" >Estado: ${estado.nome}, Região ${estado.regiao.nome}</li>` 
}

for (let i = 0; i < estados.length; i++) {
    let tagLi = document.getElementById(`item-${i}`);
    tagLi.addEventListener("click", function(event) {
        console.log(event.target)
    })    
}
// function listarAllEstadoas() {
//     for (let i = 0; i < estados.length; i++) {
//          if(estados[i]){
//              estadosBr.push(estados[i] )
//         }
//         tagUl.innerHTML += `<li><strong>Estado:</strong> ${estadosBr[i].nome}____________ <strong>Região:</strong> ${estadosBr[i].regiao.nome} </li>`
//     }

    
// }

// listarAllEstadoas()










// setTimeout(function() {
//     tagUl.innerHTML = tagUl.innerHTML +  "<li>Estado: acre, região: norte </li>"
// }, 3000)