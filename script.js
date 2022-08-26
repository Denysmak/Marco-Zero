const lua = document.querySelector(".lua");
const body = document.body;
const header = document.querySelector("header");
let noturno = false;

console.log(header);

lua.addEventListener('click', () => {
    if (!noturno) {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        header.style.backgroundColor = "rgb(202,202,202)"
        lua.src = "./imagens/luaEscura.png"
        noturno = true
    }
    else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        header.style.backgroundColor = "rgb(62, 62, 62)"
        lua.src = "./imagens/lua-crescente.png"
        noturno = false
    }

})