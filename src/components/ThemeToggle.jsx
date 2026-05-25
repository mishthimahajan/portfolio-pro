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

top-6

right-6

md:right-8

z-50

bg-slate-900/80

backdrop-blur-lg

p-3

rounded-full

border

border-cyan-500

shadow-lg">

{

dark?

"🌙":

"☀️"

}

</button>

)

}