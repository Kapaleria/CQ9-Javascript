//capture user input(name, email and location)

//const validateForm =>(){
//}

// function validateForm(){
    
//         if(
//             email=="" || name=="" || location==""
//         ){
//                 console.log("fields are empty")
//         }
//         else{
//                 console.log("fields have content")
//         }
// }

function register(event){
//querying an element
var name =document.querySelector("#name").value
var email =document.querySelector("#email").value
var location =document.querySelector("#location").value

if(name=="" || email=="" || location ==""){
    alert("All these fields are required")
}

else{
    //display results
r_name.innerHTML=name;
r_email.innerHTML=email;
r_location.innerHTML=location;
event.preventDefault()
}

}

//DEMOSTRATION
//IF ...ELSE statement

var number = 10; //assignment operator

if(number==1){ //checks if the number is equal to 1
    console.log("Number is equal to 1")
}

else{
    console.log("Number is not equal to 1")
}

//operation of an elevator
//if ...else if.....else statements
 var level = 1;

 if (level > 0){
    console.log("Level greater than 0")
 }

 else if(level==1){
    console.log ('level 1')
 }

 else if(level==1){
    console.log('level 1 repeated')
 }

 else{
    console.log('we are at level 1000')
 }
