import { motion } from "framer-motion"

export default function Hero(){

return(

<section

className="

min-h-screen
flex
items-center
justify-center

px-10"

>

<div className="

grid
lg:grid-cols-2

gap-20">

<div>

<motion.h1

initial={{

x:-100,

opacity:0

}}

animate={{

x:0,

opacity:1

}}

transition={{

duration:1

}}

className="

text-7xl

font-bold"

>

Hi,

I'm

<span className="text-cyan-400">

 Mishthi Mahajan

</span>

</motion.h1>

<p className="

mt-8

text-2xl

text-gray-300">

Software Developer

|

MERN + AI Applications

|

Open Source Contributor

</p>

<div className="

flex

gap-5

mt-10">

<a

href="/resume.pdf"

download

className="

bg-cyan-500

px-8

py-4

rounded-2xl">

Resume

</a>

<a

href="#contact"

className="

border

border-cyan-400

px-8

py-4

rounded-2xl">

Contact

</a>

</div>

<div className="

grid

grid-cols-3

gap-10

mt-16">

<div>

<h1 className="text-4xl">

250+

</h1>

<p>

LeetCode

</p>

</div>

<div>

<h1 className="text-4xl">

3+

</h1>

<p>

Projects

</p>

</div>

<div>

<h1 className="text-4xl">

4+

</h1>

<p>

Certificates

</p>

</div>

</div>

</div>

<div className="relative">

<img

src="/profile.png"

alt="profile"

className="

w-96

rounded-full

border-4

border-cyan-400"

>

</img>

<div

className="

absolute

bottom-5

left-0

bg-gray-900

p-4

rounded-xl">

🏆 LeetCode Knight

</div>

</div>

</div>

</section>

)

}