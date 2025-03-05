
const Login = () => {
    return (
        <section class="p-3 p-md-4 p-xl-5 ">
          <div class="container w-75">
            <div class="card border-light-subtle shadow-sm">
              <div class="row g-0">
                <div class="col-12 col-md-6 bsb-tpl-bg-platinum p-3">
                  <img class="img-fluid rounded-start w-100 h-100 object-fit-contain" loading="lazy" src="https://bootstrapbrain.com/demo/components/registrations/registration-3/assets/img/bsb-logo.svg" alt="BootstrapBrain Logo"/>
                </div>
                <div class="col-12 col-md-6 ">
                  <div class="card-body p-3 p-md-4 p-xl-5">
                    <div class="row">
                      <div class="col-12">
                        <div class="mb-5">
                          <h3>Log in</h3>
                        </div>
                      </div>
                    </div>
                    <form action="#!">
                      <div class="row gy-3 gy-md-4 overflow-hidden">
                        <div class="col-12">
                          <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                          <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required/>
                        </div>
                        <div class="col-12">
                          <label for="password" class="form-label">Password <span class="text-danger">*</span></label>
                          <input type="password" class="form-control" name="password" id="password" value="" required/>
                        </div>
                        <div class="col-12">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me"/>
                            <label class="form-check-label text-secondary" for="remember_me">
                              Keep me logged in
                            </label>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="d-grid">
                            <button class="btn bsb-btn-xl btn-primary" type="submit">Log in now</button>
                          </div>
                        </div>
                      </div>
                    </form>

                    <div class="row">
                      <div class="col-12">
                        {/* <hr class="mt-5 mb-4 border-secondary-subtle"> */}
                        <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                          <a href="#!" class="link-secondary text-decoration-none">Create new account</a>
                          <a href="#!" class="link-secondary text-decoration-none">Forgot password</a>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12">
                        <p class="mt-5 mb-4">Or sign in with</p>
                        <div class="d-flex gap-3 flex-column flex-xl-row">
                          <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                            <i class="bi bi-google"></i>
                            <span class="ms-2 fs-6">Google</span>
                          </a>
                          <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                          <i class="bi bi-facebook"></i>
                            <span class="ms-2 fs-6">Facebook</span>
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Login;