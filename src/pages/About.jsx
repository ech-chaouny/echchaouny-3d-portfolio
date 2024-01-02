import React from "react";
import { skills } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container md:text-start text-center">
      <h1 className="head-text">
        Hello 👋, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Ismeel
        </span>
      </h1>
      <p className="mt-5 sm:text-[18px] text-slate-600">
        A passionate Front-end Developer based in Casablanca, Morroco 📍, I
        learn and build user interfaces and web applications
      </p>
      <div className="py-10 flex flex-col justify-center">
        <h3 className="subhead-text blue-gradient_sub_head">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-10">
          {skills.map((skill) => (
            <div className="block-container w-16 h-16">
              <div className="btn-back rounded-xl btn-back-primary" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  className="size-10 object-contain"
                  src={skill.imageUrl}
                  alt={skill.type}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10">
        <h3 className="subhead-text blue-gradient_sub_head">About Me</h3>
        <h4 className="about-text mt-5">
          A dedicated Front-end Developer based in Casablanca, Morroco 📍
        </h4>
        <p className="mt-5 text-slate-600 md:text-[18px] tracking-tight">
          As a Junior Front-End Developer, I focus on developing my skills by
          mastering HTML, CSS, JavaScript, ReactJs, NextJs, Tailwind, SCSS. I
          specialize in designing and maintaining responsive websites that
          prioritize a seamless user experience. My expertise extends to
          crafting dynamic and engaging interfaces, leveraging clean and
          optimized code. I am well-versed in the latest development tools and
          techniques. Additionally, I am a team player who thrives in
          collaborating with cross-functional teams to produce outstanding web
          applications.
        </p>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
