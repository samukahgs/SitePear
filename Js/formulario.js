const form = document.getElementById("form")
const inputs = form.querySelectorAll("input, textarea, select")

const barra = document.getElementById("barraProgresso")
const texto = document.getElementById("textoProgresso")

const servicos = document.querySelectorAll(".servico")



servicos.forEach(servico => {

servico.addEventListener("click", () => {

const check = servico.querySelector("input")

check.checked = !check.checked

servico.classList.toggle("ativo")

atualizarProgresso()

})

})



function atualizarProgresso(){

let preenchidos = 0

inputs.forEach(input=>{

if(input.type === "checkbox"){

if(input.checked) preenchidos++

}else{

if(input.value.trim() !== "") preenchidos++

}

})

let total = inputs.length

let porcentagem = Math.round((preenchidos/total)*100)

barra.style.width = porcentagem + "%"

texto.innerText = `Formulário ${porcentagem}% completo`

}



inputs.forEach(input=>{

input.addEventListener("input", atualizarProgresso)

input.addEventListener("change", atualizarProgresso)

})