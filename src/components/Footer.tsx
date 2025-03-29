import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full bg-gray-900 text-white text-center p-2 md:p-4 mt-auto">
    <p className="text-sm md:text-base">
      &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
    </p>
  </footer>
);

export default Footer;
