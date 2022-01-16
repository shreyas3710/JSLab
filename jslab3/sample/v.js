function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
 
function validateForm() {
    var name = document.infoForm.name.value;
    var address = document.infoForm.address.value;
    var vehicletype = document.infoForm.vehicletype.value;
    var city = document.infoForm.city.value;
    var email = document.infoForm.email.value;
    var aadhar = document.infoForm.aadhar.value;
    var mobile = document.infoForm.mobile.value;
    var insurance = [];
    var checkboxes = document.getElementsByName("insurance[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            insurance.push(checkboxes[i].value);
        }
    }
    
    var nameError = emailError = mobileError = cityError = insuranceError = vehicleError= addressError= aadharError true;

    if(name == "") {
        printError("nameError", "Please enter your name");
    } 
	else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameError", "Please enter a valid name");
        } else {
            printError("nameError", "");
            nameError = false;
        }
    }
    if(address == "") {
        printError("addressError", "Please enter your proper address");
    } else {
        var regex = /^[\#+0-9a-zA-Z\s]+$/;                
        if(regex.test(address) === false) {
            printError("addressError", "Please enter a valid proper address");
        } else{
            printError("addressError", "");
            addressError = false;
        }
    }

    if(email == "") {
        printError("emailError", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailError", "Please enter a valid email address");
        } else{
            printError("emailError", "");
            emailError = false;
        }
    }
    
    if(mobile == "") {
        printError("mobileError", "Please enter your mobile number");
    } else {
        var regex = /^[0-9]\d{10}$/;
        if(regex.test(mobile) === false) {
            printError("mobileError", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileError", "");
            mobileError = false;
        }
    }

    if(aadhar == "") {
        printError("aadharError", "Please enter valid 12 digit aadhar id");
    } else {
        var regex = /^[0-9]\d{11}$/;
        if(regex.test(aadhar) === false) {
            printError("aadharError", "Please enter a valid 12 digit aadhar number");
        } else{
            printError("aadharError", "");
            aadharError = false;
        }
    }
    
    if(city == "Select") {
        printError("cityError", "Please select your city");
    } else {
        printError("cityError", "");
        cityError = false;
    }
    
    if(insurance == "") {
        printError("insuranceError", "Please select Type of insurance");
    } else {
        printError("insuranceError", "");
        insuranceError = false;
    }
  
    if(vehicletype == "Select") {
        printError("vehicleError", "Please select Type of Vehicle");
    } else {
        printError("vehicleError", "");
        vehicleError = false;
    }
    
    if((nameError || addressError|| emailError || mobileError ||  aadharError || cityError || insuranceError || vehicleError) == true) {
       return false;
    } else {

        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Address: " + address + "\n" +
                          "Type of vehicle " + vehicletype + "\n" +
                          "City " + city + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Aadhar Number:"  + aadhar + "\n";
        if(insurance.length) {
            dataPreview += "Insurance: " + insurance.join(", ");
        }
        alert(dataPreview);
    }
};
