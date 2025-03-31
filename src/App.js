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
import Register from './module/register/register';
import AdminLeftbar from './component/admin/leftbar/admin-leftbar';
import Dashboard from './component/admin/dashboard/dashboard';
import Learning from './module/learning/learning';
import CourseDes from './module/course-des/course-des';
import CourseAdmin from './component/admin/course-admin/course-admin';
import User from './component/admin/user/user';
import ArticleAdmin from './component/admin/manage-article/article-admin';
import Discount from './component/admin/discount/discount';
import MyInfo from './module/my-info/my-info';
import CourseAddition from './component/admin/course-addition/course-addition';
import EditCoursePage from './component/admin/course-edittion/course-edition';
import PostEditor, { ToolbarPlugin } from './module/post-editor/post-editor';


function App() {
  const location = useLocation("");
  const noFooter = [
    "/admin",
    "/admin/course",
    "/admin/article",
    "/admin/user",
    "/admin/course/add",
  ];

  const noHeader = [
    "/admin",
    "/lesson",
    "/admin/course",
    "/admin/user",
    "/admin/article",
    "/admin/discount",
    "/admin/course/add",
  ]

  const noLeftBar = [
    "/sign-in",
    "/register",
    "/admin",
    "/lesson",
    "/admin/course",
    "/admin/user",
    "/admin/article",
    "/admin/discount",
    "/admin/course/add",
  ];

  const adminLeftBar = [
    "/admin",
    "/admin/course",
    "/admin/user",
    "/admin/article",
    "/admin/discount",
  ]

  return (
    <div className="App">
         {!noHeader.some(path => location.pathname.startsWith(path)) && <Header />}
          <div className='d-flex'>
            <div className='container-leftbar'>
            {!noLeftBar.some(path => location.pathname.startsWith(path)) && <Leftbar />}
            {adminLeftBar.includes(location.pathname) && <AdminLeftbar />}
            </div>
            <div className='container-content flex-grow-1'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/course" element={<Courses/>}/>
                    <Route path="/article" element={<Articles/>}/>
                    <Route path="/article/post" element={<ToolbarPlugin/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="/my-info" element={<MyInfo/>}/>
                    <Route path="/sign-in" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/admin" element={<Dashboard/>}/>
                    <Route path="/lesson" element={<Learning/>}/>
                    <Route path="/course-des" element={<CourseDes/>}/>
                    <Route path="/admin/course" element={<CourseAdmin/>}/>
                    <Route path="/admin/user" element={<User/>}/>
                    <Route path="/admin/article" element={<ArticleAdmin/>}/>
                    <Route path="/admin/discount" element={<Discount/>}/>
                    <Route path="/admin/course/add" element={<CourseAddition/>}/>
                    <Route path="/admin/course/:courseId" element={<EditCoursePage/>}/>
                </Routes>
            </div>
          </div>
          <Footer/>
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
