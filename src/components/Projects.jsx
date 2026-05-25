import { useState } from "react"

export default function Projects() {

const projects=[

{

name:"AutoPM AI",

type:"AI",

img:"/autopm.png",

desc:

"AI powered project management assistant built during ET-AI Hackathon. Supports task automation, smart insights and workflow management.",

live:

"https://autopm-ai-five.vercel.app/",

github:

"https://github.com/mishthimahajan/autopm-ai"

},

{

name:"FoodLink",

type:"MERN",

img:"/foodlink.png",

desc:

"Food donation and distribution platform connecting donors and receivers with secure authentication and backend integration.",

live:

"https://food-link-five.vercel.app",

github:

"https://github.com/mishthimahajan/FoodLink"

},

{

name:"Skill Exchange Platform",

type:"MERN",

img:"/skillexchange.png",

desc:

"Neighbourhood Skill Exchange Platform where users can share, learn and exchange skills with nearby people using MERN stack.",

live:

"https://skill-exchange-lac.vercel.app/",

github:

"https://github.com/mishthimahajan/SkillExchange"

}

]

const [filter,setFilter]=
useState("All")

return(

<section

id="projects"

className="

min-h-screen

py-20

px-6
md:px-10"

>

<h1 className="

text-4xl
md:text-5xl

font-bold

text-center

mb-12">

Projects

</h1>

<div className="

flex

flex-wrap

justify-center

gap-5

mb-10">

<button

onClick={()=>setFilter("All")}

className="

bg-cyan-500

px-5

py-2

rounded-xl

hover:scale-105

duration-300"

>

All

</button>

<button

onClick={()=>setFilter("AI")}

className="

bg-gray-800

px-5

py-2

rounded-xl

hover:scale-105

duration-300"

>

AI

</button>

<button

onClick={()=>setFilter("MERN")}

className="

bg-gray-800

px-5

py-2

rounded-xl

hover:scale-105

duration-300"

>

MERN

</button>

</div>

<div className="

grid

grid-cols-1

md:grid-cols-2

lg:grid-cols-3

gap-10"

>

{

projects

.filter(

p=>

filter==="All"

||

p.type===filter

)

.map(

(project,index)=>

<div

key={index}

className="

bg-gray-900

rounded-3xl

overflow-hidden

hover:scale-105

duration-300

shadow-lg"

>

<img

src={project.img}

alt={project.name}

className="

w-full

h-56
md:h-72

object-cover"

/>

<div className="p-8">

<h2 className="

text-2xl
md:text-3xl

font-bold">

{project.name}

</h2>

<p className="

mt-4

text-gray-300">

{project.desc}

</p>

<div className="

flex

flex-col
sm:flex-row

gap-4

mt-6">

<a

href={project.live}

target="_blank"

rel="noopener noreferrer"

className="

bg-cyan-500

px-5

py-3

rounded-xl

text-center"

>

Live Demo

</a>

<a

href={project.github}

target="_blank"

rel="noopener noreferrer"

className="

border

border-cyan-400

px-5

py-3

rounded-xl

text-center"

>

GitHub

</a>

</div>

</div>

</div>

)

}

</div>

</section>

)

}