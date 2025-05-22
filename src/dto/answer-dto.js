
class AnswerDto{
    constructor(
        id ,
        questionId,
        answerText,
        isCorrect
    ) {
        this.questionId = questionId;
        this.id = id;
        this.answerText =  answerText;
        this.isCorrect = isCorrect;
    }

    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            id: this.id,
            questionId: this.questionId,
            answerText: this.answerText,
            isCorrect: this.isCorrect,
        };
    }

    static fromJson(json) {
        return new QuizDto(
            json.id,
            json.questionId,
            json.answerText,
            json.isCorrect,
        )
    }
}

export default AnswerDto;
