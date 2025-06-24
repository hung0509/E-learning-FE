import { useState } from "react";

import { useAuth } from "../../hook/useAuth";
import AuthDto from "../../dto/auth-req";
import { OauthConfig } from "../../constant/code";

const Login = () => {
  const [data, setData] = useState(new AuthDto('', ''));
  const { handleLogin } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => {
      return new AuthDto(
        name === 'username' ? value : prevData.username,
        name === 'password' ? value : prevData.password
      );
    });
  };

  const handleSubmit = async () => {
    console.log(data);
    await handleLogin(data);
  }

  const loginByGoogle = () => {
    const callBackUri = OauthConfig.redirectUri;
    const authUrl = OauthConfig.authUri;
    const googleClientId = OauthConfig.clientId;

    const target_url = `${authUrl}?redirect_uri=${encodeURIComponent(callBackUri)}&response_type=code&client_id=${googleClientId}&scope=openid%20email%20profile`;

    console.log(target_url);
    window.location.href = target_url;
  }

  return (
    <section class="p-3 p-md-4 p-xl-5 ">
      <div class="container w-75">
        <div class="card border-light-subtle shadow-sm">
          <div class="row g-0">
            <div class="col-12 col-md-6 bsb-tpl-bg-platinum p-3">
              <img class="img-fluid rounded-start w-100 h-100 object-fit-contain" loading="lazy" src="https://bootstrapbrain.com/demo/components/registrations/registration-3/assets/img/bsb-logo.svg" alt="BootstrapBrain Logo" />
            </div>
            <div class="col-12 col-md-6 ">
              <div class="card-body p-3 p-md-4 p-xl-5">
                <div class="row">
                  <div class="col-12">
                    <div class="mb-5">
                      <h3>Đăng nhập</h3>
                    </div>
                  </div>
                </div>
                <form action="#!">
                  <div class="row gy-3 gy-md-4 overflow-hidden">
                    <div class="col-12">
                      <label for="email" class="form-label">Tên đăng nhập <span class="text-danger">*</span></label>
                      <input
                        value={data.username}
                        onChange={handleChange}
                        type="text"
                        class="form-control"
                        name="username"
                        id="username"
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                    <div class="col-12">
                      <label for="password" class="form-label">Mật khẩu <span class="text-danger">*</span></label>
                      <input
                        value={data.password}
                        onChange={handleChange}
                        type="password"
                        class="form-control"
                        name="password"
                        id="Mật khẩu"
                        required
                      />
                    </div>
                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me" />
                        <label class="form-check-label text-secondary" for="remember_me">
                          Lưu đăng nhập
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="d-grid">
                        <button onClick={handleSubmit} class="btn bsb-btn-xl btn-primary" type='button'>Đăng nhập</button>
                      </div>
                    </div>
                  </div>
                </form>

                <div class="row">
                  <div class="col-12">
                    {/* <hr class="mt-5 mb-4 border-secondary-subtle"> */}
                    <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                      <a href="/register" class="link-secondary text-decoration-none">Tạo tài khoản mới</a>
                      <a href="/reset-password" class="link-secondary text-decoration-none">Quên mật khẩu</a>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <p class="mt-5 mb-4">Hoặc đăng nhập với</p>
                    <div class="d-flex gap-3 flex-column flex-xl-row">
                      <div onClick={loginByGoogle} class="btn bsb-btn-xl btn-outline-primary">
                        <i class="bi bi-google"></i>
                        <span class="ms-2 fs-6">Google</span>
                      </div>
                      <a href="#!" class="btn bsb-btn-xl btn-outline-primary disabled" tabindex="-1" aria-disabled="true">
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