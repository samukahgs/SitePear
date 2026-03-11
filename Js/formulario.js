const inputs = document.querySelectorAll("input")
const progresso = document.getElementById("progresso")

function atualizarProgresso(){

let preenchidos = 0

inputs.forEach(input => {
if(input.value.trim() !== ""){
preenchidos++
}
})

let porcentagem = (preenchidos / inputs.length) * 100

progresso.style.width = porcentagem + "%"

}

inputs.forEach(input=>{
input.addEventListener("input", atualizarProgresso)
})