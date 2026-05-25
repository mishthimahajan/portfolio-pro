import axios from "axios"
import {useEffect,useState}
from "react"

export default function GithubStats(){

const[data,setData]=
useState({})

useEffect(()=>{

axios

.get(

"https://api.github.com/users/mishthimahajan"

)

.then(

res=>

setData(res.data)

)

},[])

return(

<section

className="

py-24

px-10"

>

<h1 className="

text-5xl

text-center

mb-12">

GitHub Stats

</h1>

<div className="

grid

md:grid-cols-3

gap-10">

<div className="

bg-gray-900

p-8

rounded-2xl">

<h2>

Repos

</h2>

<p className="text-3xl">

{data.public_repos}

</p>

</div>

<div className="

bg-gray-900

p-8

rounded-2xl">

<h2>

Followers

</h2>

<p className="text-3xl">

{data.followers}

</p>

</div>

<div className="

bg-gray-900

p-8

rounded-2xl">

<h2>

Following

</h2>

<p className="text-3xl">

{data.following}

</p>

</div>

</div>

</section>

)

}