export default function Timeline() {

const events=[

{
year:"2026",
title:"Full Stack Internship - Nayoda"
},

{
year:"2026",
title:"ET AI Hackathon"
},

{
year:"2025",
title:"Open Source Contributor"
},

{
year:"2025",
title:"Full Stack Internship - Codec Technologies"
}

]

return(

<section className="py-20 px-6">

<h1 className="text-center text-5xl mb-16">
Experience Timeline
</h1>

<div className="max-w-3xl mx-auto">

{
events.map((e,index)=>

<div
key={index}
className="
border-l-4
border-cyan-400
pl-6
pb-12"
>

<h2 className="text-cyan-400">
{e.year}
</h2>

<p className="text-xl">
{e.title}
</p>

</div>

)
}

</div>

</section>

)

<<<<<<< HEAD
}
=======
}
>>>>>>> 055f828 (Added portfolio sections and UI improvements)
