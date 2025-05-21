
class QuizDto{
    constructor(
        id ,
        title,
        description,
        timeLimit
    ) {
        this.id = id;
        this.title = title;
        this.description =  description;
        this.timeLimit = timeLimit;
    }

    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            timeLimit: this.timeLimit,
        };
    }

    static fromJson(json) {
        return new QuizDto(
            json.id,
            json.title,
            json.description,
            json.timeLimit,
        )
    }
}

export default QuizDto;