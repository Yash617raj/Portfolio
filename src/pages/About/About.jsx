import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full Stack Developer, Problem Solver, and Tech Enthusiast
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-1">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[50px] shadow block"
                  alt="payments illustration"
                  width={350}
                  height={400}
                />
              </div>
            </div>

            <div className="relative space-y-4 text-xl text-white" >
              <p>
                Hey, I'm Yash Raj Harsh, a dedicated Full Stack Web Developer
                with a strong focus on the MERN stack — MongoDB, Express.js,
                React, and Node.js. I specialize in building responsive,
                high-performance web applications that deliver seamless user
                experiences from front to back.
              </p>
              <p className="text-white">
                My strength lies in writing clean, efficient, and scalable code,
                backed by a solid foundation in data structures and algorithms. I
                thrive on solving complex problems and continuously learning new
                technologies to stay ahead in the fast-evolving web ecosystem
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
