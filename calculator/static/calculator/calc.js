// DOM Elements
const result = document.getElementById("result")

//operations
const clear = document.getElementById("clear")
const del = document.getElementById("del")
const mod = document.getElementById("mod")
const mult = document.getElementById("mult")
const sub = document.getElementById("sub")
const add = document.getElementById("add")
const equal = document.getElementById("equal")
const point = document.getElementById("point")

//numbers
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")

//logic
let res = "0"

one.addEventListener("click", function(){
    if(res==="0"){
        res=""
    }
    res += "1"
    render()
})

function render(){
    result.innerText += res
}