let text = document.getElementById("text");
let btn = document.getElementById("btn");

let lista = document.getElementById("lista");

let btndone= document.getElementById("btndone")
let btnall = document.getElementById("btnall")

let array = [


]




btn.addEventListener("click", function(e){
    e.preventDefault();
    
    
    if(text.value === ""){
        alert("Ingrese datos por favor");
    }else{
        let li = document.createElement("li");
        li.innerHTML=`${text.value} <input class="check" type="checkbox">`;
        lista.insertBefore(li, lista.childNodes[0]);
        
        array.push(`${text.value}`);
        
        localStorage.setItem('Tarea', JSON.stringify(array));
        text.value="";

        
    }


})

btndone.addEventListener("click", function(){

    let checks = Array.from(document.getElementsByClassName("check"))
    let li = document.querySelector("li")
    let infle = Array.from(document.getElementsByName("li"))
    console.log(li)
    console.log(infle)
    let lt = document.getElementById("lista")
    lt.removeChild(li)
    
    let i =0
    // console.log(checks)
    checks.forEach(done => {

        if(checks[i].checked === false){

            // console.log(checks[i])
            // li.innerHTML=`${text.value} <input class="check" type="checkbox">`;
            // lista.insertBefore(li, lista.childNodes[0]);
        }
        i+=1
    });

})


btnall.addEventListener("click", function(){
    let li = document.querySelector("li")

    let lt = document.getElementById("lista")
    lt.removeChild(li)
    
})