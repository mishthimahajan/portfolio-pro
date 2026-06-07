import {
  FaGithub,
  FaLinkedin,
  FaCode
} from "react-icons/fa";

export default function Socialbar() {
  return (
    <div
      className="
      fixed
      left-4
      top-1/2
      -translate-y-1/2
      flex
      flex-col
      gap-4
      z-50
      "
    >
      <a
        href="https://github.com/mishthimahajan"
        target="_blank"
        rel="noreferrer"
        className="
        bg-gray-800
        p-3
        rounded-full
        hover:scale-125
        hover:text-cyan-400
        transition-all
        duration-300
        "
      >
        <FaGithub size={24} />
      </a>

      <a
        href="https://linkedin.com/in/Mishthi-mahajan"
        target="_blank"
        rel="noreferrer"
        className="
        bg-gray-800
        p-3
        rounded-full
        hover:scale-125
        hover:text-cyan-400
        transition-all
        duration-300
        "
      >
        <FaLinkedin size={24} />
      </a>

      <a
        href="https://leetcode.com/u/Mishthimahajan"
        target="_blank"
        rel="noreferrer"
        className="
        bg-gray-800
        p-3
        rounded-full
        hover:scale-125
        hover:text-cyan-400
        transition-all
        duration-300
        "
      >
        <FaCode size={24} />
      </a>
    </div>
  );
}