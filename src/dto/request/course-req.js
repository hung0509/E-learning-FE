class CourseDto{
        constructor(
            instructorId = 0,
            categoryId = 1,
            courseName = '',
            description = '',
            avatar = null,
            trailer = null,
            priceEntered = 0,
            certificateName = '',
            level = 'BEGINNER',
            lessons = [],
        ) {
            this.instructorId = instructorId;
            this.categoryId = categoryId;
            this.courseName = courseName;
            this.description = description;
            this.avatar = avatar;
            this.trailer = trailer;
            this.priceEntered = priceEntered;
            this.certificateName = certificateName;
            this.level = level;
            this.lessons = lessons;
        }
    
    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            instructorId: this.instructorId,
            categoryId: this.categoryId,
            courseName: this.courseName,
            description: this.description,
            avatar: this.avatar,
            trailer: this.trailer,
            priceEntered: this.priceEntered,
            certificateName: this.certificateName,
            lessons: this.lessons,
            level: this.level
        };
    }
}

export default CourseDto;