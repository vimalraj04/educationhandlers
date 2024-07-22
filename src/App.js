import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavigationBar/Navbardefault';
import AllCourses from './Components/All-Courses/Allcourses'; // Corrected import
import Dummypage from './Components/Dummypage';
import PaymentPage from './Components/Payment-Page/Payment';
import About from './Components/About/About';
import SignInSide from './Components/SignInSide/SignInSide';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/AllCourses" element={<AllCourses />} />
          <Route path='/Payment' element = {<PaymentPage/>}></Route>
          <Route path='/About' element = {<About/>}></Route>
          <Route path='/SignIn' element = {<SignInSide/>}></Route>
          <Route path = '/SignUp' element = {<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
