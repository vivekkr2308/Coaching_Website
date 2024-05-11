import React from "react";
import "./App.css";
import logo from "./image/logo.png";
import vector from "./image/Vector.png";
import vector1 from "./image/Vector1.png";
import vector2 from "./image/Vector2.png";
import vector3 from "./image/Vector3.png";
import bulb from "./image/Vectorbulb.png";
import volume from "./image/Vectorvolume.png";
import logoorg from "./image/logooriginal.png";
import home from "./image/Framehome.png";

function FlashcardApp() {
  return (
    <div className="bg-white max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
      <header className=" flex justify-between items-center py-4">
        <div className="flex  items-center gap-3">
          <div>
            <img src={logoorg} alt="logo" className="h-10 w-10" />
          </div>
          <div className="text-xl font-bold">VS Class</div>
        </div>
        <div className="flex items-center gap-5 space-x-4">
          {" "}
          <nav>
            <ul className="flex space-x-4 ">
              <li>
                <a href="/" className="text-black-500 hover:text-blue-700">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/flashcard"
                  className="text-black-500 hover:text-blue-700"
                >
                  Flashcard
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-black-500 hover:text-blue-700"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="text-black-500 hover:text-blue-700">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <button
            style={{ backgroundColor: "#06286E", borderRadius: "32px" }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg"
          >
            Login
          </button>
        </div>
      </header>

      <div className="text-sm text-blue-800 bg-white  flex items-center space-x-2 mt-7 ml-6 ">
        <img src={home} alt="Home" className="h-4 w-4" />{" "}
       
        <span>&gt;</span>
        <button className="hover:text-blue-600">Flashcard</button>
        <span>&gt;</span>
        <button className="hover:text-blue-600">Mathematics</button>
        <span>&gt;</span>
        <button className="hover:text-blue-600">Relation and Function</button>
      </div>

      <h1 className="text-2xl font-bold gradient-text mt-7 ml-6 ">
        Relations and Functions (Mathematics)
      </h1>

      <div className="flex gap-10 max-w-screen-lg text-center mt-4 mx-auto px-6">
        <div className="text-center my-4 space-x-6 mx-auto">
          <button className="text-blue-500 hover:text-blue-700 font-semibold">
            Study
          </button>
          <button className="text-blue-500 hover:text-blue-700 font-semibold">
            Quiz
          </button>
          <button className="text-blue-500 hover:text-blue-700 font-semibold">
            Test
          </button>
          <button className="text-blue-500 hover:text-blue-700 font-semibold">
            Game
          </button>
          <button className="text-blue-500 hover:text-blue-700 font-semibold">
            Others
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center max-w-screen-lg mx-auto px-6 mt-4 mb-2 cursor-pointer">
        <div
          className="bg-blue-700 text-white p-6 rounded-lg shadow-lg relative"
          style={{
            height: "393.19px",
            width: "712px",
            borderRadius: "42.51px",
          }}
        >
          <div className="absolute top-10 left-10">
            <button>
              <img src={bulb} alt="bulb" className="h-6 w-4" />
            </button>
          </div>
          <div className="absolute top-10 right-10">
            <button>
              <img src={volume} alt="volume" className="h-5 w-4" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center h-full">
            <div
              style={{ fontSize: "38.26px" }}
              className="text-center font-bold"
            >
              9 + 6 + 7x - 2x - 3
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ gap: "21.26px" }}
        className="flex justify-center items-center space-x-4 bg-white py-2"
      >
        <button className="h-5 w-5">
          <img src={vector} alt="" />
        </button>
        <button className="h-10 w-10">
          <img src={vector1} alt="" />
        </button>
        <span className="text-blue-500 font-semibold">01/10</span>
        <button className="h-10 w-10">
          <img src={vector2} alt="" />
        </button>
        <button className="h-5 w-5">
          <img src={vector3} alt="" />
        </button>
      </div>

      <div className="bg-white flex justify-between items-center px-4 py-4">
        <div className="flex items-center">
          <img src={logo} alt="HyggeX Logo" className="h-20 w-20" />{" "}
          
          <div className="flex flex-col ml-4">
            {" "}
           
            <span
              style={{
                fontSize: "12.4px",
                color: "#696671",
                fontWeight: "bold",
              }}
            >
              Published by
            </span>
            <span
              style={{
                fontSize: "15px",
                color: "#06286E",
                fontWeight: "bold",
              }}
            >
              HyggeX
            </span>
          </div>
        </div>
        <div className="flex items-center ml-auto">
          {" "}
         
          <span
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: "#164EC0",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%", 
            }}
            className="text-3xl font-bold"
          >
            +
          </span>
          <span
            style={{ fontSize: "15px", marginLeft: "10px" }} 
            className="gradient-text font-bold"
          >
            Create Flashcard
          </span>
        </div>
      </div>

      <div className=" max-w-xl p-8">
        <h2 className="text-2xl font-bold mb-6 gradient-text">FAQ</h2>
        <div className="space-y-4">
          <details className="border border-blue-500 rounded-lg p-3 group">
            <summary className="text-base font-semibold cursor-pointer list-none flex justify-between items-center">
              Can education flashcards be used for all age groups?
              <span className="arrow text-gray-600 text-xl">^</span>
            </summary>
            <p className="pt-4 pl-4 pr-2 text-gray-600">
              Details about the usage of flashcards.
            </p>
          </details>

          <details className="border border-blue-500 rounded-lg p-3 group">
            <summary className="text-base font-semibold cursor-pointer list-none flex justify-between items-center">
              How do education flashcards work?
              <span className="arrow text-gray-600 text-xl">^</span>
            </summary>
            <p className="pt-4 pl-4 pr-2 text-gray-600">
              Explanation on how flashcards assist in learning.
            </p>
          </details>

          <details className="border border-blue-500 rounded-lg p-3 group">
            <summary className="text-base font-semibold cursor-pointer list-none flex justify-between items-center">
              Can education flashcards be used for test preparation?
              <span className="arrow text-gray-600 text-xl">^</span>
            </summary>
            <p className="pt-2 pl-2 pr-2 text-gray-600">
              Guidance on using flashcards for tests.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}

export default FlashcardApp;
