import Particles from "@tsparticles/react"

import {loadSlim}
from "@tsparticles/slim"

import {useCallback}
from "react"

export default function(){

const init=

useCallback(

async(engine)=>{

await loadSlim(engine)

},

[]

)

return(

<Particles

init={init}

options={

{

fullScreen:{

enable:true,

zIndex:-1

},

particles:{

number:{
value:80
},

move:{
enable:true
},

links:{
enable:true
}

}

}

}

/>

)

}