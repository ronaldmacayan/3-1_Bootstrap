console.log("Ronald Macayan");
console.log("BSIT 3-1");

// let btnRegister = document.getElementById("btnRegister");
let btnRegister = document.querySelector("#btnRegister");
function registerUser (){
    let txtName = document.querySelector("#txtRegisterName");
    let txtEmail = document.querySelector("#txtRegisterEmail");
    let txtPassword = document.querySelector("#txtRegisterPassword");
    let txtConfirmPassword = document.querySelector("#txtRegisterConfirmPassword");
    let txtMale = document.querySelector("#txtRegisterMale");
    let txtFemale = document.querySelector("#txtRegisterFemale");
    let regYearSelect = document.querySelector("#regYear");
    let selectedYear = regYearSelect.options[regYearSelect.selectedIndex].text;
    let txtAddress = document.querySelector("#txtRegisterAddress");
    let txtBirthdate = document.querySelector("#txtRegisterBirthdate");
    

// OBJECT    
    let user = {
        name: txtName.value,
        email: txtEmail.value,
        password: txtPassword.value,
        confirmPassword: txtConfirmPassword.value,
        gender: txtMale.checked ? "Male" : txtFemale ? "Female" : txtRegisterNot ? "Rather not say" : "",
        yearLevel: selectedYear,
        address: txtAddress.value,
        birthdate: txtBirthdate.value,
    };

//  typeof user; 
//  console.log("Botton Register is clicked.", user.name);

    if(!user.email){
        return alert("Lagyan mo kase ng email.");
    } else if(!user.name){
        return alert("Wala ka pang pangalan.");
    } else if(!user.password || !user.confirmPassword){
        return alert("Password is required.");
    } else if(user.password != user.confirmPassword){
        return alert("Hindi match yung password bonak.");
    } else if(!user.gender){
        return alert("Pumili ka ng gender.");
    } else if(regYearSelect.selectedIndex === 0){
        return alert("Anong year kaba kase?.");
    } else if(!user.address){
        return alert("Ilagay mo address mo hindi ka naman nanakawan.");
    } else if(!user.birthdate){
        return alert("Lagay mo birthdate mo wag kang OA.");
    }

// LOCAL STORAGE
    localStorage.setItem("user", JSON.stringify(user));

    console.log("Naka registered kana insan!", users);
}

btnRegister.onclick = () => {
    registerUser();
};
