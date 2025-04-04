import { useState } from "react";
import Course from "../../component/course/course";
import "./my-info.css";

const MyInfo = () => {
    const [tab, setTab] = useState(true);

    const handleClickTab = () => {
        setTab(!tab);
    }

    return (
        <div className="my-info py-5">
            <div class="team-single">
                <div class="row">
                    <div class="col-lg-4 col-md-4 xs-margin-30px-bottom">
                        <div class="team-single-img avatar-container">
                            <img className="p-3" src="https://pluspng.com/img-png/user-png-icon-user-2-icon-png-file-512x512-pixel-512.png" alt="" />
                        </div>
                        <div class="bg-light-gray padding-30px-all md-padding-25px-all sm-padding-20px-all text-center">
                            <h4 class="margin-10px-bottom font-size24 md-font-size22 sm-font-size20 font-weight-600">Lê Xuân Hùng</h4>
                            <p class="sm-width-95 sm-margin-auto text-secondary">Đã tham gia từ tháng 5 năm 2025</p>
                            <div class="margin-20px-top team-single-icons d-flex justify-content-center">
                                <div><a href=""><i class="bi bi-google p-2"></i></a></div>
                                <div><a href=""><i class="bi bi-facebook p-2"></i></a></div>
                            </div>
                        </div>

                        <div className="info-account px-3">
                            <h4 className="my-2">Thông tin cá nhân</h4>
                            <div class="card p-3">
                                <div class="card-body border-bottom">
                                    <div className="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Họ và tên</h6>
                                        </div>
                                        <input type='text' class="col-sm-9 text-secondary rounded border-0 px-2" value='Kenneth Valdez' readOnly />
                                    </div>
                                </div>

                                <div className="card-body border-bottom">
                                    <div className="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Email</h6>
                                        </div>
                                        <input type='email' class="col-sm-9 text-secondary rounded border-0 px-2" value='hungtaithe12@gmail.com' readOnly />
                                    </div>
                                </div>

                                <div className="card-body border-bottom">
                                    <div className="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Giới tính</h6>
                                        </div>
                                        <input type='text' class="col-sm-9 text-secondary rounded border-0 px-2" value='Nam' readOnly />
                                    </div>
                                </div>

                                <div className="card-body border-bottom">
                                    <div className="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Địa chỉ</h6>
                                        </div>
                                        <input type='text' class="col-sm-9 text-secondary rounded border-0 px-2" value='Xã Krong Buk, huyện Krong Pawk, tỉnh Đăk Lăk' readOnly />
                                    </div>
                                </div>

                                <div className="card-body ">
                                    <div className="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Số điện thoại</h6>
                                        </div>
                                        <input type='text' class="col-sm-9 text-secondary rounded border-0 px-2" value='0943285018' readOnly />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-sm-12">
                                        <a style={{ float: 'right' }} class="btn btn-info text-white" href="">Edit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <ul class="nav nav-tabs border-bottom" >
                            <li class="nav-item" onClick={handleClickTab}>
                                <a style={{fontWeight: '600'}} 
                                class={`nav-link ${tab === true ? 'active' : ''}`}
                                 href="#"><i class="bi bi-book-fill px-2"></i>Khóa học đã đăng ký</a>
                            </li>
                            <li class="nav-item" onClick={handleClickTab}>
                                <a style={{fontWeight: '600'}} class={`nav-link ${tab === false ? 'active' : ''}`} href="#"><i class="bi bi-book-fill px-2"></i>Bài viết đã đăng tải</a>
                            </li>
                        </ul>

                        <div className="row px-5 py-5">
                            <div className="col-sm-12 col-md-6 col-lg-5 mb-4 d-flex justify-content-center mx-4 px-4">
                                <Course />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-5 mb-4 d-flex justify-content-center mx-4 px-4">
                                <Course />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-5 mb-4 d-flex justify-content-center mx-4 px-4">
                                <Course />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-5 mb-4 d-flex justify-content-center mx-4 px-4">
                                <Course />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default MyInfo;