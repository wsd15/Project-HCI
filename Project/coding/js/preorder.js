
function fsubmit()
{
    if(validateUsername() == false)
    {
        return false;
    }

    if(validateEmail() == false)
    {
        return false;
    }

    if(validatePassword() == false)
    {
        return false;
    }

    if(validateConfPassword() == false)
    {
        return false;
    }

    if(validateAddress() == false)
    {
        return false;
    }

    if(validatecopy() == false)
    {
        return false;
    }

    if(validategame() == false)
    {
        return false;
    }

    if(validateterm() == false)
    {
        return false;
    }
    return true;
}



function validateterm()
{
    var term = document.forms["form"]["term"].checked;
    if(term == false)
    {
        alert("You need to check the term box");
        return false;
    }
    return true;
}

function validategame()
{
    var game= document.forms["form"]["game"].value;
    if(game == "")
    {
        alert("Choose a type of game");
        return false;
    }
    return true;
}

function validatecopy()
{
    var copy = document.forms["form"]["copy"].value;
    if(copy == "")
    {
        alert("Please fill how many copy you want");
        return false;
    }
    var n = parseInt(copy);
    if(n <=0 )
    {
        alert("Atleast one copy to preorder");
        return false;       
    }
    return true;
}

function validateAddress()
{
    var address = document.forms["form"]["address"].value;
    if(address == null)
    {
        alert("Fill your address please");
        return false;
    }

    if(!address.startsWith("Jln. "))
    {
        alert("Address start with Jln. ");
        return false;
    }

    return true;
}

function validateConfPassword()
{
    var confpassword = document.forms["form"]["confpassword"].value;
    if(confpassword == "")
    {
        alert("input your password again in confirm password");
        return false;
    }
    if(confpassword != document.forms["form"]["password"].value)
    {
        alert("please input password");
        return false;
    }
    return true
}

function validatePassword()
{
    var password = document.forms["form"]["password"].value;
    if(password == "")
    {
        alert("please input password");
        return false;
    }
}



function validateEmail()
{
    var email = document.forms["form"]["email"].value;
    if(email == "")
    {
        alert("please fill your email");
        return false;
    }
    if(!email.includes("@binus.ac.id"))
    {
        alert("Email need to have '@binus.ac.id' ");
        return false;       
    }
    return true;  
}

function validateUsername()
{
    var username = document.forms["form"]["username"].value;
    if(username == null)
    {
        alert("fill your username");
        return false;
    }
    if(username.length <= 4)
    {
        alert("Username need to be atleast 5 character");
        return false;
    }
    return true;
}