import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

function Landing() {
  return (
    <div className="background bg-gray-100 min-h-screen">
      <h1 className="text-center pt-16 text-4xl font-bold">QuizzFy</h1>
      <div className="flex justify-center items-center">
        <div className="mt-10">
          <Link
            to="/studentLogin"
            className="m-4 bg-gray-500 text-white rounded-md px-4 py-2"
          >
            Student Login
          </Link>
          <Link
            to="/facultyLogin"
            className="m-4 bg-gray-500 text-white rounded-md px-4 py-2"
          >
            Faculty Login
          </Link>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-10 p-4 bg-gray-200 rounded-md">
        <p className="text-gray-700 text-justify">
          QuizzFy is an innovative online platform that redefines the quiz
          experience. Offering a vast array of topics spanning from general
          knowledge to specialized subjects, QuizzFy ensures there's something
          for everyone. Users can dive into diverse quiz categories, ranging
          from science and history to pop culture and literature, providing an
          immersive learning and entertainment experience. With customizable
          quizzes, individuals can tailor their challenges to suit their
          interests and educational goals, adjusting difficulty levels and
          question types as desired. The platform also fosters competitive
          gameplay, allowing users to challenge friends or compete against
          others in real-time quizzes, adding an extra layer of excitement.
          Detailed performance tracking enables users to monitor their progress
          and improvement over time, providing valuable insights into their
          strengths and areas for growth. Moreover, QuizzFy boasts a vibrant
          community where users can engage with fellow quiz enthusiasts, share
          their creations, and discover new content. Whether you're seeking to
          expand your knowledge, have fun with friends, or simply pass the time,
          QuizzFy offers an unparalleled quiz experience that will keep you
          engaged and entertained. Join the QuizzFy community today and embark
          on a journey of discovery and excitement!
        </p>
      </div>
    </div>
  );
}

export default Landing;
