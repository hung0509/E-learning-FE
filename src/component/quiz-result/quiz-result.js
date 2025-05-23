import React from "react";
import "./quiz-result.css";

const QuizResultPopup = ({ resultData, onClose, onRetry }) => {
  if (!resultData) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h5>Kết quả bài làm</h5>
        <p><strong>Số câu đúng:</strong> {resultData.amountCorrect}</p>
        <p><strong>Số câu sai:</strong> {resultData.amountWrong}</p>
        <p><strong>Tổng số câu:</strong> {resultData.totalQuestion}</p>
        <p><strong>Điểm:</strong> {resultData.percentageCorrect}%</p>

        <div className="d-flex gap-2 mt-3 justify-content-center">
          <button onClick={() => window.location.href = `course-des/${resultData.quiz.courseId}`} className="btn btn-primary">
            Quay về bài học
          </button>
          <button onClick={onRetry} className="btn btn-outline-secondary">
            Làm lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResultPopup;
