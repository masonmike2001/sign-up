//goal: check authenticity of user pw from form field

//DOM selectors
const initPwd = document.getElementById("f-password");
const lastPwd = document.getElementById("l-password");
const form = document.querySelector("form");

//event listeners
lastPwd.addEventListener("keyup", checkPasswords);

//functions
function checkPasswords(e)
{
    if (initPwd.value == lastPwd.value)
    {
        initPwd.classList.remove('invalid-js');
        lastPwd.classList.remove('invalid-js');
        lastPwd.className="valid-js";
        initPwd.className="valid-js";
        //form is able to submit, returns
        return 0;
    }
    else {
        //error message 
        initPwd.classList.remove('valid-js');
        lastPwd.classList.remove('valid-js');
        lastPwd.className="invalid-js";
        initPwd.className="invalid-js";
        lastPwd.setAttribute.backgroundColor = "blue";  
        console.log("Error-Please enter the SAME password to continue.");
    }
}