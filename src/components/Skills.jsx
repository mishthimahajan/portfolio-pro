// export default function Skills(){

// const skills=[

// {
// name:"React",
// level:"90%"
// },

// {
// name:"NodeJS",
// level:"85%"
// },

// {
// name:"MongoDB",
// level:"80%"
// },

// {
// name:"C++",
// level:"95%"
// },

// {
// name:"DSA",
// level:"92%"
// },

// {
// name:"Tailwind",
// level:"88%"
// }

// ]

// return(

// <section

// id="skills"

// className="

// min-h-screen

// py-20

// px-20">

// <h1 className="

// text-5xl

// text-center

// mb-16">

// Skills

// </h1>

// <div className="

// grid

// md:grid-cols-2

// gap-10">

// {

// skills.map(

// (skill,index)=>

// <div

// key={index}

// className="

// bg-gray-900

// p-8

// rounded-2xl">

// <div className="

// flex

// justify-between">

// <h2>

// {skill.name}

// </h2>

// <p>

// {skill.level}

// </p>

// </div>

// <div className="

// w-full

// bg-gray-700

// h-3

// rounded-full

// mt-4">

// <div

// style={{

// width:skill.level

// }}

// className="

// bg-cyan-400

// h-3

// rounded-full">

// </div>

// </div>

// </div>

// )

// }

// </div>

// </section>

// )

// }
export default function Skills(){

const skills=[

{
name:"React JS",
level:"90%"
},

{
name:"Node JS",
level:"85%"
},

{
name:"MongoDB",
level:"82%"
},

{
name:"Express JS",
level:"80%"
},

{
name:"C++",
level:"80%"
},

{
name:"DSA",
level:"70%"
},

{
name:"Tailwind CSS",
level:"88%"
},

{
name:"JavaScript",
level:"85%"
},

{
name:"Git & GitHub",
level:"80%"
},

{
name:"Machine Learning",
level:"78%"
}

]

return(

<section

id="skills"

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

mb-16">

Skills

</h1>

<div className="

grid

grid-cols-1

md:grid-cols-2

gap-8">

{

skills.map(

(skill,index)=>

<div

key={index}

className="

bg-gray-900

p-6
md:p-8

rounded-2xl

shadow-lg

hover:scale-105

hover:shadow-cyan-500/20

duration-300"

>

<div className="

flex

justify-between

items-center">

<h2 className="

text-lg
md:text-xl

font-semibold">

{skill.name}

</h2>

<p className="text-cyan-400">

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

rounded-full

duration-700">

</div>

</div>

</div>

)

}

</div>

</section>

)

}