const customString = document.getElementById("custom");
const customRegex = document.getElementById("custom-regex");
const customSubmit = document.getElementById("custom-submit");
const customResult = document.getElementById("custom-result");
const ip = document.getElementById("ip");
const ipCheck = document.getElementById("ip-submit");
const ipResult = document.getElementById("ip-result");
const pass = document.getElementById("password");
const checkPass = document.getElementById("password-submit");
const form = document.getElementById("passcheckboi");
const passLength = document.getElementById("pass-length");

const def = document.getElementById("check-default");
def.checked = true;
const length = document.getElementById("check-length");
const upper = document.getElementById("check-upper");
const lower = document.getElementById("check-lower");
const special = document.getElementById("check-special");
const numeric = document.getElementById("check-numeric");

customSubmit.addEventListener("click", () => {
  const myString = customString.value;
  const caseFlag = document.getElementById("ignore-case").checked;
  const globalFlag = document.getElementById("global").checked;
  let myRegex;
  let result;
  if (caseFlag || globalFlag) {
    let flag = "";
    if (caseFlag) {
      flag += "i";
    }
    if (globalFlag) {
      flag += "g";
    }
    myRegex = new RegExp(customRegex.value, flag);
  } else {
    myRegex = new RegExp(customRegex.value);
  }

  customResult.value = myRegex.test(myString);
});

ipCheck.addEventListener("click", () => {
  const myIP = ip.value;
  const regex =
    /^([2][5][0-5]|[2][0-4][0-9]|[1][0-9][0-9]|[1-9][0-9]|[0-9])[.]([2][5][0-5]|[2][0-4][0-9]|[1][0-9][0-9]|[1-9][0-9]|[0-9])[.]([2][5][0-5]|[2][0-4][0-9]|[1][0-9][0-9]|[1-9][0-9]|[0-9])[.]([2][5][0-5]|[2][0-4][0-9]|[1][0-9][0-9]|[1-9][0-9]|[0-9])$/;
  ipResult.value = regex.test(myIP);
});

//Default validation stuff
let passlen = 8;
let upperlen = 0;
let lowerlen = 0;
let speciallen = 0;
let numericlen = 0;
let defregex = /(?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[0-9]{1,})(?=.*[$&+,:;=?@#|'<>.*()%!]{1,})[a-zA-Z0-9$&+,:;=?@#|'<>.-^*()%!]{8,}/;
//let newRegex = `(?=.*[a-z]{${lowerlen},})(?=.*[A-Z]{${upperlen},})(?=.*[0-9]{${numericlen},})(?=.*[$&+,:;=?@#|'<>.*()%!]{${speciallen},})[a-zA-Z0-9$&+,:;=?@#|'<>.-^*()%!]{${passlen},}`;
let newRegexObj;

function generateRegex(newRegex){
  newRegexObj = new RegExp(newRegex);
}

def.addEventListener("click", () => {
  if (def.checked) {
    length.checked = false;
    upper.checked = false;
    lower.checked = false;
    special.checked = false;
    numeric.checked = false;
    passlen = 8;
    upperlen = 0;
    lowerlen = 0;
    speciallen = 0;
    numericlen = 0;
  }
});

length.addEventListener("click", () => {
  defstatus();
  if(!length.checked){
    isEveroneUnchecked();
  }
});

upper.addEventListener("click", () => {
  defstatus();
  if(upper.checked){
    upperlen = 1;
  }
  else{
    upperlen = 0;
    isEveroneUnchecked();
  }
});

lower.addEventListener("click", () => {
  defstatus();
  if(lower.checked){
    lowerlen = 1;
  }
  else{
    lowerlen = 0;
    isEveroneUnchecked();
  }
});

special.addEventListener("click", () => {
  defstatus();
  if(special.checked){
    speciallen = 1;
  }
  else{
    speciallen = 0;
    isEveroneUnchecked();
  }
});

numeric.addEventListener("click", () => {
  defstatus();
  if(numeric.checked){
    numericlen = 1;
  }
  else{
    numericlen = 0;
    isEveroneUnchecked();
  }
});

const defstatus = () => {
  if (def.checked) {
    def.checked = false;
  }
};

function isEveroneUnchecked(){
  if(!(length.checked || upper.checked || lower.checked || special.checked || numeric.checked)){
    def.checked = true;
  }
}

checkPass.addEventListener("click", ()=>{
  if(length.checked){
    passlen = passLength.value;
  }
  else{
    passlen = 8;
  }
  let newRegex = `(?=.*[a-z]{${lowerlen},})(?=.*[A-Z]{${upperlen},})(?=.*[0-9]{${numericlen},})(?=.*[$&+,:;=?@#|'<>.*()%!]{${speciallen},})[a-zA-Z0-9$&+,:;=?@#|'<>.-^*()%!]{${passlen},}`;
  generateRegex(newRegex);
  let error = "";
  let str = pass.value;
  if(newRegexObj.test(str)){
    alert("The password is strong!!!");
  }
  else{
    if(str.length<passlen){
      error+=`The password must be ${passlen} characters long. `;
    }
    if(!(/[a-z]/.test(str)) && lower.checked){
      error+=`The password must contain a lower case letter. `;
    }
    if(!(/[A-Z]/.test(str)) && upper.checked){
      error+=`The password must contain an upper case letter. `;
    }
    if(!(/[0-9]/.test(str)) && numeric.checked){
      error+=`The password must contain a number. `;
    }
    if(!(/$&+,:;=?@#|'<>.*()%!/) && special.checked){
      error+=`The password must contain a special character. `;
    }
    alert(error);
  }
})