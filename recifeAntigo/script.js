const lua = document.querySelector(".lua");
const body = document.body;
const header = document.querySelector("header");
let noturno = false;
const inicio = document.getElementById("inicio")
console.log(header);

inicio.addEventListener('mouseover', () => {
    inicio.style.color = "blue"
})
inicio.addEventListener('mouseleave', () => {
    if(!noturno){
        inicio.style.color = "white"
    }
    else{
        inicio.style.color = "black"
    }
    
})
inicio.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

lua.addEventListener('click', () => {
    if(!noturno){
    body.style.backgroundColor = "white";
    body.style.color = "black";
    header.style.backgroundColor = "rgb(202,202,202)"
    lua.src = "./imagens/luaEscura.png"
    noturno = true
    inicio.style.color = "black";
    inicio.style.backgroundColor = "white";
    }
    else{
    body.style.backgroundColor = "black";
    body.style.color = "white";
    header.style.backgroundColor = "rgb(62, 62, 62)"
    lua.src = "./imagens/lua-crescente.png"
    noturno = false
    inicio.style.backgroundColor = "black";
    inicio.style.color = "white";
    }

})