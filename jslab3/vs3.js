// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var vehicaltype = document.contactForm.vehicaltype.value;
    var city = document.contactForm.city.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var insurance = [];
    var checkboxes = document.getElementsByName("insurance[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate hobbies array with selected values
            insurance.push(checkboxes[i].value);
        }
    }
    
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = cityErr = insuranceErr = vehicalErr= true;
    
    // 1Validate name
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
    
    // 2Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // 3Validate mobile number
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
    
    // 4Validate city
    if(city == "Select") {
        printError("cityErr", "Please select your city");
    } else {
        printError("cityErr", "");
        cityErr = false;
    }
    
    // 5Validate insurance type
    if(insurance == "") {
        printError("insuranceErr", "Please select Type of insurance");
    } else {
        printError("insuranceErr", "");
        insuranceErr = false;
    }
    // 6Validate vehicaltype
    if(vehicaltype == "Select") {
        printError("vehicalErr", "Please select Type of Vehical");
    } else {
        printError("vehicalErr", "");
        vehicalErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || cityErr || insuranceErr || vehicalErr) == true) {
       return false;
    } 
    else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Type of vehical " + vehicaltype + "\n" +
                          "City " + city + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" ;
        if(insurance.length) {
            dataPreview += "Insurance: " + insurance.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};
