import { useState } from "react";

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const certs = [
    {
      title: "ET AI Hackathon – The Economic Times",
      img: "/et-ai.png",
      org: "The Economic Times",
      link:
        "https://www.linkedin.com/posts/mishthi-mahajan_ai-hackathon-theeconomictimes-share-7461551294047240193-1dyf/?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Full Stack Development Internship",
      img: "/nayoda.png",
      org: "Nayoda",
      link:
        "https://www.linkedin.com/posts/mishthi-mahajan_fullstackdeveloper-internshipjourney-topperformer-ugcPost-7450742585423491074-qLDF/",
    },
    {
      title: "Open Source Contributor",
      img: "/oscg.png",
      org: "OSCG",
      link:
        "https://www.linkedin.com/posts/mishthi-mahajan_proud-to-be-a-part-of-open-source-connect-share-7447655917195706368-XivI/",
    },
    {
      title:
        "Machine Learning Deep Dive: Business Applications and Coding Walkthroughs",
      img: "/365datascience.png",
      org: "365 Data Science",
      link:
        "https://learn.365datascience.com/c/a4568dbe91/",
    },
  ];

  const filteredCerts = certs.filter((cert) =>
    cert.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section
        id="certificates"
        className="
        min-h-screen
        py-20
        px-6
        md:px-10
      "
      >
        <h1
          className="
          text-4xl
          md:text-5xl
          font-bold
          text-center
          mb-6
        "
        >
          Certificates
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Total Certifications: {certs.length}
        </p>

        <input
          type="text"
          placeholder="Search certificates..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          block
          mx-auto
          w-full
          md:w-96
          bg-gray-900
          border
          border-cyan-500
          rounded-xl
          p-3
          mb-12
          outline-none
          "
        />

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
        "
        >
          {filteredCerts.map((cert, index) => (
            <div
              key={index}
              className="
              bg-gray-900
              rounded-3xl
              overflow-hidden
              shadow-xl
              hover:scale-105
              hover:shadow-cyan-500/20
              duration-300
              "
            >
              <img
                src={cert.img}
                alt={cert.title}
                onClick={() => setSelected(index)}
                className="
                w-full
                h-52
                md:h-64
                object-cover
                cursor-pointer
                "
              />

              <div className="p-6">
                <span
                  className="
                  bg-cyan-500
                  text-black
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  font-semibold
                  "
                >
                  Verified
                </span>

                <h2
                  className="
                  text-lg
                  font-bold
                  mt-4
                  leading-relaxed
                  "
                >
                  {cert.title}
                </h2>

                <p
                  className="
                  mt-3
                  text-cyan-400
                  "
                >
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
                  duration-300
                  "
                >
                  View Certificate
                </a>

                <a
                  href={cert.img}
                  download
                  className="
                  block
                  text-center
                  mt-3
                  border
                  border-cyan-500
                  px-5
                  py-3
                  rounded-xl
                  hover:bg-cyan-500
                  duration-300
                  "
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selected !== null && (
        <div
          className="
          fixed
          inset-0
          bg-black/90
          flex
          items-center
          justify-center
          z-50
          p-4
          "
        >
          <button
            onClick={() => setSelected(null)}
            className="
            absolute
            top-5
            right-5
            text-4xl
            text-white
            "
          >
            ✕
          </button>

          <button
            onClick={() =>
              setSelected(
                selected === 0
                  ? filteredCerts.length - 1
                  : selected - 1
              )
            }
            className="
            text-white
            text-5xl
            px-5
            "
          >
            ◀
          </button>

          <img
            src={filteredCerts[selected].img}
            alt=""
            className="
            max-w-[90%]
            max-h-[85vh]
            rounded-xl
            shadow-2xl
            "
          />

          <button
            onClick={() =>
              setSelected(
                selected === filteredCerts.length - 1
                  ? 0
                  : selected + 1
              )
            }
            className="
            text-white
            text-5xl
            px-5
            "
          >
            ▶
          </button>
        </div>
      )}
    </>
  );
}
