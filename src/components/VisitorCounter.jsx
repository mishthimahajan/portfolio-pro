import {useEffect,useState}
from "react"

export default function VisitorCounter(){

const[count,setCount]=
useState(0)

useEffect(()=>{

let c=

localStorage.getItem(
"visit"
)

c=c?

parseInt(c)+1:1

localStorage.setItem(

"visit",c

)

setCount(c)

},[])

return(

<div className="p-10">

Visitors:

{count}

</div>

)

}