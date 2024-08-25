function formValidation()
{
    var uid = document.getElementById('userid').value;
    var uemail = document.getElementById('uemail').value;
    var upass = document.getElementById('upass').value;
    
    if(userid_validation(uid,5,12))
    {
       if(ValidateEmail(uemail))
        {

          if(alphaNumeric(upass))
         {
          return false;
        }
    }
    
}
}

function userid_validation(uid,minlen,maxlen)
    {
var uid_len = uid.length;
if (uid_len==0 || uid_len >=maxlen || uid < minlen)
{
    alert("user name should not be empty / length be between "+minlen+" to "+maxlen);
    uid.focus();
    return false;
}
return true;
}
function ValidateEmail(uemail)
{
    var mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.match(mailFormat))
    {
        return true;
    }
    else{
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}
function alphanumeric(upass)
{
    pass=/[a-z,A-Z,0-9]+$/;
    if(upass.match(pass))
    {
        return true;
    }
    else{
        alert("Enter valid email.")
    }
}