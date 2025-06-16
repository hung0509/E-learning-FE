import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import { ToolbarPlugin } from './module/post-editor/post-editor';
import PageError from './module/404/404';
import { ToastContainer } from 'react-toastify';
import ArticleDetail from './module/article-detail/article-detail';
import PaymentSuccess from './component/status/success/payment-success';
import PaymentError from './component/status/error/payment-error';
import QuizForm from './module/quiz/quiz';
import ResetPassword from './component/password/reset-password/reset-password';
import ChangePassword from './component/password/change-password/change-password';
import ProtectedRoute from './guard/auth-guard';
import LessonEdition from './component/admin/lesson-editiion/lesson-edittion';
import TransactionAdmin from './component/admin/admin-transaction/admin-transaction';


function App() {
  const location = useLocation("");
  const noFooter = [
    "/admin",
    "/admin/course",
    "/admin/article",
    "/admin/user",
    "/admin/course/add",
    "/admin/transaction",
    "/404"
  ];

  const noHeader = [
    "/admin",
    "/lesson",
    "/admin/course",
    "/admin/user",
    "/admin/article",
    "/admin/discount",
    "/admin/course/add",
     "/admin/transaction",
    "/404"
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
    "/404"
  ];

  const adminLeftBar = [
    "/admin",
    "/admin/course",
    "/admin/user",
    "/admin/article",
    "/admin/discount",
    "/admin/transaction"
  ]

  return (
    <div className="App">
      <ToastContainer />
      {!noHeader.some(path => location.pathname.startsWith(path)) && <Header />}
      <div className='d-flex'>
        <div className='container-leftbar'>
          {!noLeftBar.some(path => location.pathname.startsWith(path)) && <Leftbar />}
          {(
            adminLeftBar.includes(location.pathname) 
            || adminLeftBar.some(path => location.pathname.startsWith("/admin/lesson"))
          ) 
          && <AdminLeftbar />}
        </div>
        <div className='container-content flex-grow-1'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/article" element={<Articles />} />
            <Route path="/article/post" element={<ToolbarPlugin />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/quiz/:quizId" element={<QuizForm />} />
            <Route path="/my-info" element={<MyInfo />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={
                        <ProtectedRoute>
                                    <Dashboard />
                        </ProtectedRoute>} />
            <Route path="/lesson" element={<Learning />} />
            <Route path="/course-des/:courseId" element={<CourseDes />} />
            <Route path="/admin/course" element={<ProtectedRoute><CourseAdmin /></ProtectedRoute>} />
            <Route path="/admin/user" element={<ProtectedRoute><User /></ProtectedRoute>} />
             <Route path="/admin/transaction" element={<ProtectedRoute><TransactionAdmin /></ProtectedRoute>} />
            <Route path="/admin/article" element={<ProtectedRoute><ArticleAdmin /></ProtectedRoute>} />
            <Route path="/admin/discount" element={<ProtectedRoute><Discount /></ProtectedRoute>} />
            <Route path="/admin/course/add" element={<ProtectedRoute><CourseAddition /></ProtectedRoute>} />
            <Route path="/admin/course/:courseId" element={<ProtectedRoute><EditCoursePage /></ProtectedRoute>} />
            <Route path="/article-detail/:articleId" element={<ArticleDetail />} />
            <Route path="/payment/success" element={<PaymentSuccess />} />
            <Route path="/payment/error" element={<PaymentError />} />
            <Route path="/404" element={<PageError />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/admin/lesson/:lessonId" element={<LessonEdition />} />
            <Route path="*" element={<PageError />} />
          </Routes>
        </div>
      </div>
      <Footer />

    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
