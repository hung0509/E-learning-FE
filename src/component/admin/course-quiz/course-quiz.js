import React, { useState } from "react";
import { useQuiz } from "../../../hook/useQuiz";
import QuizDto from "../../../dto/quiz-dto";

const AddMultipleChoiceTestForm = ({ courses, addQuiz, deleteQuiz }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [timeLimit, setTimeLimit] = useState(30);
    const [questions, setQuestions] = useState([
        {
            questionText: "",
            answers: [
                { answerText: "", isCorrect: false },
                { answerText: "", isCorrect: false },
                { answerText: "", isCorrect: false },
                { answerText: "", isCorrect: false }
            ]
        }
    ]);
    const { handleAddQuiz, handleDeleteQuiz } = useQuiz();


    const handleQuestionChange = (index, value) => {
        const updated = [...questions];
        updated[index].questionText = value;
        setQuestions(updated);
    };

    const handleAnswerChange = (qIndex, aIndex, value) => {
        const updated = [...questions];
        updated[qIndex].answers[aIndex].answerText = value;
        setQuestions(updated);
    };

    const handleCorrectAnswerSelect = (qIndex, aIndex) => {
        const updated = [...questions];
        updated[qIndex].answers = updated[qIndex].answers.map((a, i) => ({
            ...a,
            isCorrect: i === aIndex
        }));
        setQuestions(updated);
    };

    const addQuestion = () => {
        setQuestions([
            ...questions,
            {
                questionText: "",
                answers: [
                    { answerText: "", isCorrect: false },
                    { answerText: "", isCorrect: false },
                    { answerText: "", isCorrect: false },
                    { answerText: "", isCorrect: false }
                ]
            }
        ]);
    };

    const removeQuestion = (index) => {
        if (questions.length > 1) {
            const updated = [...questions];
            updated.splice(index, 1);
            setQuestions(updated);
        }
    };

    const handleSubmit = async (e) => {
        const transformedQuestions = questions.map((q) => ({
            ...q,
            answers: q.answers.map((a) => ({
                ...a,
                isCorrect: a.isCorrect ? "Y" : "N"
            }))
        }));

        const data = {
            courseId: courses.id,
            title,
            description,
            timeLimit: Number(timeLimit),
            questions: transformedQuestions
        };

        console.log("Submitted:", data);

        const value = await handleAddQuiz(data);
        addQuiz(value);
    };

    const handleRemoveQuiz = async (id) => {
        const value = await handleDeleteQuiz(id);

        deleteQuiz(value);
    }

    return (
        <div className="container">
            <ul className="list-unstyled course-lesson">
                <h4 className="fs-5 fw-bold ">Các bài kiểm tra</h4>

                {courses.quizs.map((quiz, index) => (
                    <li
                        key={quiz.id}
                        className="py-3 px-3"
                        style={{
                            fontWeight: '500'
                        }}
                    >
                        <div
                            className="text-decoration-none link-dark opacity-75 d-flex justify-content-between pr-5"
                            style={{ width: '100%' }}
                        >
                            <div>
                                <i className="bi bi-play-circle p-3"></i>
                                {index}. {quiz.title}
                            </div>
                            <span style={{ fontSize: '12px' }}>
                                <span onClick={() => handleRemoveQuiz(quiz.id)} className="mx-5" style={{ cursor: 'pointer' }}><i class="bi bi-trash-fill"></i></span>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
            <h4 className="fs-5 fw-bold ">Thêm bài kiểm tra</h4>
            <div className="mb-3">
                <label>Tiêu đề</label>
                <input
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label>Mô tả</label>
                <textarea
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Thời gian làm bài (phút)</label>
                <input
                    type="number"
                    className="form-control"
                    value={timeLimit}
                    onChange={(e) => setTimeLimit(e.target.value)}
                    required
                    min="1"
                />
            </div>

            <hr />

            {questions.map((question, qIndex) => (
                <div key={qIndex} className="mb-4 border p-3 rounded shadow-sm">
                    <h6>Câu hỏi {qIndex + 1}</h6>
                    <textarea
                        className="form-control mb-2"
                        placeholder="Nhập câu hỏi"
                        value={question.questionText}
                        onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                        required
                    />

                    {question.answers.map((answer, aIndex) => (
                        <div key={aIndex} className="input-group mb-2">
                            <div className="input-group-text">
                                <input
                                    type="radio"
                                    name={`correct-${qIndex}`}
                                    checked={answer.isCorrect}
                                    onChange={() => handleCorrectAnswerSelect(qIndex, aIndex)}
                                />
                            </div>
                            <input
                                className="form-control"
                                placeholder={`Đáp án ${String.fromCharCode(65 + aIndex)}`}
                                value={answer.answerText}
                                onChange={(e) =>
                                    handleAnswerChange(qIndex, aIndex, e.target.value)
                                }
                                required
                            />
                        </div>
                    ))}

                    <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeQuestion(qIndex)}
                    >
                        Xóa câu hỏi
                    </button>
                </div>
            ))}

            <button
                type="button"
                className="btn btn-secondary mb-3"
                onClick={addQuestion}
            >
                + Thêm câu hỏi
            </button>

            <br />
            <button onClick={handleSubmit} style={{ float: "inline-end" }} type="submit" className="btn btn-outline-primary">
                Lưu bài kiểm tra
            </button>
        </div>
    );
};

export default AddMultipleChoiceTestForm;
