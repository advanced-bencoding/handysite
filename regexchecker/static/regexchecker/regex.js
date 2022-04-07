const customString = document.getElementById("custom");
const customRegex = document.getElementById("custom-regex");
const customSubmit = document.getElementById("custom-submit");
const customResult = document.getElementById("custom-result");
const ip = document.getElementById("ip");
const ipCheck = document.getElementById("ip-submit");
const ipResult = document.getElementById("ip-result");
const pass = document.getElementById("password");
const checkPass = document.getElementById("password-submit");

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

def.addEventListener("click", () => {
  if (def.checked) {
    length.checked = false;
    upper.checked = false;
    lower.checked = false;
    special.checked = false;
    numeric.checked = false;
  }
});

length.addEventListener("click", () => {
  defstatus();
});

upper.addEventListener("click", () => {
  defstatus();
});

lower.addEventListener("click", () => {
  defstatus();
});

special.addEventListener("click", () => {
  defstatus();
});

numeric.addEventListener("click", () => {
  defstatus();
});

const defstatus = () => {
  if (def.checked) {
    def.checked = false;
  }
};

checkPass.addEventListener("click", ()=>{
})

pass.setCustomValidity("hello");