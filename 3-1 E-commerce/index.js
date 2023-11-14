console.log("Ronald Macayan");
console.log("BSIT 3-1");

// let btnRegister = document.getElementById("btnRegister");
let btnRegister = document.querySelector("#btnRegister");
function registerUser (){
    let txtName = document.querySelector("#txtRegisterName");
    let txtEmail = document.querySelector("#txtRegisterEmail");
    let txtPassword = document.querySelector("#txtRegisterPassword");
    let txtConfirmPassword = document.querySelector("#txtRegisterConfirmPassword");

// OBJECT    
    let user = {
        name: txtName.value,
        email: txtEmail.value,
        password: txtPassword.value,
        confirmPassword: txtConfirmPassword.value,
    };

//  typeof user; 
//  console.log("Botton Register is clicked.", user.name);

    if(!user.email) {
        return alert("Email is required.");
    } else if(!user.name) {
        return alert("Name is required.");
    } else if(!user.password || !user.confirmPassword) {
        return alert("Password is required.");
    } else if(user.password != user.confirmPassword) {
        return alert("Password does not match.");
    }

// LOCAL STORAGE
    localStorage.setItem("user", JSON.stringify(user));
}

btnRegister.onclick = () => {
    registerUser();
};
