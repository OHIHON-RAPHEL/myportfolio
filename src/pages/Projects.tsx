import React from "react";

const Projects: React.FC = () => (
  <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
    <h2 className="text-3xl sm:text-4xl font-bold text-center">Projects</h2>
    <p className="text-center mt-4 mb-12 sm:mb-16">Here are some of my best projects.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
      <div className="flex flex-col items-center text-center">
        <p className="font-semibold">1. E-commerce Website</p>
        <div className="flex flex-col items-center mt-4">
          <img src="/images/reflex.png" alt="E-commerce Website" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
          <p className="mt-4 max-w-lg text-sm sm:text-base">
            Reflex is an online platform that allows businesses and individuals to buy and sell products or services over the internet. It provides a seamless shopping experience through various features such as product listings, search and filtering options, secure payment gateways, and customer support.
          </p>
        </div>
        <p className="mt-2 text-sm sm:text-base">Tech Stack: React.js, JavaScript</p>
        <p className="mt-1 text-sm sm:text-base">Git Repository: <a href="https://github.com/OHIHON-RAPHEL/myProjectWork.io.git" className="text-blue-500 underline">View on GitHub</a></p>
      </div>

      <div className="flex flex-col items-center text-center">
        <p className="font-semibold">2. Covid-19 Tracker</p>
        <div className="flex flex-col items-center mt-4">
          <img src="/images/covid.png" alt="Covid-19 Tracker" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
          <p className="mt-4 max-w-lg text-sm sm:text-base">
            Covid-19 Tracker is an online platform that provides real-time information and resources during the global pandemic.
          </p>
        </div>
        <p className="mt-2 text-sm sm:text-base">Tech Stack: React.js, JavaScript, Redux</p>
        <p className="mt-1 text-sm sm:text-base">Git Repository: <a href="https://github.com/OHIHON-RAPHEL/covid-19-tracker.io.git" className="text-blue-500 underline">View on GitHub</a></p>
      </div>

      <div className="flex flex-col items-center text-center">
        <p className="font-semibold">3. Cargo Shipment</p>
        <div className="flex flex-col items-center mt-4">
          <img src="/images/cargo.png" alt="Cargo Shipment" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
          <p className="mt-4 max-w-lg text-sm sm:text-base">
            Cargo Shipment is an application that allows users to book their means of transporting goods to another country.
          </p>
        </div>
        <p className="mt-2 text-sm sm:text-base">Tech Stack: React.js, JavaScript, TypeScript</p>
        <p className="mt-1 text-sm sm:text-base">Git Repository: <a href="https://github.com/OHIHON-RAPHEL/cargo-shipment.git" className="text-blue-500 underline">View on GitHub</a></p>
      </div>
    </div>
  </section>

//   <section className="py-20">
//   <h2 className="text-3xl font-bold text-center">Projects</h2>
//   <p className="text-center mt-4">Here are some of my best projects.</p>
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//     {/* Project Cards Placeholder */}
//     <div className="bg-gray-100 p-4 rounded-lg shadow-md">Project 1</div>
//     <div className="bg-gray-100 p-4 rounded-lg shadow-md">Project 2</div>
//     <div className="bg-gray-100 p-4 rounded-lg shadow-md">Project 3</div>
//   </div>
// </section>
);

export default Projects;
