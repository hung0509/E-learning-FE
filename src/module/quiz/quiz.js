// import React, { useState } from "react";


// const QuizForm = () => {
//     const [questions, setQuestions] = useState([
//         {
//             questionText: "",
//             answers: [
//                 { answerText: "", isCorrect: false },
//                 { answerText: "", isCorrect: false },
//                 { answerText: "", isCorrect: false },
//                 { answerText: "", isCorrect: false }
//             ]
//         }
//     ]);


//     const handleSubmit = async (e) => {
//         const transformedQuestions = questions.map((q) => ({
//             ...q,
//             answers: q.answers.map((a) => ({
//                 ...a,
//                 isCorrect: a.isCorrect ? "Y" : "N"
//             }))
//         }));

//         const data = {
//         };

//         console.log("Submitted:", data);
//     };

//     return (
//         <div className="container">
//             <h4 className="fs-5 fw-bold ">Các bài kiểm tra</h4>
//             <hr />
//             {questions.map((question, qIndex) => (
//                 <div key={qIndex} className="mb-4 border p-3 rounded shadow-sm">
//                     <h6>Câu hỏi {qIndex + 1}</h6>
//                     <textarea
//                         className="form-control mb-2"
//                         value={question.questionText}
//                     />

//                     {question.answers.map((answer, aIndex) => (
//                         <div key={aIndex} className="input-group mb-2">
//                             <div className="input-group-text">
//                                 <input
//                                     type="radio"
//                                     name={`correct-${qIndex}`}
//                                     checked={answer.isCorrect}
//                                 />
//                             </div>
//                             <input
//                                 className="form-control"
//                                 value={answer.answerText}
//                                 required
//                             />
//                         </div>
//                     ))}
//                 </div>
//             ))}

//             <br />
//             <button onClick={handleSubmit} style={{ float: "inline-end" }} type="submit" className="btn btn-outline-primary">
//                 Nộp bài
//             </button>
//         </div>
//     );
// };

// export default QuizForm;

import React, { useEffect, useState } from "react";

const exampleData =  {
    "id": 1,
    "title": "Quiz 1: Kiến thức tổng hợp",
    "description": "Kiểm tra kiến thức cơ bản",
    "timeLimit": 120,
    "questions": [
      {
        "id": 101,
        "quizId": 1,
        "description": "Câu hỏi kiểm tra",
        "questionText": "Thủ đô của Việt Nam là gì?",
        "answers": [
          {
            "id": 1001,
            "questionId": 101,
            "answerText": "Hà Nội",
            "isCorrect": "N"
          },
          {
            "id": 1002,
            "questionId": 101,
            "answerText": "TP.HCM",
            "isCorrect": "N"
          },
          {
            "id": 1003,
            "questionId": 101,
            "answerText": "Đà Nẵng",
            "isCorrect": "N"
          },
          {
            "id": 1004,
            "questionId": 101,
            "answerText": "Huế",
            "isCorrect": "N"
          }
        ]
      },
      {
        "id": 102,
        "quizId": 1,
        "description": "Câu hỏi kiểm tra",
        "questionText": "2 + 2 = ?",
        "answers": [
          {
            "id": 1005,
            "questionId": 102,
            "answerText": "3",
            "isCorrect": "N"
          },
          {
            "id": 1006,
            "questionId": 102,
            "answerText": "4",
            "isCorrect": "N"
          },
          {
            "id": 1007,
            "questionId": 102,
            "answerText": "5",
            "isCorrect": "N"
          },
          {
            "id": 1008,
            "questionId": 102,
            "answerText": "6",
            "isCorrect": "N"
          }
        ]
      }
    ]
  }

const QuizForm = () => {
    const [quizData, setQuizData] = useState(exampleData);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    useEffect(() => {
        // Fetch quiz detail from backend
    }, []);

    const handleAnswerSelect = (questionId, answerId) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: answerId,
        }));
    };

    const handleSubmit = async () => {
        if (!quizData) return;

        const payload = {
            quizId: quizData.id,
            result: Object.entries(selectedAnswers).map(([questionId, answerId]) => ({
                questionId: parseInt(questionId),
                selectedAnswerId: answerId,
            })),
        };

        console.log("Submit payload:", payload);

        // Gửi dữ liệu lên BE
        // await axios.post("/api/quiz/submit", payload);
    };

    if (!quizData) return <div>Loading...</div>;

    return (
        <div className="container">
            <h4 className="fs-5 fw-bold">{quizData.title}</h4>
            <p>{quizData.description}</p>
            <hr />

            {quizData.questions.map((question, qIndex) => (
                <div key={question.id} className="mb-4 border p-3 rounded shadow-sm">
                    <h6>Câu {qIndex + 1}: {question.questionText}</h6>

                    {question.answers.map((answer) => (
                        <div key={answer.id} className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name={`question-${question.id}`}
                                checked={selectedAnswers[question.id] === answer.id}
                                onChange={() => handleAnswerSelect(question.id, answer.id)}
                            />
                            <label className="form-check-label">
                                {answer.answerText}
                            </label>
                        </div>
                    ))}
                </div>
            ))}

            <button onClick={handleSubmit} className="btn btn-outline-primary">
                Nộp bài
            </button>
        </div>
    );
};

export default QuizForm;
