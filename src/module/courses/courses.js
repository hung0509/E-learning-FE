import React from 'react';
import './courses.css'; // Make sure to create and import a CSS file for the styles
import Course from '../../component/course/course';


const Courses = () => {
  return (
    <section className="courses wrapper border">
      {/* <div className="container w-100 text-center mt-1">
         <img height="400px" className='w-100 rounded' src="https://www.motionworship.com/wp-content/uploads/ColorFlowWelcomeHD-768x432.jpg" alt="" />
      </div> */}
      
      <div className="container px-5">
      <div class="row py-5">
          <div class="col">
            <h1 class="display-4 font-weight-bolder">Khóa học nổi bật</h1>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <Course />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <Course />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <Course />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <Course />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <Course />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <Course />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <Course />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <Course />
          </div>

        </div>
      </div>

    </section>
  );
};

export default Courses;
