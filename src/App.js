import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Land from './Components/LandingComp/Landing';
import Course from './Components/CoursesComp/courses';
function App() {
  return (
    <div>
      <Router>
        <LandingPage path='/'></LandingPage>
        <CoursePage path='/courses'></CoursePage>
      </Router>
    </div>
  );
}
function LandingPage(){
  return <Land></Land>
}
function CoursePage(){
  return <Course></Course>
}

export default App;
