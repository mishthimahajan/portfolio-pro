


import { useState } from "react"
import emailjs from "emailjs-com"

export default function Contact(){

const [loading,setLoading]=
useState(false)

const [success,setSuccess]=
useState("")

function send(e){

e.preventDefault()

setLoading(true)

emailjs.sendForm(

"service_768tsud",

"template_832gmyt",

e.target,

"GmRCVmrYzwQALUffT"

)

.then(()=>{

setSuccess(
"Message Sent Successfully ✅"
)

e.target.reset()

setLoading(false)

})

.catch(()=>{

setSuccess(
"Failed to send message ❌"
)

setLoading(false)

})

}

return(

<section

id="contact"

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

Contact Me

</h1>

<div className="

grid

grid-cols-1
lg:grid-cols-2

gap-12

items-center">

<div className="space-y-8">

<div className="

bg-gray-900

p-6

rounded-2xl">

<h2 className="

text-xl

font-bold">

📧 Email

</h2>

<p className="mt-2">

mishthimahajan0@gmail.com

</p>

</div>

<div className="

bg-gray-900

p-6

rounded-2xl">

<h2 className="

text-xl

font-bold">

💻 GitHub

</h2>

<a

href="https://github.com/mishthimahajan"

target="_blank"

rel="noreferrer"

className="text-cyan-400">

GitHub Profile

</a>

</div>

<div className="

bg-gray-900

p-6

rounded-2xl">

<h2 className="

text-xl

font-bold">

🔗 LinkedIn

</h2>

<a

href="https://linkedin.com/in/mishthi-mahajan"

target="_blank"

rel="noreferrer"

className="text-cyan-400">

LinkedIn Profile

</a>

</div>

</div>

<form

onSubmit={send}

className="

bg-gray-900

p-8

rounded-3xl

shadow-xl

flex

flex-col

gap-5">

<input

name="name"

required

placeholder="Your Name"

className="

p-4

rounded-xl

bg-gray-800

outline-none"

/>

<input

name="email"

required

type="email"

placeholder="Your Email"

className="

p-4

rounded-xl

bg-gray-800

outline-none"

/>

<textarea

name="message"

required

rows="5"

placeholder="Your Message"

className="

p-4

rounded-xl

bg-gray-800

outline-none"

/>

<button

disabled={loading}

className="

bg-cyan-500

p-4

rounded-xl

hover:bg-cyan-600

duration-300"

>

{

loading?

"Sending...":

"Send Message"

}

</button>

{

success &&

<p className="text-center">

{success}

</p>

}

</form>

</div>

</section>

)

}
