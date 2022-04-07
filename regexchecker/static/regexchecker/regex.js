const customString = document.getElementById("custom");
const customRegex = document.getElementById("custom-regex");
const customSubmit = document.getElementById("custom-submit");
const customResult = document.getElementById("custom-result");
const ip = document.getElementById("ip");
const ipCheck = document.getElementById("ip-submit");
const ipResult = document.getElementById("ip-result");

customSubmit.addEventListener("click", ()=>{
    const myString = customString.value;
    const caseFlag = document.getElementById("ignore-case").checked;
    const globalFlag = document.getElementById("global").checked;
    let myRegex;
    let result;
    if(caseFlag || globalFlag){
        let flag = "";
        if(caseFlag){
            flag+="i";
        }
        if(globalFlag){
            flag+="g";
        }
        myRegex = new RegExp(customRegex.value, flag);
    }
    else{
        myRegex = new RegExp(customRegex.value);
    }

    customResult.value = myRegex.test(myString);
})

ipCheck.addEventListener("click", ()=>{
    const myIP = ip.value;
    const regex = /^([2][5][0-5]|[2][0-4][0-9]|[1][0-9][0-9]|[1-9][0-9]|[0-9])[.]([2][5][0-5]|[2][0-4][0-9]|[1][0-9][0-9]|[1-9][0-9]|[0-9])[.]([2][5][0-5]|[2][0-4][0-9]|[1][0-9][0-9]|[1-9][0-9]|[0-9])[.]([2][5][0-5]|[2][0-4][0-9]|[1][0-9][0-9]|[1-9][0-9]|[0-9])$/;
    ipResult.value = regex.test(myIP);
})