import React from "react";

const Home: React.FC = () => (
  <section className="text-center py-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Welcome to My Portfolio</h1>
    <p className="text-base sm:text-lg md:text-xl mt-4 max-w-3xl mx-auto">
      I'm a Frontend Developer passionate about building amazing web experiences. As an experienced Frontend Developer, I have honed my skills in React, HTML5, CSS3, JavaScript, and modern frontend frameworks. I am proficient in creating intuitive, responsive, and user-friendly interfaces that align with both design and functional requirements.
    </p>
    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
      <a href="/projects" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 text-sm sm:text-base">View Projects</a>
      <a href="/contact" className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white text-sm sm:text-base">Contact Me</a>
    </div>
  </section>
);

export default Home;



