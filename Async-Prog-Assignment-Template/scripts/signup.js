function myConst(n,c,m,p){
    this.name=n;
    this.contact=c;
    this.mail=m;
    this.pwd=p
}

document.querySelector("form").addEventListener("submit",myFun);
let my_Arr=JSON.parse(localStorage.getItem("key"))||[]
function myFun(){
    event.preventDefault()
    let name1=document.querySelector("#name").value;
    let cont=document.querySelector("#contact").value;
    let mail=document.querySelector("#mail").value;
    let pwd=document.querySelector("#pwd").value;
    let myConst1=new myConst(name1,cont,mail,pwd)
    my_Arr.push(myConst1)
    localStorage.setItem("key",JSON.stringify(my_Arr));
    document.querySelector("#name").value=null;
   document.querySelector("#contact").value=null;
   document.querySelector("#mail").value=null;
   document.querySelector("#pwd").value=null;
}