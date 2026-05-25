// import {motion}
// from "framer-motion"

// export default function Navbar(){

// return(

// <motion.nav

// initial={{y:-100}}

// animate={{y:0}}

// className="

// fixed

// top-0

// w-full

// bg-black/30

// backdrop-blur-lg

// z-50"

// >

// <div className="

// flex

// justify-between

// px-10

// py-5">

// <h1 className="

// text-cyan-400

// text-3xl">

// MM

// </h1>

// <div className="flex gap-10">

// <a href="#skills">

// Skills

// </a>

// <a href="#projects">

// Projects

// </a>
// <a href="#certificates">

// Certificates

// </a>
// </div>

// </div>

// </motion.nav>

// )

// }

import { useState } from "react"
import { FaBars } from "react-icons/fa"

export default function Navbar(){

const[open,setOpen]=
useState(false)

return(

<nav className="

fixed

top-0

w-full

bg-black/50

backdrop-blur-lg

z-50">

<div className="

flex

justify-between

items-center

px-6

py-5">

<h1 className="

text-cyan-400

text-2xl">

MM

</h1>

<div className="hidden md:flex gap-8 mr-20">

<a href="#skills"className="

hover:text-cyan-400

duration-300">

Skills

</a>

<a href="#projects"className="

hover:text-cyan-400

duration-300">

Projects

</a>

<a href="#certificates"className="

hover:text-white

duration-300">

Certificates

</a>

<a href="#contact"className="

hover:text-white

duration-300">

Contact

</a>

</div>

<button

className="md:hidden"

onClick={()=>setOpen(!open)}

>

<FaBars/>

</button>

</div>

{

open &&

<div className="

md:hidden

flex

flex-col

gap-4

px-6

pb-5">

<a href="#skills">

Skills

</a>

<a href="#projects">

Projects

</a>

<a href="#certificates">

Certificates

</a>

<a href="#contact">

Contact

</a>

</div>

}

</nav>

)

}

