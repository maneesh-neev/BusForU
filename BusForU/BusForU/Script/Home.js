
(document).ready(function () {

    //Header animation    
    setInterval(function () {
        
        if ($('#lblError').css('display') != 'none') {
            //$('#lblError').css('display', 'none');
            $('#lblError').hide('slow');
        }
        if ($('#lblSucess').css('display') != 'none') {
            $('#lblSucess').hide('slow');
        }
    
    }, 3000);

    //Validations
    //Email Validation

    

    //Change background color of post
    $('#postTextBox').change(function () {
        if ($('#postTextBox').val().length > 0)
            $('#postTextBox').css('background-color', 'orange');
        else
            $('#postTextBox').css('background-color', 'white');
    });

    
});
//Require field validation
function ValidatePost() {

    var post;
    post = null;
    post = $('#postTextBox').val();
   

    if ((post == null || post.length == 0)) {
        $('#postTextBox').focus();
        return false;
    }
   

}

function signOut() {
    window.location.href = "Login.aspx?Signout=true";
}