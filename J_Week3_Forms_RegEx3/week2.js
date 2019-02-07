
/*
J Week3 RegEx Form Validation
-----------------------------

(X) First name and last name fields cannot include special characters (excluding -) Also, the names should not include underscores.

(X) The error message should state what went wrong. Here are examples of what the error messages could say:
       Example: Please input a name.
       Example: Your name must not include special characters.

(X) The email address fields are also valid email addresses.
(X) The phone number field also includes a phone number in the following format: xxxxxxxxxx.

(X) Also, instead of simply writing the data to the confirmation, construct an object to hold the information from the form and write the object's information onto the confirmation.
*/


function submitData()
{
       var fNameInput = document.getElementById("first-name").value;
       var firstNameLabel = document.querySelector('#firstname label'); 
       var firstNameError = document.querySelector('#firstname span');

       var lNameInput = document.getElementById("last-name").value;
       var lastNameLabel = document.querySelector('#lastname label'); 
       var lastNameError = document.querySelector('#lastname span');


       var emailConfirmInput = document.getElementById("confirmEmailInput").value;
       var confirmEmailError = document.querySelector('#confirmEmail span');
       var confirmEmailLabel = document.querySelector('#confirmEmail label');
       
       var emailInput = document.getElementById("emailInput").value;
       var emailError = document.querySelector('#email span');
       var emailLabel = document.querySelector('#email label');

       var phoneInput = document.getElementById("phone").value;
       var phoneNumLabel = document.querySelector('#phoneNum label');
       var phoneNumError = document.querySelector('#phoneNum span');

//check for empty inputs
if (fNameInput.length == 0 || lNameInput.length == 0 || emailInput.length == 0 || emailConfirmInput.length == 0 || phoneInput.length == 0)
{
       alert("Oops, forgot to enter something");
       console.log("missing input");

       if (fNameInput.length == 0)
       {
              firstNameError.innerHTML = "* <br> First Name is required";
              firstNameError.setAttribute("class", "error");
              firstNameLabel.setAttribute("class", "error");  
       }
       if (lNameInput.length == 0)
       {
              lastNameError.innerHTML = "* <br> Last Name is required";
              lastNameError.setAttribute("class", "error");
              lastNameLabel.setAttribute("class", "error");  
       }
       if (emailInput.length == 0)
       {
              emailError.innerHTML = "* <br> Email is required";
              emailError.setAttribute("class", "error");
              emailLabel.setAttribute("class", "error");
       }
       if (emailConfirmInput.length == 0)
       {
              confirmEmailError.innerHTML = "* <br> Email is required";
              confirmEmailError.setAttribute("class", "error");
              confirmEmailLabel.setAttribute("class", "error");
       }
       if (phoneInput.length == 0)
       {
              phoneNumError.innerHTML = "* <br> Phone Number is required";
              phoneNumError.setAttribute("class", "error");
              phoneNumLabel.setAttribute("class", "error");
       }
}
else
{

//object to hold validated user inputs
var person = {}

//first name regex validation
       var fNameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

       if (fNameRegex.test(fNameInput))
       {
              console.log("first name input: '" + fNameInput + "' = valid");
              firstNameError.innerHTML = "*";
              firstNameError.setAttribute("class", "success");
              firstNameLabel.setAttribute("class", "success");

              var fNameValid = fNameInput;
       }
       else  
       {
              console.log("first name input: '" + fNameInput + "' = invalid");        
              firstNameError.innerHTML = "* <br> no special characters (ex: !@#$%)";
              firstNameError.setAttribute("class", "error");
              firstNameLabel.setAttribute("class", "error");
       } 

//last name regex validation
       var lNameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;


       if (lNameRegex.test(lNameInput))
       {
              console.log("last name input: '" + lNameInput + "' = valid");
              lastNameError.innerHTML = "*";
              lastNameError.setAttribute("class", "success");
              lastNameLabel.setAttribute("class", "success");

              var lNameValid = lNameInput;
       }
       else 
       {
              console.log("last name input: '" + lNameInput + "' = invalid");      
              lastNameError.innerHTML = "* <br> no special characters (ex: !@#_$%)";
              lastNameError.setAttribute("class", "error");
              lastNameLabel.setAttribute("class", "error");
       }

//checks emails = eachother       
if(emailInput === emailConfirmInput)
{
       console.log("'" + emailInput + "'" + " === " + "'" + emailConfirmInput + "'");

//email regex validation
       var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

       if (emailRegex.test(emailInput))
       {
              console.log("email input: '" + emailInput + "' = valid");
              emailError.innerHTML = "*";
              emailError.setAttribute("class", "success");
              emailLabel.setAttribute("class", "success");          
       }
       else 
       {
              console.log("email input: '" + emailInput + "' = invalid");
              emailError.innerHTML = "* <br> Incorrect format (ex: 007@gmail.com)";
              emailError.setAttribute("class", "error");
              emailLabel.setAttribute("class", "error");
       }
     
//confirm email regex validation
       var emailConfirmRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

       if (emailConfirmRegex.test(emailConfirmInput))
       {
              console.log("confirm email input: '" + emailConfirmInput + "' = valid");
              confirmEmailError.innerHTML = "*";
              confirmEmailError.setAttribute("class", "success");
              confirmEmailLabel.setAttribute("class", "success");

              var emailValid = emailConfirmInput;
       }
       else 
       {
              console.log("confirm email input: '" + emailConfirmInput + "' = invalid");

              confirmEmailError.innerHTML = "* <br> Incorrect format (ex: 007@gmail.com)";

              confirmEmailError.setAttribute("class", "error");
              confirmEmailLabel.setAttribute("class", "error");
       }

}
//if emails dont match
else
{      
       var emailError = document.querySelector('#email span');
       var emailLabel = document.querySelector('#email label');
       var confirmEmailError = document.querySelector('#confirmEmail span');
       var confirmEmailLabel = document.querySelector('#confirmEmail label');

       console.log("'" + emailInput + "'" + " != " + "'" + emailConfirmInput + "'");
       
       emailError.innerHTML = "* Emails don't match";
       emailError.setAttribute("class", "error");
       emailLabel.setAttribute("class", "error");

       confirmEmailError.innerHTML = "* Emails don't match";
       confirmEmailError.setAttribute("class", "error");
       confirmEmailLabel.setAttribute("class", "error");

}


//phone# regex validation
       var phoneRegex = /^\d{10}$/;
       var phoneNumError = document.querySelector('#phoneNum span');
       var phoneNumLabel = document.querySelector('#phoneNum label');

       if (phoneRegex.test(phoneInput))
       {
              console.log("phone num input: '" + phoneInput + "' = valid");    
              
              phoneNumError.innerHTML = "*";
              phoneNumError.setAttribute("class", "success");
              phoneNumLabel.setAttribute("class", "success");

              var phoneValid = phoneInput;
       }
       else 
       {
              console.log("phone num input: '" + phoneInput + "' = invalid");   
              phoneNumError.innerHTML = "* <br> Incorrect format (ex: 1231231234) ";
              phoneNumError.setAttribute("class", "error");
              phoneNumLabel.setAttribute("class", "error");
       }

       //checks for valid inputs, adds them to object
       if (fNameValid != null && lNameValid != null && emailValid != null && phoneValid != null)
       {
       person.firstName = fNameValid;
       person.lastName = lNameValid;
       person.email = emailValid;
       person.phone = phoneValid;

       //hides form, shows confirmation
       document.getElementById("form").style.display = "none";
       document.getElementById("confirmation").style.display = "block";

       var confirm = document.getElementById("confirmation");

       confirm.innerHTML += person.firstName + " " + person.lastName + "<br>" + person.email + "<br>" + person.phone;
       }//end check valid inputs

       console.log("");
       console.log(person);

}//end if first name input null 

}//end submitData


