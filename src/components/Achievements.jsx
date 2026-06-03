export default function Achievements() {

const data = [

"ET AI Hackathon Participant",
"500+ LeetCode Problems",
"LeetCode Knight",
"Open Source Contributor",
"Top Performer Full Stack Intern"

];

return (

<section className="py-20 px-6 md:px-10">

<h1 className="text-5xl text-center mb-16 font-bold">
Achievements
</h1>

<div className="grid md:grid-cols-3 gap-8">

{
data.map((item,index)=>

<div
key={index}
className="
bg-gray-900
p-8
rounded-3xl
hover:scale-105
duration-300
"
>

🏆 {item}

</div>

)
}

</div>

</section>

);

}