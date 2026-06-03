import {
FaGithub,
FaLinkedin,
FaCode
} from "react-icons/fa";

export default function SocialBar(){

return(

<div
className="
fixed
left-5
top-1/2
-translate-y-1/2
hidden
lg:flex
flex-col
gap-5
z-50"
>

<a href="https://api.github.com/users/mishthimahajan">
<FaGithub size={28}/>
</a>

<a href="https://linkedin.com/in/MishthiMahajan">
<FaLinkedin size={28}/>
</a>

<a href="https://leetcode.com/u/Mishthimahajan">
<FaCode size={28}/>
</a>

</div>

)

}