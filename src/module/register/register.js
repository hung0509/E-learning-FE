import { useState } from "react";

import { useAccount } from "../../hook/useAccount";
import AccountDto from "../../dto/account-dto";

const Register = () => {
    const [data, setData] = useState(new AccountDto());
    const { register } = useAccount();

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setData((prevData) => {
          return new AccountDto(
            name === 'username' ? value : prevData.username,
            name === 'password' ? value : prevData.password,
            name === 'firstName' ? value: prevData.firstName,
            name === 'lastName' ? value: prevData.lastName,
            name === 'email' ? value: prevData.email,
            name === 'phone' ? value: prevData.phone,
          );
        });
    };

    const handleClickSignup = async () => {
        await register(data);
    }

    return (
        <section class="p-3 p-md-4 p-xl-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 bsb-tpl-bg-platinum">
                        <div class="d-flex flex-column justify-content-between h-100 p-3 p-md-4 p-xl-5">
                            <h3 class="m-0">Chào mứng!</h3>
                            <img class="img-fluid rounded mx-auto my-4" loading="lazy" src="https://bootstrapbrain.com/demo/components/registrations/registration-3/assets/img/bsb-logo.svg" width="245" height="80" alt="BootstrapBrain Logo" />
                            <p class="mb-0">Ban chưa phải là thành viên? <a href="#!" class="link-secondary text-decoration-none">Đăng ký ngay!</a></p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 bsb-tpl-bg-lotion">
                        <div class="p-3 p-md-4 p-xl-5">
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-5">
                                        <h2 class="h3">Đăng ký</h2>
                                        <h3 class="fs-6 fw-normal text-secondary m-0">Nhập thông tin của bạn vào biểu mẫu dưới</h3>
                                    </div>
                                </div>
                            </div>
                            <form action="#!">
                                <div class="row gy-3 gy-md-4 overflow-hidden">
                                    <div class="col-12">
                                        <label for="username" class="form-label">Tên đăng nhập <span class="text-danger">*</span></label>
                                        <input 
                                            value={data.username}
                                            onChange={handleChange}
                                            type="text" 
                                            class="form-control" 
                                            name="username" 
                                            id="username" 
                                            placeholder="Tên đăng nhập" 
                                            required 
                                        />
                                    </div>
                                    <div class="col-12">
                                        <label for="password" class="form-label">Mật khẩu <span class="text-danger">*</span></label>
                                        <input 
                                            value = {data.password}
                                            onChange={handleChange}
                                            type="password" 
                                            class="form-control" 
                                            name="password" 
                                            id="password" 
                                            placeholder="Mật khẩu" 
                                            required 
                                        />
                                    </div>
                                    <div class="col-12">
                                        <label for="firstName" class="form-label">Họ <span class="text-danger">*</span></label>
                                        <input
                                            value={data.firstName}
                                            onChange={handleChange}
                                            type="text" 
                                            class="form-control" 
                                            name="firstName" 
                                            id="firstName" 
                                            placeholder="Họ" 
                                            required 
                                        />
                                    </div>
                                    <div class="col-12">
                                        <label for="lastName" class="form-label">Tên<span class="text-danger">*</span></label>
                                        <input 
                                            value={data.lastName}
                                            onChange={handleChange}
                                            type="text" 
                                            class="form-control" 
                                            name="lastName" 
                                            id="lastName" 
                                            placeholder="Tên" 
                                            required 
                                        />
                                    </div>
                                    <div class="col-12">
                                        <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                                        <input 
                                            value={data.email}
                                            onChange={handleChange}
                                            type="email" 
                                            class="form-control" 
                                            name="email" 
                                            id="email"
                                            placeholder="name@example.com" 
                                            required 
                                        />
                                    </div>
                                    <div class="col-12">
                                        <label for="phone" class="form-label">Số điện thoại <span class="text-danger">*</span></label>
                                        <input 
                                            value={data.phone}
                                            onChange={handleChange}
                                            type="text" 
                                            class="form-control" 
                                            name="phone" 
                                            id="phone" 
                                            placeholder="Số điện thoại" 
                                            required 
                                        />
                                    </div>
                                    <div class="col-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required />
                                            <label class="form-check-label text-secondary" for="iAgree">
                                                Tôi đồng ý <a href="#!" class="link-primary text-decoration-none"> với các điều khoản và chính sách</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="d-grid">
                                            <button onClick={handleClickSignup} class="btn bsb-btn-xl btn-primary" type="submit">Đăng ký</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="row">
                                <div class="col-12">
                                    <p class="m-0 text-secondary text-end">Bạn đã có tài khoản? <a href="/sign-in" class="link-primary text-decoration-none">Đăng nhập</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}

export default Register;