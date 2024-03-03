import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

function Landing() {
  return (
    <div className="background min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-6xl font-bold text-white mb-8">
        Welcome to QuizzFy
      </h1>
      <div className="flex justify-center items-center mb-8">
        <Link
          to="/studentLogin"
          className="mx-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md px-6 py-3 text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          Student 
        </Link>
        <Link
          to="/facultyLogin"
          className="mx-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md px-6 py-3 text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          Faculty 
        </Link>
      </div>
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-md shadow-lg">
        <p className="text-gray-800 text-lg leading-relaxed">
          QuizzFy is an innovative online platform that redefines the quiz
          experience. Offering a vast array of topics spanning from general
          knowledge to specialized subjects, QuizzFy ensures there's something
          for everyone.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed mt-4">
          Users can dive into diverse quiz categories, ranging from science and
          history to pop culture and literature, providing an immersive learning
          and entertainment experience.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed mt-4">
          With customizable quizzes, individuals can tailor their challenges to
          suit their interests and educational goals, adjusting difficulty
          levels and question types as desired.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed mt-4">
          Whether you're seeking to expand your knowledge, have fun with
          friends, or simply pass the time, QuizzFy offers an unparalleled quiz
          experience that will keep you engaged and entertained.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed mt-4">
          Join the QuizzFy community today and embark on a journey of discovery
          and excitement!
        </p>
      </div>
    </div>
  );
}

export default Landing;
