document.querySelector("#submit").addEventListener("click", display);
function display(){
  if (validateForm()) {
      document.querySelector("#there").textContent = "Thank you for contacting us. We will get back to you as soon as possible";
  }
  else{
    document.querySelector("#there").textContent = "Please edit your responses and try again";
  }
}

function validateForm() {
  var fname =   document.forms["ContactForm"]["fname"].value;
  if (fname == "") {
   alert("Please Enter your First Name");
   return false;
  }
  var lname = document.forms["ContactForm"]["lname"].value;
  if (lname == "") {
    alert("Please Enter your Last Name");
    return false;
  }
  var email = document.forms["ContactForm"]["email"].value;
  if (email == "") {
    alert("Please Enter your Email");
    return false;
  }
  return ValidEmail()
    var subject = document.forms["ContactForm"]["subject"].value;
  if (subject == "") {
    alert("Please Enter A Query");
    return false;
  }
  else{
    return true;
  }
} 

function ValidEmail{
   var email = document.forms["ContactForm"]["email"].value;
  if (email.includes(" ") || email.includes(",") || email.includes("-") || email.includes("_") || (!email.includes(".com") && !email.includes("@"))){
        alert("Please Enter A Valid Email Address");
    return false;
  }
  else{
    return true;
  }
}
