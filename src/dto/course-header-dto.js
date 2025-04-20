class CourseHeaderDto{
    constructor(
        id,
        instructorId,
        courseName ,
        fullName,
        description,
        avatar,
        userAvatar,
        trailer,
        priceEntered,
        priceAfterReduce,
        level,
        courseDuration,
        quantity,
        createdAt,
        certificate ,
        discount,
        category ,
    ) {
        this.id = id;
        this.instructorId = instructorId;
        this.courseName = courseName;
        this.fullName = fullName
        this.description = description;
        this.avatar = avatar;
        this.userAvatar = userAvatar;
        this.trailer = trailer;
        this.priceEntered = priceEntered;
        this.priceAfterReduce = priceAfterReduce;
        this.level = level;
        this.courseDuration = courseDuration;
        this.quantity = quantity;
        this.createdAt = createdAt;
        this.certificate = certificate;
        this.discount = discount;
        this.category = category;
    }

    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            id: this.id,
            instructorId: this.instructorId,
            courseName: this.courseName,
            fullName: this.fullName,
            description: this.description,
            avatar: this.avatar,
            userAvatar: this.userAvatar,
            trailer: this.trailer,
            priceEntered: this.priceEntered,
            priceAfterReduce: this.priceAfterReduce,
            level: this.level,
            courseDuration: this.courseDuration,
            quantity: this.quantity,
            createdAt: this.createdAt,
            certificate: this.certificate,
            discount: this.discount,
            category: this.category
        };
    }

    static fromCourseHeaderResponse(data) {
        return new CourseHeaderDto(
            data.id,
            data.instructorId,
            data.courseName,
            data.fullName,
            data.description,
            data.avatar,
            data.userAvatar,
            data.trailer,
            data.priceEntered,
            data.priceAfterReduce,
            data.level,
            data.courseDuration,
            data.quantity,
            data.createdAt, // Chuyển đổi sang kiểu Date
            data.certificate,
            data.discount,
            data.category
        );
    }
}

export default CourseHeaderDto;