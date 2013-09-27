
$(document).ready(function () {
        
    
    $('#existingUser').click(function () {
        $('#signInDiv').css('display', 'block');
        $('#signUpDiv').css('display', 'none');
        $('#newUser').css('display', 'block');
        $('#existingUser').css('display', 'none');
    });

    $('#newUser').click(function () {
        $('#signUpDiv').css('display','block');
        $('#signInDiv').css('display', 'none');
        $('#newUser').css('display', 'none');
        $('#existingUser').css('display', 'block');
    });
   //Header animation    
   setInterval(function () {
       //$("li:nth(1)").animate({ "left": "+=1000px" }, "slow").delay(1000).animate({ "left": "-=1000px" }, "slow").delay(1000);
       if ($('#lblError').css('display') != 'none') {
           //$('#lblError').css('display', 'none');
           $('#lblError').hide('slow');
       }
       if ($('#lblSucess').css('display') != 'none') {
           $('#lblSucess').hide('slow');
       }
       //Left Nav bar animation
       $("#leftNavBar").show(3000);
       $("#leftNavBar").fadeOut(3000);
       //Right Nav bar animation
       $("#rightNavBar").show(3000);
       $("#rightNavBar").fadeOut(3000);
      
   }, 3000);
   
    //Validations
    //Email Validation
    
   $('#signUpEmail').change(function () {
        var validEmail = /[a-z0-9!#$%&'*+/=?^{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum|in)\b/
        if (!validEmail.test(this.value)) {
            $('#signUpEmail').css('background-color', 'white');
            $('#signUpEmail').val('');
            $('#signUpEmail').focus();
        }
        else {
            if ($('#signUpEmail').val().length > 0)
                $('#signUpEmail').css('background-color', 'orange');
            else
                $('#signUpEmail').css('background-color', 'white');
           
        }
    });

    //Contact Validation
   $('#signUpContact').change(function () {
        //Numbers(48 - 57) , Num Lock Numbers (96-105) , Del(46), Backspace (8) , Lef arrow (37) , Right arrow (39) , + (187) , Num Lock + (107)
       if ((isNaN($('#signUpContact').val()) || $('#signUpContact').val().length > 13)) {
           $('#signUpContact').val('');
           $('#signUpContact').focus();
           return false;
       }
       //if (!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || (event.keyCode == 107 || event.keyCode == 187 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39))) {
       //     event.preventDefault();
       //     return false;
       // }
       // else {
       //     if ($('#signUpContact').val().length > 0 && ((event.keyCode == 187 || (event.keyCode == 107)))) {
       //         event.preventDefault();
       //         return false;
       //     }
       // }
       
        
    });

    //Validation for Confirm Password
   $('#signUpConfirmPassword').change(function () {
       var password = $('#signUpPassword').val()
       var confirmpassword = $('#signUpConfirmPassword').val();
        if (password != confirmpassword) {
            $('#signUpConfirmPassword').css('background-color', 'white');
            $('#signUpConfirmPassword').val('');
            $('#signUpConfirmPassword').focus();
        }
        else {
            $('#confirmPasswordDiv').append("<span class=\"glyphicon glyphicon-ok\"></span>");
            if ($('#signUpPassword').val().length > 0)
                $('#signUpPassword').css('background-color', 'orange');
            else
                $('#signUpPassword').css('background-color', 'white');
            if ($('#signUpConfirmPassword').val().length > 0)
                $('#signUpConfirmPassword').css('background-color', 'orange');
            else
                $('#ContentPlaceHolder1_signUpConfirmPassword').css('background-color', 'white');
        }
    });

   $('#signUpPassword').change(function () {
       if (($('#signUpConfirmPassword').val().length > 0) && ($('#signUpPassword').val() != $('#signUpConfirmPassword').val())) {
           $('#signUpConfirmPassword').css('background-color', 'white');
           $('#signUpConfirmPassword').val('');
           $('#signUpConfirmPassword').focus();
        }
       if ($('#signUpPassword').val().length > 0)
           $('#signUpPassword').css('background-color', 'orange');
        else
           $('#signUpPassword').css('background-color', 'white');
    });
    
    //Change background color of username
    $('#signUpUserName').change(function () {
        if ($('#signUpUserName').val().length > 0)
            $('#signUpUserName').css('background-color', 'orange');
        else
            $('#signUpUserName').css('background-color', 'white');
    });

    //Change background color of contact
    $('#signUpContact').change(function () {
        if ($('#signUpContact').val().length > 0)
            $('#signUpContact').css('background-color', 'orange');
        else
            $('#signUpContact').css('background-color', 'white');
    });

  
});

//Required field validation
function ValidateUserRecord() {
   
    var username, userpassword, confirmuserpassword, useremail, usercontact;
    username = userpassword = confirmuserpassword = useremail = usercontact = null;
    username = $('#signUpUserName').val();
    userpassword = $('#signUpPassword').val();
    confirmuserpassword = $('#signUpConfirmPassword').val();
    useremail = $('#signUpEmail').val();
    usercontact = $('#signUpContact').val();
    if ((username == null || username.length == 0)){
        $('#signUpUserName').focus();
        return false;
    }
    else if((userpassword == null || userpassword.length == 0))
    {
        $('#signUpPassword').focus();
        return false;
    }
    else if((confirmuserpassword == null || confirmuserpassword.length == 0))
    {
        $('#signUpConfirmPassword').focus();
        return false;
    }
    else if((useremail == null || useremail.length == 0))
    {
        $('#signUpEmail').focus();
        return false;
    }
    else if ((isNaN(usercontact) || usercontact == null || usercontact.length == 0)) {
        $('#signUpContact').val('');
        $('#signUpContact').focus();
        return false;
    }
   
}

function ValidateForSignIn() {
  
    var username, userpassword;
    username = userpassword = null;
    username = $('#signInUserName').val();
    userpassword = $('#signInPassword').val();
    
    if ((username == null || username.length == 0)) {
        $('#signInUserName').focus();
        return false;
    }
    else if ((userpassword == null || userpassword.length == 0)) {
        $('#signInPassword').focus();
        return false;
    }
    
}
