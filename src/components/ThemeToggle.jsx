import {useState,useEffect}
from "react"

export default function ThemeToggle(){

const[dark,setDark]=
useState(true)

useEffect(()=>{

if(dark){

document.body.style.background=
"#030712"

}

else{

document.body.style.background=
"white"

document.body.style.color=
"black"

}

},[dark])

return(

<button

onClick={()=>

setDark(!dark)

}

className="

fixed

top-5

right-5

z-50">

{

dark?

"🌙":

"☀️"

}

</button>

)

}