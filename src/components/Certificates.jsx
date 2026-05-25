// export default function Certificates(){

// const certs=[

// {

// title:

// "ET AI Hackathon – The Economic Times",

// img:"/et-ai.png",

// org:"The Economic Times",

// link:

// "https://www.linkedin.com/posts/mishthi-mahajan_ai-hackathon-theeconomictimes-share-7461551294047240193-1dyf/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPA-BwBGCy0u8Hw4sKwD4hbsCniulaUfK0"

// },

// {

// title:

// "Full Stack Development Internship",

// img:"/nayoda.png",

// org:"Nayoda",

// link:

// "https://www.linkedin.com/posts/mishthi-mahajan_fullstackdeveloper-internshipjourney-topperformer-ugcPost-7450742585423491074-qLDF/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPA-BwBGCy0u8Hw4sKwD4hbsCniulaUfK0"

// },

// {

// title:

// "Open Source Contributor",

// img:"/oscg.png",

// org:"OSCG",

// link:

// "https://www.linkedin.com/posts/mishthi-mahajan_proud-to-be-a-part-of-open-source-connect-share-7447655917195706368-XivI/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPA-BwBGCy0u8Hw4sKwD4hbsCniulaUfK0"

// },

// {

// title:

// "Machine Learning Deep Dive: Business Applications and Coding Walkthroughs",

// img:"/365datascience.png",

// org:"365 Data Science",

// link:

// "https://learn.365datascience.com/c/a4568dbe91/"

// }

// ]

// return(

// <section

// id="certificates"

// className="

// min-h-screen

// py-24

// px-10"

// >

// <h1 className="

// text-5xl

// text-center

// mb-16

// font-bold">

// Certificates

// </h1>

// <div className="

// grid

// md:grid-cols-2

// lg:grid-cols-4

// gap-10">

// {

// certs.map(

// (cert,index)=>

// <div

// key={index}

// className="

// bg-gray-900

// rounded-3xl

// overflow-hidden

// hover:scale-105

// duration-300

// shadow-xl"

// >

// <img

// src={cert.img}

// alt={cert.title}

// className="

// w-full

// h-64

// object-cover"

// />

// <div className="p-6">

// <h2 className="

// text-lg

// font-bold">

// {cert.title}

// </h2>

// <p className="

// mt-3

// text-cyan-400">

// {cert.org}

// </p>

// <a

// href={cert.link}

// target="_blank"

// rel="noopener noreferrer"

// className="

// inline-block

// mt-5

// bg-cyan-500

// px-5

// py-3

// rounded-xl"

// >

// View Certificate

// </a>

// </div>

// </div>

// )

// }

// </div>

// </section>

// )

// }

export default function Certificates(){

const certs=[

{

title:

"ET AI Hackathon – The Economic Times",

img:"/et-ai.png",

org:"The Economic Times",

link:

"https://www.linkedin.com/posts/mishthi-mahajan_ai-hackathon-theeconomictimes-share-7461551294047240193-1dyf/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPA-BwBGCy0u8Hw4sKwD4hbsCniulaUfK0"

},

{

title:

"Full Stack Development Internship",

img:"/nayoda.png",

org:"Nayoda",

link:

"https://www.linkedin.com/posts/mishthi-mahajan_fullstackdeveloper-internshipjourney-topperformer-ugcPost-7450742585423491074-qLDF/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPA-BwBGCy0u8Hw4sKwD4hbsCniulaUfK0"

},

{

title:

"Open Source Contributor",

img:"/oscg.png",

org:"OSCG",

link:

"https://www.linkedin.com/posts/mishthi-mahajan_proud-to-be-a-part-of-open-source-connect-share-7447655917195706368-XivI/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPA-BwBGCy0u8Hw4sKwD4hbsCniulaUfK0"

},

{

title:

"Machine Learning Deep Dive: Business Applications and Coding Walkthroughs",

img:"/365datascience.png",

org:"365 Data Science",

link:

"https://learn.365datascience.com/c/a4568dbe91/"

}

]

return(

<section

id="certificates"

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

Certificates

</h1>

<div className="

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-4

gap-8">

{

certs.map(

(cert,index)=>

<div

key={index}

className="

bg-gray-900

rounded-3xl

overflow-hidden

shadow-xl

hover:scale-105

hover:shadow-cyan-500/20

duration-300"

>

<img

src={cert.img}

alt={cert.title}

className="

w-full

h-52
md:h-64

object-cover"

/>

<div className="p-6">

<h2 className="

text-lg

font-bold

leading-relaxed">

{cert.title}

</h2>

<p className="

mt-3

text-cyan-400">

{cert.org}

</p>

<a

href={cert.link}

target="_blank"

rel="noopener noreferrer"

className="

block

text-center

mt-5

bg-cyan-500

px-5

py-3

rounded-xl

hover:bg-cyan-600

duration-300"

>

View Certificate

</a>

</div>

</div>

)

}

</div>

</section>

)

}