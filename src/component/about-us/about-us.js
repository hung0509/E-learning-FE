import './about-us.css';

const AboutUs = () => {
    return (
        <section class="py-3 py-md-5">
          <div class="container">
            <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
              <div class="col-12 col-lg-6">
                <img class="img-fluid rounded" loading="lazy" src="https://daotaonoibo.vn/wp-content/uploads/2023/03/he-thong-elearning.jpg" alt="About 2"/>
              </div>
              <div class="col-12 col-lg-6">
                <div class="row justify-content-xl-center">
                  <div class="col-12 col-xl-10">
                    <h2 class="mb-3">Why Choose Us?</h2>
                    <p class="lead fs-4 mb-3 mb-xl-5">With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.</p>
                    <div class="d-flex align-items-center mb-3">
                      <div class="me-3 text-primary">
                        <i class="bi bi-check-circle-fill"></i>
                      </div>
                      <div>
                        <p class="fs-5 m-0">Our evolution procedure is super intelligent.</p>
                      </div>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                      <div class="me-3 text-primary">
                        <i class="bi bi-check-circle-fill"></i>
                      </div>
                      <div>
                        <p class="fs-5 m-0">We deliver services beyond expectations.</p>
                      </div>
                    </div>
                    <div class="d-flex align-items-center mb-4 mb-xl-5">
                      <div class="me-3 text-primary">
                        <i class="bi bi-check-circle-fill"></i>
                      </div>
                      <div>
                        <p class="fs-5 m-0">Let's hire us to reach your objectives.</p>
                      </div>
                    </div>
                    <button type="button" class="btn bsb-btn-xl btn-outline-primary rounded-pill">Connect Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>);
}

export default AboutUs;