import React, { useState, useEffect } from "react";
import "./course-addition.css";

const category = [
    {
        id: 1,
        category_name: "Cấu trúc dữ liệu và giải thuật"
    },
    {
        id: 2,
        category_name: "Lập trình căn bản"
    },
    {
        id: 3,
        category_name: "Font-end(FE)"
    },
    {
        id: 4,
        category_name: "Back-end(BE)"
    }
]

const CourseAddition = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [avatar, setAvatar] = useState();
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);

    const addLesson = () => {
        setLessons([...lessons, { name: "", description: "", file: null }]);
    };

    const updateLesson = (index, field, value) => {
        const updatedLessons = lessons.map((lesson, i) =>
            i === index ? { ...lesson, [field]: value } : lesson
        );
        setLessons(updatedLessons);
    };

    const removeLesson = (index) => {
        setLessons(lessons.filter((_, i) => i !== index));
    };

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);

        setAvatar(file);
    }

    const navigateStep = (step) => {
        setCurrentStep(step);
    };

    const steps = [
        { number: 1, label: "Basic Information" },
        { number: 2, label: "Courses Media" },
        { number: 3, label: "Curriculum" },
        { number: 4, label: "Complete" }
    ];

    return (
        <div className="container mt-5">
            <div className="stepper">
                <div className="steps-container d-flex justify-content-center">
                    {steps.map((step, index) => (
                        <div key={step.number} className="d-flex align-items-center">
                            <div
                                className={`step-circle ${currentStep === step.number ? "active" : ""}`}
                                onClick={() => setCurrentStep(step.number)}
                            >
                                {step.number}
                            </div>
                            <span className={`step-label ${currentStep === step.number ? "active" : ""}`}>
                                {step.label}
                            </span>
                            {index < steps.length - 1 && <div className="step-line"></div>}
                        </div>
                    ))}
                </div>
            </div>

            <div className="stepper-content mt-4 ">
                {currentStep === 1 && (
                    <div className="w-50 m-auto">
                        <h2>Basic Infomation</h2>
                        <div class="card p-3">
                            <div className="card-body border-bottom">
                                <div className="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Course Title</h6>
                                    </div>
                                    <input type='text' class="col-sm-9 text-secondary rounded border p-2" />
                                </div>
                            </div>

                            <div className="card-body border-bottom">
                                <div className="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Course Category</h6>
                                    </div>
                                    <select id="category" name="category" className="w-50 col-sm-9 text-secondary rounded border p-2">
                                        {category.map((item) => (<option className='px-2' key={item.id} value={item.id}>{item.category_name}</option>))}
                                    </select>
                                </div>
                            </div>

                            <div className="card-body border-bottom">
                                <div className="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Course Level</h6>
                                    </div>
                                    <select id="level" name="level" className="w-50 col-sm-9 text-secondary rounded border p-2">
                                        <option className='px-2' value="0">Beginner</option>
                                        <option className='px-2' value="1">Intermediate</option>
                                        <option className='px-2' value="2">Expert</option>
                                    </select>
                                </div>
                            </div>

                            <div className="card-body border-bottom">
                                <div className="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Course Description</h6>
                                    </div>
                                    <input type='text' class="col-sm-9 text-secondary rounded border p-2" />
                                </div>
                            </div>

                            <div className="card-body border-bottom">
                                <div className="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Course Price</h6>
                                    </div>
                                    <input type='number' name='price' class="col-sm-9 text-secondary rounded border p-2" />
                                </div>
                            </div>

                            <div className="card-body border-bottom">
                                <div className="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Course Certificate</h6>
                                    </div>
                                    <input type='text' name='certificate' class="col-sm-9 text-secondary rounded border p-2" />
                                </div>
                            </div>

                        </div>
                        <button className="btn btn-primary mt-3" onClick={() => navigateStep(2)}>Next</button>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="w-50 m-auto">
                        <h2>Courses Media</h2>
                        <div class="card p-3">
                            <div className="card-body border-bottom">
                                <div className="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Course Image</h6>
                                    </div>
                                    <input type='file'
                                        name='avatar'
                                        id='avartar'
                                        class="col-sm-9 text-secondary rounded border p-2"
                                        onChange={handlePreviewAvatar}
                                    />
                                    {avatar && (<img src={avatar.preview} alt="" />)}
                                </div>
                            </div>

                            <div className="card-body border-bottom">
                                <div className="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Course Trailer</h6>
                                    </div>
                                    <input
                                        type='file'
                                        name='trailer'
                                        id='trailer'
                                        class="col-sm-9 text-secondary rounded border p-2"
                                    />
                                </div>
                            </div>
                        </div>


                        <button className="btn btn-secondary mt-3" onClick={() => navigateStep(1)}>Previous</button>
                        <button className="btn btn-primary mt-3" onClick={() => navigateStep(3)}>Next</button>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="w-75 m-auto">
                        <h2>Curriculum</h2>

                        <div className='btn add-course' onClick={addLesson}>
                            + Thêm bài học
                        </div>

                        {/* Dialog */}
                        <div class="card p-3">

                            {lessons.map((lesson, index) => (
                                <div key={index} className="p-3 rounded d-flex border-bottom justify-content-between">
                                    <label className="block mt-2">Tên bài học</label>
                                    <input
                                        type="text"
                                        className="border p-1 w-full"
                                        value={lesson.name}
                                        onChange={(e) => updateLesson(index, "name", e.target.value)}
                                    />

                                    <label className="block mt-2">Mô tả</label>
                                    <input
                                        type='text'
                                        className="border p-1 w-full"
                                        value={lesson.description}
                                        onChange={(e) => updateLesson(index, "description", e.target.value)}
                                    />

                                    <label className="block mt-2">Chọn file</label>
                                    <input
                                        type="file"
                                        className="border p-1 w-full"
                                        onChange={(e) => updateLesson(index, "file", e.target.files[0])}
                                    />

                                    <button className="btn" onClick={() => removeLesson(index)}>
                                        <i className="bi bi-x-lg"></i>
                                    </button>
                                </div>
                            ))}
                        </div>


                        <div>
                            <button className="btn btn-secondary mt-3" onClick={() => navigateStep(2)}>Previous</button>
                            <button className="btn btn-primary mt-3" onClick={() => navigateStep(4)}>Next</button>
                        </div>

                    </div>
                )}

                {currentStep === 4 && (
                    <div className="w-50 m-auto">
                        <h2>🎉 Hoàn tất!</h2>

                        <p className="d-inline mx-5">Bạn đã sẵn sàng để tạo một khóa học mới chưa?</p>
                       
                        <div>
                            <button className="btn btn-secondary mt-3" onClick={() => navigateStep(3)}>Previous</button>
                            <button className="btn btn-primary mt-3">Tạo khóa học</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseAddition;
