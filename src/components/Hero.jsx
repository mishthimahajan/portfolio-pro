// import { motion } from "framer-motion"

// export default function Hero(){

// return(

// <section

// className="

// min-h-screen
// flex
// items-center
// justify-center

// px-10"

// >

// <div className="

// grid
// lg:grid-cols-2

// gap-20">

// <div>

// <motion.h1

// initial={{

// x:-100,

// opacity:0

// }}

// animate={{

// x:0,

// opacity:1

// }}

// transition={{

// duration:1

// }}

// className="

// text-7xl

// font-bold"

// >

// Hi,

// I'm

// <span className="text-cyan-400">

//  Mishthi Mahajan

// </span>

// </motion.h1>

// <p className="

// mt-8

// text-2xl

// text-gray-300">

// Software Developer

// |

// MERN + AI Applications

// |

// Open Source Contributor

// </p>

// <div className="

// flex

// gap-5

// mt-10">

// <a

// href="/resume.pdf"

// download

// className="

// bg-cyan-500

// px-8

// py-4

// rounded-2xl">

// Resume

// </a>

// <a

// href="#contact"

// className="

// border

// border-cyan-400

// px-8

// py-4

// rounded-2xl">

// Contact

// </a>

// </div>

// <div className="

// grid

// grid-cols-3

// gap-10

// mt-16">

// <div>

// <h1 className="text-4xl">

// 250+

// </h1>

// <p>

// LeetCode

// </p>

// </div>

// <div>

// <h1 className="text-4xl">

// 3+

// </h1>

// <p>

// Projects

// </p>

// </div>

// <div>

// <h1 className="text-4xl">

// 4+

// </h1>

// <p>

// Certificates

// </p>

// </div>

// </div>

// </div>

// <div className="relative">

// <img

// src="/profile.png"

// alt="profile"

// className="

// w-96

// rounded-full

// border-4

// border-cyan-400"

// >

// </img>

// <div

// className="

// absolute

// bottom-5

// left-0

// bg-gray-900

// p-4

// rounded-xl">

// 🏆 LeetCode Knight

// </div>

// </div>

// </div>

// </section>

// )

// }

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation";

export default function Hero(){

return(

<section

className="

min-h-screen

flex

items-center

justify-center

px-6
md:px-10

pt-24

bg-linear-to-br

from-slate-950

via-blue-950

to-black

text-white"

>

<div className="

grid

grid-cols-1
lg:grid-cols-2

gap-16

items-center

w-full

max-w-7xl">

<div>

<motion.h1

initial={{x:-100,opacity:0}}

animate={{x:0,opacity:1}}

transition={{duration:1}}

className="

text-5xl
md:text-7xl

font-extrabold

leading-tight"

>

Hi,

I'm

<span className="

text-cyan-400">

Mishthi

</span>

<br/>

<span className="

bg-linear-to-r

from-cyan-400

to-blue-500

bg-clip-text

text-transparent">

Mahajan

</span>

</motion.h1>

<p className="

mt-8

text-lg
md:text-2xl

text-gray-300">

Software Developer |

MERN + AI Applications |

Open Source Contributor

</p>

<div className="

flex

flex-col
sm:flex-row

gap-5

mt-10">

<a

href="/resume.pdf"

download

className="

bg-cyan-500

hover:bg-cyan-600

px-8

py-4

rounded-2xl

font-semibold

shadow-lg

duration-300

text-center">

Resume

</a>

<a

href="#contact"

className="

border

border-cyan-400

hover:bg-cyan-500/20

px-8

py-4

rounded-2xl

duration-300

text-center">

Contact

</a>

</div>

<div className="

grid

grid-cols-3

gap-8

mt-14">

<div className="

bg-white/10

backdrop-blur-lg

p-5

rounded-2xl">

<h1 className="

text-3xl

font-bold

text-cyan-400">

500+

</h1>

<p className="text-gray-300">

LeetCode

</p>

</div>

<div className="

bg-white/10

backdrop-blur-lg

p-5

rounded-2xl">

<h1 className="

text-3xl

font-bold

text-cyan-400">

3+

</h1>

<p className="text-gray-300">

Projects

</p>

</div>

<div className="

bg-white/10

backdrop-blur-lg

p-5

rounded-2xl">

<h1 className="

text-3xl

font-bold

text-cyan-400">

4+

</h1>

<p className="text-gray-300">

Certificates

</p>

</div>

</div>

</div>

<div className="

flex

justify-center">

<div className="relative">

<div className="

absolute

inset-0

bg-cyan-500

blur-3xl

opacity-20

rounded-full">

</div>

<img

src="/profile.png"

alt="profile"

className="

relative

w-72
md:w-96

rounded-full

border-4

border-cyan-400

shadow-2xl"

/>

<div className="

absolute

-bottom-4

left-1/2

-transform

-translate-x-1/2

bg-slate-900

px-6

py-3

rounded-2xl

shadow-xl">


</div>

</div>

</div>

</div>

</section>

)

}