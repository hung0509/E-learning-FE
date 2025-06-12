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
                    <h2 class="mb-3">Tại sao lại chọn chúng tôi?</h2>
                    <p class="lead fs-4 mb-3 mb-xl-5">Với nhiều năm kinh nghiệm và kiến thức chuyên sâu trong ngành, chúng tôi đã khẳng định được vị thế với những thành công đáng kể và luôn nỗ lực không ngừng để dẫn đầu xu hướng. 🚀</p>
                    <div class="d-flex align-items-center mb-3">
                      <div class="me-3 text-primary">
                        <i class="bi bi-check-circle-fill"></i>
                      </div>
                      <div>
                        <p class="fs-5 m-0">Quy trình phát triển của chúng tôi vô cùng thông minh.</p>
                      </div>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                      <div class="me-3 text-primary">
                        <i class="bi bi-check-circle-fill"></i>
                      </div>
                      <div>
                        <p class="fs-5 m-0">Chúng tôi cung cấp dịch vụ vượt xa mong đợi.</p>
                      </div>
                    </div>
                    <div class="d-flex align-items-center mb-4 mb-xl-5">
                      <div class="me-3 text-primary">
                        <i class="bi bi-check-circle-fill"></i>
                      </div>
                      <div>
                        <p class="fs-5 m-0">Hãy hợp tác với chúng tôi để đạt được mục tiêu của bạn! 🚀</p>
                      </div>
                    </div>
                    <button type="button" class="btn bsb-btn-xl btn-outline-primary rounded-pill">Liên hệ ngay!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>);
}

export default AboutUs;