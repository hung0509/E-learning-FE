class CourseDetailDto {
    constructor(
        id,
        courseName,
        description,
        avatar,
        trailer,
        level,
        priceEntered,
        priceAfterReduce,
        courseDuration,
        quantity,
        createdAt,
        completedLesson,
        totalLesson,
        completionPercentage,
        certificate,
        discount,
        category,
        lessons = [],
        quizs = [],
        documents = []
    ) {
        this.id = id;
        this.courseName = courseName;
        this.description = description;
        this.avatar = avatar;
        this.trailer = trailer;
        this.level = level;
        this.priceEntered = priceEntered;
        this.priceAfterReduce = priceAfterReduce;
        this.courseDuration = courseDuration;
        this.quantity = quantity;
        this.createdAt = createdAt;
        this.lessons = lessons;
        this.quizs = quizs;
        this.documents = documents;
        this.certificate = certificate;
        this.discount = discount;
        this.category = category;
        this.completedLesson = completedLesson;
        this.totalLesson = totalLesson;
        this.completionPercentage = completionPercentage;
    }

    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            id: this.id,
            courseName: this.courseName,
            description: this.description,
            avatar: this.avatar,
            trailer: this.trailer,
            level: this.level,
            priceEntered: this.priceEntered,
            priceAfterReduce: this.priceAfterReduce,
            courseDuration: this.courseDuration,
            quantity: this.quantity,
            createdAt: this.createdAt,
            certificate: this.certificate,
            discount: this.discount,
            category: this.category,
            lessons: this.lessons,
            quizs: this.quizs,
            documents: this.documents
        };
    }

    static fromCourseDetailResponse(data) {
        return new CourseDetailDto(
            data.id,
            data.courseName,
            data.description,
            data.avatar,
            data.trailer,
            data.level,
            data.priceEntered,
            data.priceAfterReduce,
            data.courseDuration,
            data.quantity,
            new Date(data.createdAt), // Chuyển đổi sang kiểu Date
            data.completedLesson,
            data.totalLesson,
            data.completionPercentage,
            data.certificate,
            data.discount,
            data.category,
            data.lessons,
            data.quizs,
            data.documents
        );
    }
}

export default CourseDetailDto;