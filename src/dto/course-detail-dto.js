class CourseDetailDto{
    constructor(
        id,
        courseName ,
        description,
        avatar,
        trailer,
        level,
        priceEntered,
        priceAfterReduce,
        courseDuration,
        quantity,
        createdAt,
        lessons = []
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
            lessons: this.lessons
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
            data.lessons
        );
    }
}

export default CourseDetailDto;