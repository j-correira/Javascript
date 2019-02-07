/*
J Week3 Simple Form Validation
------------------------------
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

//first name input check
if(fNameInput.length == 0)
       {
        firstNameError.innerHTML = "*";
        firstNameError.setAttribute("class", "error");
        firstNameLabel.setAttribute("class", "error");
       }
       else
       {
        firstNameError.innerHTML = "";
        firstNameError.setAttribute("class", "ok");
        firstNameLabel.setAttribute("class", "ok");
       }

//last name input check
if(lNameInput.length == 0)
       {
        lastNameError.innerHTML = "*";
        lastNameError.setAttribute("class", "error");
        lastNameLabel.setAttribute("class", "error");
       }
       else
       {
        lastNameError.innerHTML = "";
        lastNameError.setAttribute("class", "ok");
        lastNameLabel.setAttribute("class", "ok");
       }

//email input check
if(emailInput.length == 0)
       {
        emailError.innerHTML = "*";
        emailError.setAttribute("class", "error");
        emailLabel.setAttribute("class", "error");
       }
       else
       {
        emailError.innerHTML = "";
        emailError.setAttribute("class", "ok");
        emailLabel.setAttribute("class", "ok");
       }
    
//email input check
if(emailConfirmInput.length == 0)
       {
              confirmEmailError.innerHTML = "*";
              confirmEmailError.setAttribute("class", "error");
              confirmEmailLabel.setAttribute("class", "error");
       }
       else
       {
              confirmEmailError.innerHTML = "";
              confirmEmailError.setAttribute("class", "ok");
              confirmEmailLabel.setAttribute("class", "ok");
       }

//confirm email input check
if(confirmEmailInput === emailInput)
       {
        confirmEmailError.innerHTML = "";
        confirmEmailError.setAttribute("class", "ok");
        confirmEmailLabel.setAttribute("class", "ok");
       }
       else
       {
        confirmEmailError.innerHTML = "* Emails don't match!";
        confirmEmailError.setAttribute("class", "error");
        confirmEmailLabel.setAttribute("class", "error");
       }

//phone confirm input check
if(phoneInput.length == 0)
       {
        phoneNumError.innerHTML = "*";
        phoneNumError.setAttribute("class", "error");
        phoneNumLabel.setAttribute("class", "error");
       }
       else
       {
        phoneNumError.innerHTML = "";
        phoneNumError.setAttribute("class", "ok");
        phoneNumLabel.setAttribute("class", "ok");
       }

//if all forms have been filled and email = email confirmation
if(fNameInput.length != 0 && lNameInput.length != 0 && emailInput.length != 0 && confirmEmailInput.length != 0 && phoneInput.length != 0)
{
    //alert("form will now disappear");
    document.getElementById("form").style.display = "none";
    document.getElementById("confirmation").style.display = "block";

    var confirm = document.getElementById("confirmation");
    
    confirm.innerHTML += document.getElementById('first-name').value + " " + document.getElementById('last-name').value + "<br>" + document.getElementById('email').value + "<br>" + document.getElementById('phone').value;

}

/* test hiding form
if(firstNameInput.value === "hide")
{
    alert("working??????????");
    document.getElementById("form").style.display = "none";
}
*/
}


