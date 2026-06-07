import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaShareAlt,
  FaTimes,
} from "react-icons/fa";

export default function Socialbar() {
  const [open, setOpen] = useState(false);

  const socials = [
    {
      icon: <FaGithub size={22} />,
      link: "https://github.com/mishthimahajan",
    },
    {
      icon: <FaLinkedin size={22} />,
      link: "https://linkedin.com/in/Mishthi-mahajan",
    },
    {
      icon: <FaCode size={22} />,
      link: "https://leetcode.com/u/Mishthimahajan",
    },
  ];

  return (
    <div
      className="
      fixed
      left-6
      bottom-10
      z-50
      flex
      flex-col
      items-center
      gap-4
      "
    >
      <AnimatePresence>
        {open &&
          socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              initial={{
                opacity: 0,
                scale: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0,
                y: 20,
              }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              className="
              bg-gray-800
              p-4
              rounded-full
              shadow-lg
              hover:scale-125
              hover:text-cyan-400
              hover:shadow-cyan-500/50
              transition-all
              duration-300
              "
            >
              {social.icon}
            </motion.a>
          ))}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setOpen(!open)}
        className="
        w-16
        h-16
        rounded-full
        bg-cyan-500
        text-white
        shadow-lg
        flex
        items-center
        justify-center
        text-xl
        "
      >
        {open ? <FaTimes /> : <FaShareAlt />}
      </motion.button>
    </div>
  );
}