
class User{

    emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z0-9]+$/;
    passwordPattern = /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/
    namePattern = /^[\w\s]{8,15}$/
    
    constructor(name, address, email, password, confirmPassword, phone){
        this.name = name;
        this.address = address;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.phone = phone;
        console.log(this.passwordPattern.test(this.password));
    }
    
    ErrorTxt = {
        fillName: "Atleast 8 to 15 characters required",
        fillAddress: "Kindly fill address field",
        fillEmail: "Kindly fill email field",
        fillPassword: "Kindly fill password field",
        fillField: "Kindly fill this field",
        validEmail: "Enter a valid email address",
        passFormat: "Passwords must contain atleast 1 uppercase letter, 1 lowercase letter, 1 number and 1 symbol",
        matchPassword: "Password and confirm password should be the same",
    }
    
    verifyName(){
        if(this.name != "") return true;
        document.getElementById("nameA").innerHTML = this.ErrorTxt.fillName
        return false;
    }
    
    verifyAddress(){
        if(this.address != "") return true; 
        document.getElementById("addressA").innerHTML = this.ErrorTxt.fillAddress
        return false;
    }
    
    verifyEmail(){
        if(this.email != "" && this.emailPattern.test(this.email)) return true;
        
        if (this.email == ""){
            document.getElementById("emailA").innerHTML = this.ErrorTxt.fillEmail;
        }else if(!this.emailPattern.test(this.email)){
            document.getElementById("emailA").innerHTML = this.ErrorTxt.validEmail;
        }
        return false;
    }
    
    verifyPassword(){
        if(this.password != "" && this.passwordPattern.test(this.email) && this.confirmPassword != "" && this.confirmPassword == this.password){
            return true;
        }
        if (this.password == ""){
            document.getElementById("passwordA").innerHTML = this.ErrorTxt.fillPassword;
        } else if(!this.passwordPattern.test(this.password)){
            document.getElementById("passwordA").innerHTML = this.ErrorTxt.passFormat;
        }
        console.log(this.confirmPassword == "");
        if(this.confirmPassword == ""){
            document.getElementById("confirm-passwordA").innerHTML = this.ErrorTxt.fillField;
        }else if(this.confirmPassword != this.password){
            document.getElementById("confirm-passwordA").innerHTML = this.ErrorTxt.matchPassword;
        }
        return false
    }
    
    verifyPhone() {
        if(this.phone != "") return true;
        document.getElementById("phoneA").innerHTML = this.ErrorTxt.fillField;
        return false;
    }
    
}

function formValidate(){
    const nameS = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const phone = document.getElementById('phone').value;
    let nUser = new User(nameS, address, email, password, confirmPassword, phone);
    let nameVerified = nUser.verifyName();
    let addressVerified = nUser.verifyAddress();
    let emailVerified = nUser.verifyEmail();
    let passwordVerified = nUser.verifyPassword();
    let phoneVerified = nUser.verifyPhone();
    if(nameVerified && addressVerified && emailVerified && passwordVerified && phoneVerified){
        document.getElementById("successTxt").innerHTML = "Regex validation success";
    }
}


