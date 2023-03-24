const btn = document.querySelectorAll(".btn");
const input = document.getElementById("input");
let string =""

Array.from(btn).forEach((btn)=>{
  
    btn.addEventListener("click", (e)=>{
        console.log(e.target.innerText)
        if(e.target.innerText =="="){
            string =eval(string);
            input.value =string;
        } else if(e.target.innerText =="C") {
                string =" ";
                input.value =" "
        }
        else{
            string=string+e.target.innerText;
            input.value =string
        }
        
    })
})