import {

FaGithub,

FaLinkedin,

FaInstagram

}

from "react-icons/fa"

export default function Footer(){

return(

<footer

className="

bg-gray-900

py-10">

<h1 className="

text-center

text-3xl">

Mishthi Mahajan

</h1>

<div className="

flex

justify-center

gap-8

mt-5">

<FaGithub/>

<FaLinkedin/>

<FaInstagram/>

</div>

<p className="

text-center

mt-5">

© 2026 All Rights Reserved

</p>

</footer>

)

}