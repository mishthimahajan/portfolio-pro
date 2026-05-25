import {motion}
from "framer-motion"

export default function Navbar(){

return(

<motion.nav

initial={{y:-100}}

animate={{y:0}}

className="

fixed

top-0

w-full

bg-black/30

backdrop-blur-lg

z-50"

>

<div className="

flex

justify-between

px-10

py-5">

<h1 className="

text-cyan-400

text-3xl">

MM

</h1>

<div className="flex gap-10">

<a href="#skills">

Skills

</a>

<a href="#projects">

Projects

</a>
<a href="#certificates">

Certificates

</a>
</div>

</div>

</motion.nav>

)

}