//validate name on blur.
function nameBlurHandler() {
  var enteredName = document.getElementById("name").value;
  //valid name must be a string and not less than 3 characters.
  var validName = /^[a-z]+$/i.test(enteredName) && enteredName.length >= 3;

  if (!validName && !document.getElementById("p1")) {
    var p1 = document.createElement("p");
    p1.innerText = "- Please enter a valid name!";
    p1.setAttribute("id", "p1");
    document.getElementById("name").style.borderColor = "rgb(255, 75, 75)";
    document.getElementById("div-name").appendChild(p1);
  } else if (validName && document.getElementById("p1")) {
    document.getElementById("p1").remove();
    document.getElementById("name").style.borderColor = "";
  }
}

//Validate email on blur.
function emailBlurHandler() {
  var enteredEmail = document.getElementById("email").value;
  /*
  valid email must begin with letter then any char or digit
  then '@' symbol then any char or digit and finally end with '.com')
  */
  var validEmail =
    /^[a-zA-Z][a-zA-Z0-9]+@[a-zA-Z0-9]+.com$/.test(enteredEmail) &&
    enteredEmail.length !== 0;

  if (!validEmail && !document.getElementById("p2")) {
    var p2 = document.createElement("p");
    p2.innerText = "- Please enter a valid email (ex: abc@123.com)";
    p2.setAttribute("id", "p2");
    document.getElementById("email").style.borderColor = "rgb(255, 75, 75)";
    document.getElementById("div-email").appendChild(p2);
  } else if (validEmail && document.getElementById("p2")) {
    document.getElementById("p2").remove();
    document.getElementById("email").style.borderColor = "";
  }
}

//Validate phone number on blur.
function phoneBlurHandler() {
  var enteredPhone = document.getElementById("phone").value;
  //valid phone must has length of 11 digits and start with 010 or 011 or 012
  var validPhone = /^01[0-2]\d{8}$/.test(enteredPhone);
  if (!validPhone && !document.getElementById("p3")) {
    var p3 = document.createElement("p");
    p3.innerHTML =
      "- Please enter a valid number that has 11 digits and starts with (010 or 011 or 012).";
    p3.setAttribute("id", "p3");
    document.getElementById("phone").style.borderColor = "rgb(255, 75, 75)";
    document.getElementById("div-phone").appendChild(p3);
  } else if (validPhone && document.getElementById("p3")) {
    document.getElementById("p3").remove();
    document.getElementById("phone").style.borderColor = "";
  }
}

//Validate form on submit
function validateForm(event) {
  event.preventDefault();
  nameBlurHandler();
  phoneBlurHandler();
  emailBlurHandler();
}
