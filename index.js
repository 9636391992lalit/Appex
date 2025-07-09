let button=document.getElementById("button");
let a=0;
light=true
button.addEventListener("click",()=>
{   
     if(light==true)
     {
        document.body.style.backgroundColor="red";
        light=false;
     }
     else
     {
     document.body.style.backgroundColor="white";
        light=true;
     }
       
     }
)