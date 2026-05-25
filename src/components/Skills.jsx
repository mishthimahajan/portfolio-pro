export default function Skills(){

const skills=[

{
name:"React",
level:"90%"
},

{
name:"NodeJS",
level:"85%"
},

{
name:"MongoDB",
level:"80%"
},

{
name:"C++",
level:"95%"
},

{
name:"DSA",
level:"92%"
},

{
name:"Tailwind",
level:"88%"
}

]

return(

<section

id="skills"

className="

min-h-screen

py-20

px-20">

<h1 className="

text-5xl

text-center

mb-16">

Skills

</h1>

<div className="

grid

md:grid-cols-2

gap-10">

{

skills.map(

(skill,index)=>

<div

key={index}

className="

bg-gray-900

p-8

rounded-2xl">

<div className="

flex

justify-between">

<h2>

{skill.name}

</h2>

<p>

{skill.level}

</p>

</div>

<div className="

w-full

bg-gray-700

h-3

rounded-full

mt-4">

<div

style={{

width:skill.level

}}

className="

bg-cyan-400

h-3

rounded-full">

</div>

</div>

</div>

)

}

</div>

</section>

)

}