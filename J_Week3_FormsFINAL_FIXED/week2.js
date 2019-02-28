/*
J Week3 Simple Form Validation
------------------------------
*/

function submitData() {
       var fNameInput = document.getElementById("first-name").value;
       var firstNameLabel = document.querySelector('#firstname label');
       var firstNameError = document.querySelector('#firstname span');

       var lNameInput = document.getElementById("last-name").value;
       var lastNameLabel = document.querySelector('#lastname label');
       var lastNameError = document.querySelector('#lastname span');

       var confirmEmailInput = document.getElementById("confirmEmailInput").value;
       var confirmEmailError = document.querySelector('#confirmEmail span');
       var confirmEmailLabel = document.querySelector('#confirmEmail label');

       var emailInput = document.getElementById("emailInput").value;
       var emailError = document.querySelector('#email span');
       var emailLabel = document.querySelector('#email label');

       var phoneInput = document.getElementById("phone").value;
       var phoneNumLabel = document.querySelector('#phoneNum label');
       var phoneNumError = document.querySelector('#phoneNum span');

       //first name input check
       if (fNameInput.length == 0) {
              console.log("first name input: '" + fNameInput + "' = invalid");
              firstNameError.innerHTML = "*";
              firstNameError.setAttribute("class", "error");
              firstNameLabel.setAttribute("class", "error");

              alert("Oops, forgot to enter First Name");
              console.log(" ");
       }
       else {
              console.log("first name input: '" + fNameInput + "' = valid");
              firstNameError.innerHTML = "";
              firstNameError.setAttribute("class", "ok");
              firstNameLabel.setAttribute("class", "ok");
       }

       //last name input check
       if (lNameInput.length == 0) {
              console.log("last name input: '" + lNameInput + "' = invalid");
              lastNameError.innerHTML = "*";
              lastNameError.setAttribute("class", "error");
              lastNameLabel.setAttribute("class", "error");

              alert("Oops, forgot to enter Last Name");
              console.log(" ");
       }
       else {
              console.log("last name input: '" + lNameInput + "' = valid");
              lastNameError.innerHTML = "";
              lastNameError.setAttribute("class", "ok");
              lastNameLabel.setAttribute("class", "ok");
       }

       //confirm email input check
       if (emailInput === confirmEmailInput) {
              console.log("'" + emailInput + "'" + " === " + "'" + confirmEmailInput + "'");
              confirmEmailError.innerHTML = "";
              confirmEmailError.setAttribute("class", "ok");
              confirmEmailLabel.setAttribute("class", "ok");
       }
       else {
              console.log("'" + emailInput + "'" + " != " + "'" + confirmEmailInput + "'");
              confirmEmailError.innerHTML = "* Emails don't match!";
              confirmEmailError.setAttribute("class", "error");
              confirmEmailLabel.setAttribute("class", "error");

              alert("Oops, Emails don't match");
              console.log(" ");
       }

       //email input check
       if (emailInput.length == 0) {
              console.log("email input: '" + emailInput + "' = invalid");
              emailError.innerHTML = "*";
              emailError.setAttribute("class", "error");
              emailLabel.setAttribute("class", "error");

              alert("Oops, forgot to enter Email");
              console.log(" ");
       }
       else {
              console.log("email input: '" + emailInput + "' = valid");
              emailError.innerHTML = "";
              emailError.setAttribute("class", "ok");
              emailLabel.setAttribute("class", "ok");
       }

       //confirm email input check
       if (confirmEmailInput.length == 0) {
              console.log("confirm email input: '" + emailInput + "' = invalid");
              confirmEmailError.innerHTML = "*";
              confirmEmailError.setAttribute("class", "error");
              confirmEmailLabel.setAttribute("class", "error");

              alert("Oops, forgot to enter Confirm Email");
              console.log(" ");
       }
       else {
              console.log("confirm email input: '" + emailInput + "' = valid");
              confirmEmailError.innerHTML = "";
              confirmEmailError.setAttribute("class", "ok");
              confirmEmailLabel.setAttribute("class", "ok");
       }



       //phone confirm input check
       if (phoneInput.length == 0) {
              console.log("phone number input: '" + phoneInput + "' = invalid");
              phoneNumError.innerHTML = "*";
              phoneNumError.setAttribute("class", "error");
              phoneNumLabel.setAttribute("class", "error");

              alert("Oops, forgot to enter Phone Number");
              console.log(" ");
       }
       else {
              console.log("phone number input: '" + phoneInput + "' = valid");
              phoneNumError.innerHTML = "";
              phoneNumError.setAttribute("class", "ok");
              phoneNumLabel.setAttribute("class", "ok");
       }


       if (emailInput === confirmEmailInput)
       {

       

              //if all forms have been filled 
              if (fNameInput.length != 0 && lNameInput.length != 0 && emailInput.length != 0 && confirmEmailInput.length != 0 && phoneInput.length != 0)
              {
              //alert("form will now disappear");
              console.log("all inputs filled");

              document.getElementById("form").style.display = "none";
              document.getElementById("confirmation").style.display = "block";

              var confirm = document.getElementById("confirmation");

              confirm.innerHTML += document.getElementById('first-name').value + " " + document.getElementById('last-name').value + "<br>" + document.getElementById('emailInput').value + "<br>" + document.getElementById('phone').value;

              //blank console to seperate submissions
              console.log(" ");
              }
       }
       /*
       else {
              alert("Oops, forgot to enter something");
              console.log(" ");

       }
       */

       /* test hiding form
       if(firstNameInput.value === "hide")
       {
           alert("working??????????");
           document.getElementById("form").style.display = "none";
       }
       */
}


