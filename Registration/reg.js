//capture user input(name, email and location)

//referring to an element
var userName = document.getElementById("#name").value
var userEmail = document.getElementById("#email").value
var userLocation = document.getElementById("#location").value


function register(event){
//querying an element
var name =document.querySelector("#name").value
var email =document.querySelector("#email").value
var location =document.querySelector("#location").value

//display results
r_name.innerHTML=name;
r_email.innerHTML=email;
r_location.innerHTML=location;

event.preventDefault()

}