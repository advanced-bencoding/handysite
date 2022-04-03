// DOM Elements
const result = document.getElementById("result")

//operations
const clear = document.getElementById("clear")
const del = document.getElementById("del")
const mod = document.getElementById("mod")
const mult = document.getElementById("mult")
const div = document.getElementById("div")
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
const zero = document.getElementById("zero")

//logic
let res = "0"

one.addEventListener("click", function(){
    if(res==="0"){
        res=""
    }
    res += "1"
    render()
})

two.addEventListener("click", function(){
    if(res==="0"){
        res=""
    }
    res += "2"
    render()
})

three.addEventListener("click", function(){
    if(res==="0"){
        res=""
    }
    res += "3"
    render()
})

four.addEventListener("click", function(){
    if(res==="0"){
        res=""
    }
    res += "4"
    render()
})

five.addEventListener("click", function(){
    if(res==="0"){
        res=""
    }
    res += "5"
    render()
})

six.addEventListener("click", function(){
    if(res==="0"){
        res=""
    }
    res += "6"
    render()
})

seven.addEventListener("click", function(){
    if(res==="0"){
        res=""
    }
    res += "7"
    render()
})

eight.addEventListener("click", function(){
    if(res==="0"){
        res=""
    }
    res += "8"
    render()
})

nine.addEventListener("click", function(){
    if(res==="0"){
        res=""
    }
    res += "9"
    render()
})

zero.addEventListener("click", function(){
    if(res==="0"){
        res=""
    }
    res += "0"
    render()
})

add.addEventListener("click", function(){
    if(isOperator()){
        res = res.substring(0, res.length-1)+"+"
    }
    else{
        res += "+"
    }
    render()
})

sub.addEventListener("click", function(){
    if(isOperator()){
        res = res.substring(0, res.length-1)+"-"
    }
    else{
        res += "-"
    }
    render()
})

mult.addEventListener("click", function(){
    if(isOperator()){
        res = res.substring(0, res.length-1)+"*"
    }
    else{
        res += "*"
    }
    render()
})

div.addEventListener("click", function(){
    if(isOperator()){
        res = res.substring(0, res.length-1)+"/"
    }
    else{
        res += "/"
    }
    render()
})

mod.addEventListener("click", function(){
    if(isOperator()){
        res = res.substring(0, res.length-1)+"%"
    }
    else{
        res += "%"
    }
    render()
})

point.addEventListener("click", function(){
    if(isOperator()){
        res = res.substring(0, res.length-1)+"."
    }
    else{
        res += "."
    }
    render()
})

equal.addEventListener("click", function(){
    let num
    if(isOperator()){
        num = eval(res.substring(0, res.length-1))
    }
    else{
    num = eval(res)
    }
    res = num.toString()
    render()
})

clear.addEventListener("click", function(){
    res = "0"
    render()
})

del.addEventListener("click", function(){
    if(res.length===1){
        res = "0"
    }
    else{
        res = res.substring(0, res.length-1)
    }
    render()
})

function isOperator(){
    if(res[res.length-1]==="+" || res[res.length-1]==="-" || res[res.length-1]==="*" || res[res.length-1]==="/" || res[res.length-1]==="%" || res[res.length-1]==="."){
        return true
    }
    return false
}

function render(){
    result.innerText = res
}