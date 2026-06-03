import CountUp from "react-countup";

export default function Stats(){

const stats=[

{
title:"DSA Problems",
value:500
},

{
title:"Projects",
value:3
},

{
title:"Certificates",
value:4
},

{
title:"Internships",
value:2
}

];

return(

<section className="py-20">

<div className="grid md:grid-cols-4 gap-8">

{
stats.map((s,index)=>

<div
key={index}
className="
bg-gray-900
p-8
rounded-3xl
text-center"
>

<h1 className="text-5xl text-cyan-400">

<CountUp
end={s.value}
duration={3}
/>

+

</h1>

<p>{s.title}</p>

</div>

)
}

</div>

</section>

)

}
