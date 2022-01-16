function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {

    var name = document.contactForm.name.value;
    var city = document.contactForm.city.value;
    var age =document.contactForm.age.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;

    var vehicaltype = document.contactForm.vehicaltype.value;
    var aadhar=document.contactForm.aadhar.value;

    var licensenumber = document.contactForm.lnumber.value;
    var year=document.contactForm.year.value
    var insurance = [];
    var checkboxes = document.getElementsByName("insurance[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            insurance.push(checkboxes[i].value);
        }
    }
    
    var nameErr =cityErr=ageErr= emailErr= mobileErr= vehicalErr=aadharErr= LNumberErr= yearErr= insuranceErr= true;
    
   
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } 
	else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    

    if(city == "Select") {
        printError("cityErr", "Please select your city");
    } else {
        printError("cityErr", "");
        cityErr = false;
    }

    if(age==""){
        printError("ageErr","Please enter your age");
    }
    if(isNaN(age)||age<18||age>60)
    { 
            printError("ageErr","");
            ageErr=false;
    }


    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[0-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    if(vehicaltype == "Select") {
        printError("vehicalErr", "Please select Type of Vehical");
    } else {
        printError("vehicalErr", "");
        vehicalErr = false;
    }

    if(aadhar == ""){
        printError("aadharErr","Please enter your Aadhar Number");
    }
    else{
        var regex = /^[0-9]\d{11}$/;
        if(regex.test(aadhar) === false) {
            printError("aadharErr", "Please enter a valid Aadhar number");
        }
        else{
            printError("aadharErr", "");
            aadharErr = false;
        }
    }
    



    if(insurance == "") {
        printError("insuranceErr", "Please select Type of insurance");
    } else {
        printError("insuranceErr", "");
        insuranceErr = false;
    }

 

    if(licensenumber == ""){
        printError("LNumberErr","Please enter your license number");
    }
    else{
        printError("LNumberErr", "");
        LNumberErr = false;

    }

    if(year == ""){
        printError("yearErr","Please enter the year");
    }
    else{
        printError("yearErr", "");
        yearErr = false;

    }
    

    if((nameErr || emailErr || mobileErr || cityErr || insuranceErr || vehicalErr|| LNumberErr||yearErr||ageErr||aadharErr ) == true) {
       return false;
    } else {
        var dataPreview = "You've entered the following details: \n" +
                          "Name: " + name + "\n" +
                          "Type of vehical " + vehicaltype + "\n" +
                          "City " + city + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" 
                          "Age: " + age + "\n" +
                          "Aadhar number: " + aadhar + "\n" +
                          "License number: " + licensenumber + "\n" +
                          "Year: " + year + "\n" ;
        if(insurance.length) {
            dataPreview += "Insurance: " + insurance.join(", ");
        }

        alert(dataPreview);
    }
};
