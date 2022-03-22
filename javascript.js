function passwordMatch(){
    if(document.getElementById("password").value!==document.getElementById("confirmPassword").value){
        password.setCustomValidity("Passwords do not match");
        confirmPassword.setCustomValidity("Passwords do not match");
        document.getElementById("validationMessage").textContent = "*Passwords do not match";
    }else{
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
        document.getElementById("validationMessage").innerHTML = "";
    }
}
