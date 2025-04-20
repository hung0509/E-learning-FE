import React, { useState, useEffect } from "react";
import "./course-addition.css";

import { useCourse } from "../../../hook/useCourse";
import CourseDto from "../../../dto/course-dto";

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

const steps = [
    { number: 1, label: "Basic Information" },
    { number: 2, label: "Courses Media" },
    { number: 3, label: "Curriculum" },
    { number: 4, label: "Complete" }
];

const CourseAddition = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [lessons, setLessons] = useState([]);
    const [data, setData] = useState(new CourseDto());
    const { handleAddSourse } = useCourse();

    useEffect(() => {
        return () => {
            data.avatar && URL.revokeObjectURL(data.avatar);
        }
    }, [data.avatar]);

    const addLesson = () => {
        const newLesson = { lessonName: "", description: "", urlLesson: null };
        setLessons([...lessons, newLesson]);
        setData(prevData => ({
            ...prevData,
            lessons: [...prevData.lessons, newLesson]  // Cập nhật vào data
        }));
    };

    const updateLesson = (index, field, value) => {
        const updatedLessons = lessons.map((lesson, i) =>
            i === index ? { ...lesson, [field]: value } : lesson
        );
        setLessons(updatedLessons);

        setData(prevData => ({
            ...prevData,
            lessons: updatedLessons  // Cập nhật lessons trong data
        }));
    };

    const removeLesson = (index) => {
        const updatedLessons = lessons.filter((_, i) => i !== index);
        setLessons(updatedLessons);

        setData(prevData => ({
            ...prevData,
            lessons: updatedLessons  // Cập nhật lại lessons trong data
        }));
    };

    const handleFileChange = (e, fieldName) => {
        const file = e.target.files[0];
        if (file) {
            file.preview = URL.createObjectURL(file);

            // Cập nhật vào data thay vì setFiles
            setData((prevData) => ({
                ...prevData,
                [fieldName]: file, // Cập nhật file vào đúng trường trong data
            }));
        }
    };

    const navigateStep = (step) => {
        setCurrentStep(step);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCreateCourse = async () => {
        const formData = new FormData();
        let courseDuaration = 0;
    
        formData.append('instructorId', 1); // Temporary instructorId
        formData.append('quantity', 10);
        formData.append('categoryId', data.categoryId);
        formData.append('courseName', data.courseName);
        formData.append('description', data.description);
    
        // Append file (input type="file")
        formData.append('avatar', data.avatar);   
        formData.append('trailer', data.trailer); 
    
        formData.append('priceEntered', data.priceEntered);
        formData.append('certificateName', data.certificateName);
        formData.append('level', data.level);
    
        const lessonPromises = lessons.map((lesson, index) => {
            return new Promise((resolve, reject) => {
                const videoElement = document.createElement('video');
                videoElement.src = URL.createObjectURL(lesson.urlLesson);
                videoElement.onloadedmetadata = () => {
                    URL.revokeObjectURL(videoElement.src); // Free memory
    
                    const duration = Math.floor(videoElement.duration); // Duration in seconds
    
                    formData.append(`lessons[${index}].lessonName`, lesson.lessonName);
                    formData.append(`lessons[${index}].description`, lesson.description);
                    formData.append(`lessons[${index}].urlLesson`, lesson.urlLesson); // File
                    formData.append(`lessons[${index}].lessonTime`, duration); // Duration in seconds
                    courseDuaration = courseDuaration + duration;
                    resolve(); // Resolve after metadata is loaded and appended
                };
                videoElement.onerror = reject; 
            });
        });

        formData.append('courseDuration', courseDuaration);
    
        try {
            await Promise.all(lessonPromises);
            console.log(formData);

            await handleAddSourse(formData);
        } catch (error) {
            console.error("Error loading video metadata:", error);
        }
    };
    

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
                        <div className="card p-3">
                            <div className="card-body border-bottom">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Course Title</h6>
                                    </div>
                                    <input
                                        value={data.courseName}
                                        onChange={handleInputChange}
                                        name='courseName'
                                        id='courseName'
                                        type='text'
                                        className="col-sm-9 text-secondary rounded border p-2"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="card-body border-bottom">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Course Category</h6>
                                    </div>
                                    <select value={data.categoryId} onChange={handleInputChange} id="categoryId" name="categoryId" className="w-50 col-sm-9 text-secondary rounded border p-2">
                                        {category.map((item) => (<option className='px-2' key={item.id} value={item.id}>{item.category_name}</option>))}
                                    </select>
                                </div>
                            </div>

                            <div className="card-body border-bottom">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Course Level</h6>
                                    </div>
                                    <select value={data.level} onChange={handleInputChange} id="level" name="level" className="w-50 col-sm-9 text-secondary rounded border p-2">
                                        <option className='px-2' value="BEGINNER">Beginner</option>
                                        <option className='px-2' value="INTERMEDIATE">Intermediate</option>
                                        <option className='px-2' value="EXPERT">Expert</option>
                                    </select>
                                </div>
                            </div>

                            <div className="card-body border-bottom">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Course Description</h6>
                                    </div>
                                    <input
                                        value={data.description}
                                        onChange={handleInputChange}
                                        name="description"
                                        id="description"
                                        type='text'
                                        className="col-sm-9 text-secondary rounded border p-2"
                                    />
                                </div>
                            </div>

                            <div className="card-body border-bottom">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Course Price</h6>
                                    </div>
                                    <input
                                        value={data.priceEntered}
                                        onChange={handleInputChange}
                                        type='number'
                                        name='priceEntered'
                                        id='priceEntered'
                                        className="col-sm-9 text-secondary rounded border p-2"
                                    />
                                </div>
                            </div>

                            <div className="card-body border-bottom">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Course Certificate</h6>
                                    </div>
                                    <input
                                        value={data.certificateName}
                                        onChange={handleInputChange}
                                        type='text'
                                        name='certificateName'
                                        id='certificateName'
                                        className="col-sm-9 text-secondary rounded border p-2"
                                    />
                                </div>
                            </div>

                        </div>
                        <button className="btn btn-primary mt-3" onClick={() => navigateStep(2)}>Next</button>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="w-50 m-auto">
                        <h2>Courses Media</h2>
                        <div className="card p-3">
                            <div className="card-body border-bottom">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Course Image</h6>
                                    </div>
                                    <input type='file'
                                        name='avatar'
                                        id='avartar'
                                        className="col-sm-9 text-secondary rounded border p-2"
                                        onChange={(e) => handleFileChange(e, 'avatar')}
                                    />
                                    {data.avatar && (<img src={data.avatar.preview} alt="" />)}
                                </div>
                            </div>

                            <div className="card-body border-bottom">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Course Trailer</h6>
                                    </div>
                                    <input
                                        type='file'
                                        name='trailer'
                                        id='trailer'
                                        className="col-sm-9 text-secondary rounded border p-2"
                                        onChange={(e) => handleFileChange(e, 'trailer')}
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
                        <div className="card p-3">

                            {lessons.map((lesson, index) => (
                                <div key={index} className="p-3 rounded d-flex border-bottom justify-content-between">
                                    <label className="block mt-2">Tên bài học</label>
                                    <input
                                        type="text"
                                        className="border p-1 w-full"
                                        value={lesson.lessonName}
                                        name='lessonName'
                                        onChange={(e) => updateLesson(index, "lessonName", e.target.value)}
                                    />

                                    <label className="block mt-2">Mô tả</label>
                                    <input
                                        type='text'
                                        className="border p-1 w-full"
                                        value={lesson.description}
                                        name='description'
                                        onChange={(e) => updateLesson(index, "description", e.target.value)}
                                    />

                                    <label className="block mt-2">Chọn file</label>
                                    <input
                                        type="file"
                                        className="border p-1 w-full"
                                        name='urlLesson'
                                        onChange={(e) => updateLesson(index, "urlLesson", e.target.files[0])}
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
                            <button onClick={handleCreateCourse} className="btn btn-primary mt-3">Tạo khóa học</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseAddition;
