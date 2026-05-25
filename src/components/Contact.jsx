import emailjs from "emailjs-com"

export default function Contact(){

function send(e){

e.preventDefault()

emailjs.sendForm(

"SERVICE_ID",

"TEMPLATE_ID",

e.target,

"PUBLIC_KEY"

)

alert("Message Sent")

}

return(

<section

id="contact"

className="py-24 px-10">

<h1 className="

text-5xl

text-center

mb-12">

Contact

</h1>

<form

onSubmit={send}

className="

max-w-xl

mx-auto

flex

flex-col

gap-5">

<input

name="name"

placeholder="Name"

className="

p-4

rounded-xl

text-white"

/>

<input

name="email"

placeholder="Email"

className="

p-4

rounded-xl

text-white"

/>

<textarea

name="message"

placeholder="Message"

className="

p-4

rounded-xl

text-white"

/>

<button

className="

bg-cyan-500

p-4

rounded-xl">

Send

</button>

</form>

</section>

)

}