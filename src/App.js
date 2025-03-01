import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Leftbar from './component/leftbar/leftbar';
import AboutUs from './component/about-us/about-us';
import Home from './module/home/home';
import Courses from './module/courses/courses';
import Login from './module/login/login';
import Articles from './module/aricles/articles';


function App() {
  const location = useLocation("");
  const noHeaderFooter = [
      // "/sign-in",
      "/register",
  ];

  const noLeftBar = [
    "/sign-in",
    "/register",
];

  return (
    <div className="App">
          {!noHeaderFooter.includes(location.pathname) && <Header/>}
          <div className='d-flex'>
            <div className='container-leftbar'>
            {!noLeftBar.includes(location.pathname) &&<Leftbar />}
            </div>
            <div className='container-content flex-grow-1 px-5'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/course" element={<Courses/>}/>
                    <Route path="/article" element={<Articles/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="/sign-in" element={<Login/>}/>
                </Routes>
            </div>
          </div>
          {!noHeaderFooter.includes(location.pathname) && <Footer/>}
    </div>
  );
}

function AppWrapper() {
  return (
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  );
}

export default AppWrapper;
