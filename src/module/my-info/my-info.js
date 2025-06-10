import { useEffect, useState } from "react";
import Course from "../../component/course/course";
import "./my-info.css";
import UserInfoDto from "../../dto/user-info-dto";
import { useUserInfo } from "../../hook/useUserInfo";

import { useNavigate } from "react-router-dom";
import Article1 from "../../component/article/article";
import MyBadges from "../../component/my-badge/my-badge";


const MyInfo = () => {
    const [tab, setTab] = useState(true);
    const [data, setData] = useState(new UserInfoDto());
    const [isEdit, setIsEdit] = useState(false);
    const { handleMyInfo, handleUpdate } = useUserInfo();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const results = await handleMyInfo();

            const info = UserInfoDto.fromUserInfoResponse(results);
            setData(info);
        }

        fetchData();
    }, []);

    const handleClickTab = () => {
        setTab(!tab);
    }

    function formatJoinDate(dateStr) {
        const date = new Date(dateStr);

        const month = date.getMonth() + 1; // getMonth trả về từ 0–11
        const year = date.getFullYear();

        return `Đã tham gia từ tháng ${month} năm ${year}`;
    }

    const handleClickCourse = (id) => {
        navigate(`/course-des/${id}`);
    }

    const handleClickArticle = (id) => {
        navigate(`/article-detail/${id}`);
    }

    const handleIsEdit = (check) => {
        setIsEdit(!isEdit);
    }

    const handleUpdateUser = async () => {
        console.log("data: ", data);
        const result = await handleUpdate(data);

        const info = UserInfoDto.fromUserInfoResponse(result);
        window.location.href = "/my-info"
        setIsEdit(!isEdit);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    return (
        <div className="my-info py-5">
            <div class="team-single">
                <div class="row">
                    <div class="col-lg-4 col-md-4 xs-margin-30px-bottom">
                        <div class="team-single-img avatar-container">
                            <img className="p-3" src={data.avatar || "https://pluspng.com/img-png/user-png-icon-user-2-icon-png-file-512x512-pixel-512.png"} alt="" />
                        </div>
                        <div class="bg-light-gray padding-30px-all md-padding-25px-all sm-padding-20px-all text-center">
                            <h4 class="margin-10px-bottom font-size24 md-font-size22 sm-font-size20 font-weight-600">{data.firstName + " " + data.lastName}</h4>
                            <p class="sm-width-95 sm-margin-auto text-secondary">{formatJoinDate(data.createdAt)}</p>
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
                                        <input type='text' class="col-sm-9 text-secondary rounded border-0 p-2" value={data.firstName + " " + data.lastName} readOnly={!isEdit} onChange={(e) => handleInputChange(e)} />
                                    </div>
                                </div>

                                <div className="card-body border-bottom">
                                    <div className="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Email</h6>
                                        </div>
                                        <input name="email" type='email' class="col-sm-9 text-secondary rounded border-0 p-2" value={data.email} readOnly={!isEdit} onChange={(e) => handleInputChange(e)} />
                                    </div>
                                </div>

                                <div className="card-body border-bottom">
                                    <div className="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Giới tính</h6>
                                        </div>
                                        <select
                                            className="col-sm-9 text-secondary rounded border-0 p-2"
                                            disabled={!isEdit}
                                            value={data.gender}
                                            onChange={(e) => setData({ ...data, gender: e.target.value })}
                                        >
                                            <option value="">-- Chọn giới tính --</option>
                                            <option value="MALE">Nam</option>
                                            <option value="FEMALE">Nữ</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="card-body border-bottom">
                                    <div className="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Địa chỉ</h6>
                                        </div>
                                        <input type='text' name="address" class="col-sm-9 text-secondary rounded border-0 p-2" value={data.address} readOnly={!isEdit} onChange={(e) => handleInputChange(e)} />
                                    </div>
                                </div>

                                <div className="card-body border-bottom">
                                    <div className="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Ngày sinh</h6>
                                        </div>
                                        <input
                                            type='date'
                                            className="col-sm-9 text-secondary rounded border-0 p-2"
                                            value={data.dateOfBirth}
                                            readOnly={!isEdit}
                                            name="dateOfBirth"
                                            onChange={(e) => handleInputChange(e)}
                                        />
                                    </div>
                                </div>

                                <div className="card-body ">
                                    <div className="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Số điện thoại</h6>
                                        </div>
                                        <input name="phone" type='text' class="col-sm-9 text-secondary rounded border-0 px-2" value={data.phone} readOnly={!isEdit} onChange={(e) => handleInputChange(e)} />
                                    </div>
                                </div>

                                <div class="row">
                                    {!isEdit ? (
                                        <div class="col-sm-12">
                                            <div style={{ float: 'right' }} class="btn btn-info text-white" onClick={handleIsEdit}>Edit</div>
                                        </div>) :
                                        (<div class="col-sm-12">
                                            <div style={{ float: 'right' }} class="btn btn-info text-white" onClick={handleUpdateUser}>Save</div>
                                            <div style={{ float: 'right' }} class="btn btn-outline-danger" onClick={handleIsEdit}>Cancle</div>
                                        </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div>
                            <MyBadges />
                        </div>

                        <ul class="nav nav-tabs border-bottom" >
                            <li class="nav-item" onClick={handleClickTab}>
                                <a style={{ fontWeight: '600' }}
                                    class={`nav-link ${tab === true ? 'active' : ''}`}
                                    href="#"><i class="bi bi-book-fill px-2"></i>Khóa học đã đăng ký</a>
                            </li>
                            <li class="nav-item" onClick={handleClickTab}>
                                <a style={{ fontWeight: '600' }} class={`nav-link ${tab === false ? 'active' : ''}`} href="#"><i class="bi bi-book-fill px-2"></i>Bài viết đã đăng tải</a>
                            </li>
                        </ul>

                        <div className="row px-5 py-5">
                            {tab === true ?
                                data.courses.map((item) => (
                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-5 d-flex justify-content-center" onClick={() => handleClickCourse(item.id)}>
                                        <Course data={item} />
                                    </div>
                                )) :
                                data.articles?.map((item1, index) => (
                                    <div
                                        key={index}
                                        className={`flex flex-col md:flex-row items-center rounded-xl shadow-md p-6 gap-6 cursor-pointer transition hover:shadow-lg my-3`}
                                        onClick={() => handleClickArticle(item1.id)}
                                    >
                                        <Article1 data={item1}
                                        index={index} />
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default MyInfo;