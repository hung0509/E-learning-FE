class ArticleDto {
    constructor(
        title = '',
        content = '',
        image = null,
        instructorId = 0,
    ) {
        this.title = title;
        this.content = content;
        this.image =  image;
        this.instructorId = instructorId;
    }

    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            title: this.title,
            content: this.content,
            image: this.image,
            instructorId: this.instructorId,
        };
    }
}

export default ArticleDto;