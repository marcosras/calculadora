var valor = document.getElementById("result")

function addNumber(x){
    if(valor.innerHTML=="ERROR"){
        valor.innerHTML = x
    }
    else{
        if(valor.innerHTML=="0"){
            valor.innerHTML = x
        }
        else{
            valor.innerHTML += x
        }
    }
}

function zero(){
    if(valor.innerHTML=="ERROR"){
        valor.innerHTML="0"
    }
    else{
        if(valor.innerHTML!="0"){
            valor.innerHTML+="0"
        }
    }
}

function reset(){
    valor.innerHTML = "0"
}

function del(){
    let conteudo = valor.innerHTML.slice(0, -1);
    if(valor.innerHTML=="ERROR"){
        valor.innerHTML=0
    }
    else{
        if (conteudo === "") {
            conteudo = "0";
        }
    valor.innerHTML = conteudo;
    }

}

function mais(){
    let conteudo = valor.innerHTML.slice(-1);
    let verif = valor.innerHTML
    if(isNaN(eval(verif)) || eval(verif)==Infinity){
        valor.innerHTML = "ERROR"
        return
    }
    if(conteudo=="+"||conteudo=="-"||conteudo=="."||conteudo=="*"||conteudo=="/"){
        valor.innerHTML= valor.innerHTML.slice(0,-1);
        valor.innerHTML+="+"
        return
    }
    if(verif.includes("+")||verif.includes("-")||verif.includes("*")||verif.includes("/")){
        valor.innerHTML = eval(valor.innerHTML)
        valor.innerHTML+="+"
        return
    }
    else{
        valor.innerHTML+= "+"
    }
}


function menos(){
    let conteudo = valor.innerHTML.slice(-1);
    let verif = valor.innerHTML
    if(isNaN(eval(verif)) || eval(verif)==Infinity){
        valor.innerHTML = "ERROR"
        return
    }
    if(conteudo=="+"||conteudo=="-"||conteudo=="."||conteudo=="*"||conteudo=="/"){
        valor.innerHTML= valor.innerHTML.slice(0,-1);
        valor.innerHTML+="-"
        return;
    }
    if(verif.includes("+")||verif.includes("-")||verif.includes("*")||verif.includes("/")){
        valor.innerHTML = eval(valor.innerHTML)
        valor.innerHTML+="-"
        return
    }
    else{
        valor.innerHTML+= "-"
    }
}

function virgula(){
    let partes = valor.innerHTML.split(/[\+\-\*\/]/)
    let penultimo = partes[partes.length - 2]
    let ultimonumero = partes.pop()    
    let conteudo = valor.innerHTML.slice(-1);
    if(valor.innerHTML=="ERROR"){
        valor.innerHTML+=""
        return
    }
    if(ultimonumero.includes(".")){
        return
    }
    if(ultimonumero== "" && penultimo.includes(".")){
        return
    }
    if(conteudo=="+"||conteudo=="-"||conteudo=="."||conteudo=="*"||conteudo=="/"){
        valor.innerHTML= valor.innerHTML.slice(0,-1);
        valor.innerHTML+="."
    }
    else{
        valor.innerHTML+= "."
    }
}
function divisao(){
    let conteudo = valor.innerHTML.slice(-1);
    let verif = valor.innerHTML
    if(isNaN(eval(verif)) || eval(verif)==Infinity){
        valor.innerHTML = "ERROR"
        return
    }
    if(conteudo=="+"||conteudo=="-"||conteudo=="."||conteudo=="*"||conteudo=="/"){
        valor.innerHTML= valor.innerHTML.slice(0,-1);
        valor.innerHTML+="/"
        return;
    }
    if(verif.includes("+")||verif.includes("-")||verif.includes("*")||verif.includes("/")){
        valor.innerHTML = eval(valor.innerHTML)
        valor.innerHTML+="/"
    }
    else{
        valor.innerHTML+= "/"
    }
}

function x(){
    let conteudo = valor.innerHTML.slice(-1);
    let verif = valor.innerHTML
    if(isNaN(eval(verif)) || eval(verif)==Infinity){
        valor.innerHTML = "ERROR"
        return
    }
    if(conteudo=="+"||conteudo=="-"||conteudo=="."||conteudo=="*"||conteudo=="/"){
        valor.innerHTML= valor.innerHTML.slice(0,-1);
        valor.innerHTML+="*"
        return;
    }
    if(verif.includes("+")||verif.includes("-")||verif.includes("*")||verif.includes("/")){
        valor.innerHTML = eval(valor.innerHTML)
        valor.innerHTML+="*"
        return
    }
    else{
        valor.innerHTML+= "*"
    }
}
function igual(){
    if(eval(valor.innerHTML)==Infinity||isNaN(eval(valor.innerHTML))){
        valor.innerHTML="ERROR"
    }
    else{
        valor.innerHTML = eval(valor.innerHTML)
    }
}

document.addEventListener("keydown", function(e){
    let t = e.key
    if(!isNaN(t) && t !== " ") { 
        addNumber(t);
    }
    if(t === "0"){
        zero();
    }
    if(t === "+"){
        mais();
    }
    if(t === "-"){
        menos();
    }
    if(t === "*"){
        x();
    }
    if(t === "/"){
        divisao();
    }

    if(t === "."){
        virgula();
    }

    if(t === "Backspace"){
        del();
    }
    if(t === "Enter"){
        igual();
    }
    if(t === "Escape"){
        reset();
    }
})
