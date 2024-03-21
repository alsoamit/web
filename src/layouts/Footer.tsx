import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const socials = (
  <>
    {/* <a
      href={`https://www.linkedin.com/in/alsoamit/`}
      className="p-2 rounded-full bg-white/10"
    >
      <Linkedin className="text-xl text-white" />
    </a>
    <a
      href={`https://www.github.com/alsoamit/`}
      className="p-2 rounded-full bg-white/10"
    >
      <FaGithub className="text-xl text-white" />
    </a>
    <a
      href={`https://twitter.com/_vatsamit_`}
      className="p-2 rounded-full bg-white/10"
    >
      <FaTwitter className="text-xl text-white" />
    </a> */}
  </>
);

export default function Footer() {
  return (
    <footer className="space-y-6 pb-6 bg-black group text-white">
      {/* <section className="border-top pt-40 pb-20 overflow-hidden">
        <div className="c-container relative">
          <img
            src="/assets/pattern-triangle.png"
            alt="pattern-triangle"
            className="absolute -top-6 left-0 w-auto h-40 opacity-40 shadow-cmd group-hover:translate-x-5 duration-700"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-dark-border pb-20">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl sm:text-5xl font-bold font-heading leading-snug">
                The Future is Now, <br /> Old Man.
              </h2>
              <p className="pb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                voluptatum id eligendi ab distinctio amet.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="flex items-center justify-between py-12 pt-20 c-container">
        <h2 className="text-lg md:text-3xl text-center font-mono text-white">
          hi@alegance.io
        </h2>
        <div className="flex items-center gap-4">
          {socials}
          <a href={`https://twitter.com/aleganceX`} className="p-2">
            <FaTwitter className="text-lg md:text-3xl text-white" />
          </a>
          <a href={`https://www.linkedin.com/company/alegance`} className="">
            <FaLinkedin className="text-lg md:text-3xl text-white" />
          </a>
        </div>
      </section>
    </footer>
  );
}
