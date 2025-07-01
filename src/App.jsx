import React from "react";
import "./index.css";

function App() {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center relative overflow-hidden px-4">
      {/* Back Arrow */}
      <div className="absolute top-6 left-6">
        <button className="text-indigo-500 hover:text-indigo-700 text-2xl">
          ←
        </button>
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
        {/* 404 + Rocket */}
        <div className="relative flex items-center justify-center">
          <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-black text-violet-700 z-10">
            404
          </h1>
          <div className="absolute -rotate-12 translate-y-4 text-5xl">🚀</div>
        </div>

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
        >
          Home
        </a>
      </div>
    </div>
  );
}

export default App;
