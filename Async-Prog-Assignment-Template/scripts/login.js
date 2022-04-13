var Display=JSON.parse(localStorage.getItem("key"));
document.querySelector("form").addEventListener("submit",login);
console.log(Display)
flag=false;
function login(){
    event.preventDefault();
    var enteredMail=document.querySelector("#mail1").value;
    var enteredPass=document.querySelector("#pwd1").value;
    for(i=0;i<Display.length;i++){
        if(enteredMail===Display[i].mail&&enteredPass===Display[i].pwd){
            window.location.href="./index.html"
            flag=true;
            break;

        }
    }
    if(flag===true){
        alert("Login Successful")
    }
    else{
        alert("Invalid Credential!")
    }
}