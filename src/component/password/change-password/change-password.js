import React, { useState } from 'react';
import { useUserInfo } from '../../../hook/useUserInfo';
import { showError, showWarning } from '../../../service/toast';
import { useAccount } from '../../../hook/useAccount';

const ChangePassword = () => {
    const [data, setData] = useState({
        password: "",
        confirmPassword: ""
    });
    const userId = localStorage.getItem("userId");
    const { handleUpdateAccount } = useAccount();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if(data.password === null || data.password === ""){
            showWarning("Vui lòng nhập mật khẩu!");
            return;
        }

        if(data.confirmPassword === null || data.confirmPassword === ""){
            showWarning("Vui lòng nhập xác nhận mật khẩu!");
            return;
        }

        if(data.password !== data.confirmPassword){
             showWarning("Mật khẩu không khớp!");
             return;
        }

        const credential = {
            userId : userId,
            password: data.password
        } 

        console.log(credential);
        await handleUpdateAccount(credential);
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8">

                    <div className="card">
                        <div className="card-body p-4">
                            <div className="text-center mb-4">
                                <h2 className="mb-2">Đổi mật khẩu</h2>
                            </div>
                            <div class="col-12 py-3">
                                <label for="email" class="form-label">Mật khẩu <span class="text-danger">*</span></label>
                                <input
                                    value={data.password}
                                    onChange={(e) => handleChange(e)}
                                    type="password"
                                    name="password"
                                    class="form-control"
                                    id="password"
                                    placeholder="Mật khẩu"
                                />
                            </div>
                            <div class="col-12 py-3">
                                <label for="password" class="form-label">Xác nhận mật khẩu <span class="text-danger">*</span></label>
                                <input
                                    value={data.confirmPassword}
                                    onChange={(e) => handleChange(e)}
                                    type="password"
                                    class="form-control"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Xác nhận mật khẩu"
                                />
                            </div>

                            <div class="col-12 py-3">
                                <button onClick={handleSubmit} class="btn bsb-btn-xl btn-primary w-100" type='button'>Xác nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
