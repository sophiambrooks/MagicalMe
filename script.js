function insertAnswer(){
  var password=document.getElementById("insertAnswer");
  var passwordText=password.value.toUpperCase();
  if (passwordText=="ITALY"){
    return true;
  }
  alert("That is incorrect");
  return false;
}