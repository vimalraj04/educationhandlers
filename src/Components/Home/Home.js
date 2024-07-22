// Home.js
import React from 'react';
import './Home.css';
import TopCoursesContainer from './TopCourses';
import img from '../Images/back.jpeg'
import Navbar from '../NavigationBar/Navbardefault';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home-container">
      <div className="background-image">
        <img src={img} alt="Background" />
      </div>
      <div className="content">
        <div className="welcome-message">
          <h1>Welcome to EH Platform</h1>
          <p style={{color: "black"}}>Start your learning journey today!</p>
        </div>
        <TopCoursesContainer/>
      </div>
    </div>
    </>
  );
};

export default Home;
