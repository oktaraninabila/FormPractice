const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password')

form.addParticipant('submit' e=>{
    e.preventDefault();
    var firstName = fname.value.trim();
    var lastName  = lname.value.trim();
    var emailValue =  email.value.trim();
    var passwordValue =  = password.value.trim();

    if(firstName === ''){
        errorFunction(fname, 'first name cant be empty');
    }
    else{
        successFunction(fname)
    }
})

function errorFuction(req, message){

}