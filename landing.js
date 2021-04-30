var visible = false;

document.addEventListener("DOMContentLoaded", function() {
  var iconItem = document.getElementById("icon_item");
  //id="icon_item" (Duolingo Icon on navbar) activates function
    //execute hideShowMenu when clientWidth <=700
  iconItem.addEventListener("click", function() {
    if (document.body.clientWidth <= 700) hideShowMenu();
  });
  
  var navbarMenuElement = document.getElementsByClassName("menu-text");

  for (i = 0; i < navbarMenuElement.length; i++) {
    navbarMenuElement[i].addEventListener("click", function() {
      if (document.body.clientWidth <= 700) {
        if (visible) {
//execute hideShowMenu when clientWidth <=700 and clicks on navbarMenuElement element
//if(visible) aka navbar was open close it after executing
          hideShowMenu();
        }
      };
    });
  }

  window.addEventListener("resize", function(event) {
    if (document.body.clientWidth > 700) {
      if (!visible) {
        hideShowMenu();
      }
    } else {
      if (visible) {
        hideShowMenu();
      }
    }
  });

});


function validateMyForm() {
  const form = document.getElementsByTagName('form')[0];
  const email = document.getElementById('mail');
  const error = document.querySelector('.error');
  const name = document.getElementById("name");
  const message = document.getElementById('msg');
  //Return the value property:
//https://www.w3schools.com/jsref/prop_text_value.asp
  var emailValue = email.value;
  var nameValue = name.value;
  var msgValue = message.value;

  //email
  //https://www.w3resource.com/javascript/form/email-validation.php
  //name is assumed min 2 if hieroglyphs
  //message is assumed min 10 for context
  var emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
  var nameOK = nameValue.length >= 2;
  var mssgOK = msgValue.length >= 10;

//all user input values match requirements 
  if (emailOK && nameOK && mssgOK) {
    if (document.getElementById('error_name')) {
      document.getElementById('error_name').style.display = "none";
    }
    alert("Message sent!")
    //clear previously entered content
    email.value = "";
    name.value = "";
    message.value = "";
  } else {
    var errorMessage = "";

    if (!nameOK) {
      errorMessage += " Name value error: min name length 2 characters. ";
    }

    if (!emailOK) {
      if (errorMessage.length > 0) errorMessage += "\n";
      errorMessage += " Email value error. Please enter a valid email. ";
    }

    if (!mssgOK) {
      if (errorMessage.length > 0) errorMessage += "<br>";
      errorMessage += " Message error: min message length 10 characters. ";
    }

    errorInfo(errorMessage);
  }

}
//display error using JavaScript 
//https://www.w3schools.com/js/js_popup.asp
//https://www.geeksforgeeks.org/how-to-display-error-without-alert-box-using-javascript/
function errorInfo(text) {
  var errorDiv = document.getElementById('error');
  var errorP = document.getElementById('error_name')

  if (errorP) {
    errorP.style.display = "block";
    errorP.innerHTML = text;
  } else {
    var newP = document.createElement('p');
    var g = errorDiv.appendChild(newP);
    g.innerHTML = text;
    g.id = 'error_name';
  }
}


function hideShowMenu() {
  var x = document.getElementsByClassName("menu-text");
  for (i = 0; i < x.length; i++) {
    if (!visible) {
      x[i].style.display = "block";
    } else {
      x[i].style.display = "none";
    }
  }
  visible = !visible;
}
