import React from "react";
import "./index.css";

function App() {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center relative overflow-hidden px-4">
      {/* Back Arrow */}
      <div className="absolute top-6 left-6">
          <img src="./arrow.png" alt="Go back" className="w-3 h-3 sm:w-4 sm:h-4" />
      </div>

      {/* Floating Space Stuff */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 text-4xl opacity-40">
        👨‍🚀
      </div>
      <div className="absolute top-[30%] left-[15%] text-3xl opacity-30">
        🌕
      </div>
      <div className="absolute bottom-[15%] right-[10%] text-3xl opacity-30">
        🪐
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center">
        {/* Real 404 image from figma */}
        <img src="./404-pic.png" alt="404 Image" className="w-full max-w-md mb-6" />

        {/* Headings */}
        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-900">
          Page Not Found
        </h2>
        <p className="mt-2 text-sm sm:text-base md:text-lg text-indigo-600">
          The requested page could not be found.
        </p>

        {/* Home Button */}
        <a
          href="/"
          className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 w-full max-w-xs"
          style={{ color: "#fff"}} 
        >
          Home
        </a>
      </div>
    </div>
  );
}



export default App;
