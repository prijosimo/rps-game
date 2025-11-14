function check() {

    if(age>=18){
    if(name=="Sam"){
        document.getElementById("placeholder").innerHTML="You are barred!";
    }else{
        document.getElementById("placeholder").innerHTML="Welcome, "+name+"!";
    }
    }else if(age<18){
        document.getElementById("placeholder").innerHTML="Go away, "+name+"!";
    }else{
        alert("Invalid input!");
    }
}