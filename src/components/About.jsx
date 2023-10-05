import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        As a recent graduate Software Developer from CodeClan, I am eager to embark on a promising career in the field. With comprehensive training in Python/Flask, SQL, JavaScript/React, Java and Spring. I have honed my skills in creating reliable code through unit testing and pair programming. Alongside my studies, my experience as a Salesperson at World Duty Free and Coffee Specialist Nestlé Nespresso SA has enhanced my customer service, teamwork, problem-solving, sales, product knowledge, and communication abilities in a fast-paced environment. 
        </p>

        <br />

        <p className="text-xl">
        With a strong foundation in software development and a passion for continuous learning, I am well-prepared to contribute to innovative software projects. I bring a unique blend of technical proficiency, customer service excellence, and effective communication skills to my future endeavors. Let's connect on LinkedIn to explore potential collaborations and opportunities in the software development industry.
        </p>
      </div>
    </div>
  );
};

export default About;