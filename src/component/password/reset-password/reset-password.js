import React, { useState } from 'react';
import { useAccount } from '../../../hook/useAccount';

const steps = [
    { number: 1, label: "Xác thực Email" },
    { number: 2, label: "Quay về trang đăng nhập" },
    //   { number: 3, label: "Confirmation" }
];

const ResetPassword = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [email, setEmail] = useState('')
    const { resetPassword } = useAccount();

    const goToStep = (s) => setCurrentStep(s);

    const handleSendEmail = async () => {
        const credential = {
            email: email
        }
        const value = await resetPassword(credential);
        if (value === 0) {
            goToStep(2);
        }

    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-8">
                    <div className="text-center mb-4">
                        <h2 className="mb-2">Thiết lập lại mật khẩu</h2>
                        <p className="text-muted">Làm theo những bước dưới đây để thiết lập lại mật khẩu!</p>
                    </div>

                    <div className="card">
                        <div className="card-body p-4">
                            {/* Step Indicator */}
                            <div className="step-indicator mb-4 d-flex justify-content-between align-items-center">
                                {steps.map((step, index) => (
                                    <div key={step.number} className="d-flex align-items-center flex-grow-1">
                                        {/* Vòng tròn số bước */}
                                        <div
                                            className={`btn rounded-circle d-flex align-items-center justify-content-center me-2 ${currentStep >= step.number ? 'bg-primary text-white' : 'bg-light text-dark'}`}
                                            onClick={() => goToStep(step.number)}
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            {step.number}
                                        </div>

                                        {/* Nhãn bước */}
                                        <span className={`step-label ${currentStep === step.number ? 'fw-bold' : ''}`}>
                                            {step.label}
                                        </span>

                                        {/* Đường kẻ nối nếu không phải bước cuối */}
                                        {index < steps.length - 1 && (
                                            <div className="flex-grow-1 mx-2" style={{ height: '2px', backgroundColor: '#ccc' }}></div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Step Content */}
                            {currentStep === 1 && (
                                <div>
                                    <h5 className="mb-4">Xác thực Email</h5>
                                    <div className="mb-4">
                                        {/* <label className="form-label">Nhập email của bạn: </label> */}
                                        <div className="input-group">
                                            <span className="input-group-text"><i class="bi bi-envelope"></i></span>
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Vui lòng nhập email"
                                            />
                                        </div>
                                        <div className="form-text">Chúng tôi sẽ gửi mật khẩu đến email này!</div>
                                    </div>
                                    <button className="btn btn-primary w-100" onClick={() => handleSendEmail()}>
                                        Send Verification Code
                                    </button>
                                </div>
                            )}

                            {/* {currentStep === 2 && (
                                <div>
                                    <h5 className="mb-4">Enter Verification Code</h5>
                                    <p className="text-muted mb-4">We've sent a verification code to your email. Please enter it below.</p>
                                    <div className="d-flex justify-content-center mb-4">
                                        {code.map((char, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                className="form-control text-center mx-1"
                                                maxLength="1"
                                                value={char}
                                                style={{ width: '40px' }}
                                                onChange={(e) => handleCodeChange(e.target.value, index)}
                                            />
                                        ))}
                                    </div>
                                    <div className="text-center mb-4">
                                        <span className="text-muted">Didn't receive the code? </span>
                                        <a href="#" className="text-decoration-none">Resend</a>
                                    </div>
                                    <button className="btn btn-primary w-100" onClick={() => goToStep(3)}>
                                        Verify Code
                                    </button>
                                </div>
                            )}

                            {currentStep === 3 && (
                                <div>
                                    <h5 className="mb-4">Create New Password</h5>
                                    <div className="mb-4">
                                        <label className="form-label">New Password</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                            <input
                                                type="password"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter new password"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Confirm Password</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                            <input
                                                type="password"
                                                className="form-control"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                placeholder="Confirm new password"
                                            />
                                        </div>
                                    </div>
                                    <button className="btn btn-primary w-100" onClick={() => goToStep(4)}>
                                        Reset Password
                                    </button>
                                </div>
                            )} */}

                            {currentStep === 2 && (
                                <div className="text-center">
                                    <div className="success-checkmark mb-3">
                                        <i className="fas fa-check fa-3x text-success"></i>
                                    </div>
                                    <h5 className="mb-3">Mật khẩu đã được thiết lập lại thành công</h5>
                                    <p className="text-muted mb-4">Vui lòng kiểm tra email để có được mật khẩu mới.</p>
                                    <a href="#" className="btn btn-primary">Quay về trang đăng nhập</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
