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

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuizResultPopup from "../../component/quiz-result/quiz-result";
import { useQuiz } from "../../hook/useQuiz";
import { showWarning } from "../../service/toast";


const QuizForm = () => {
  const { quizId } = useParams();
  const userId = localStorage.getItem("userId");
  const [quizData, setQuizData] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [resultData, setResultData] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const { handleGetQuiz, handleScore } = useQuiz();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await handleGetQuiz(quizId);
        setQuizData(result);
      } catch (err) {
        console.error("Error fetching quiz:", err);
      }
    };

    fetchData();
  }, []);

  const handleAnswerSelect = (questionId, answerId) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };

  const handleSubmit = async () => {
    if (!quizData) return;

    const totalQuestions = quizData.questions.length;
    const answeredCount = Object.keys(selectedAnswers).length;

    if (answeredCount < totalQuestions) {
      showWarning("Vui lòng điền hết đáp án!")
      return;
    }

    const payload = {
      quizId: quizData.id,
      userId,
      results: Object.entries(selectedAnswers).map(([questionId, answerId]) => ({
        questionId: parseInt(questionId),
        selectedAnswerId: answerId,
      })),
    };

    const data = await handleScore(payload);
    if (data !== null) {
      setResultData(data); // giả sử bạn dùng format { data: { ...responseObject } }
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setShowResult(false);
    setResultData(null);
  };

  if (!quizData) {
    return <div className="container">Loading quiz...</div>;
  }

  return (
    <div className="container pt-5">
      <h4 className="fs-5 fw-bold">{quizData.title}</h4>
      <p>Mô tả: {quizData.description}</p>
      <hr />

      {quizData.questions.map((question, qIndex) => (
        <div key={question.id} className="mb-4 border p-3 rounded shadow-sm w-75">
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

      {showResult && (
        <QuizResultPopup
          resultData={resultData}
          onClose={() => setShowResult(false)}
          onRetry={handleRetry}
        />
      )}
    </div>
  );
};

export default QuizForm;

