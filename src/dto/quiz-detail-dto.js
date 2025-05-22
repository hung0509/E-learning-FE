
class QuizDetailDto{
    constructor(
        id ,
        title,
        description,
        timeLimit,
        questions = []
    ) {
        this.id = id;
        this.title = title;
        this.description =  description;
        this.timeLimit = timeLimit;
        this.questions = questions
    }

    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            timeLimit: this.timeLimit,
            questions: this.questions
        };
    }

    static fromJson(json) {
        return new QuizDto(
            json.id,
            json.title,
            json.description,
            json.timeLimit,
            json.questions
        )
    }
}

export default QuizDto;