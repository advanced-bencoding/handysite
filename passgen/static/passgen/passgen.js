const input = document.getElementById("nums")
const buttonEl = document.getElementById("button-el")
const error = document.getElementById("error")
const field1 = document.getElementById("a")
const field2 = document.getElementById("b")
const field3 = document.getElementById("c")
const field4 = document.getElementById("d")

const charset = ['#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~']

buttonEl.addEventListener("click", function(){
    let nums = input.value
    if(nums<8){
        error.textContent = "Choose a number greater than 8 for a secure password"
    }
    else{
        error.textContent = ""
        setPass(nums)
    }
})

function setPass(n){
    field1.value = generatePass(n)
    field2.value = generatePass(n)
    field3.value = generatePass(n)
    field4.value = generatePass(n)
}

function generatePass(x){
    let pass=""

    for(let i=0; i<x; i++){
        pass += charset[Math.floor(Math.random()*92)]
    }
    console.log(pass)
    return pass
}