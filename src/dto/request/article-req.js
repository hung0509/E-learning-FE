class ArticleDto {
    constructor(
        id,
        title = '',
        content = '',
        description = '',
        image = null,
        instructorId,
        publishedDate,
        status,
        fullName
    ) {
        this.id = id;
        this.description = description;
        this.title = title;
        this.content = content;
        this.image =  image;
        this.instructorId = instructorId;
        this.publishedDate = publishedDate;
        this.status = status;
        this.fullName = fullName;
    }

    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            id: this.id,
            description: this.description,
            title: this.title,
            content: this.content,
            image: this.image,
            instructorId: this.instructorId,
            publishedDate: this.publishedDate,
            status: this.status,
            fullName: this.fullName,
        };
    }

    static fromArticleResponse(data) {
        return new ArticleDto(
          data.id,
          data.title,
          data.content,
          data.description,
          data.image,
          data.instructorId,
          data.publishedDate,
          data.status,
        );
    }

    static fromArticleUserResponse(data) {
        return new ArticleDto(
          data.id,
          data.title,
          data.content,
          data.description,
          data.image,
          data.instructorId,
          data.publishedDate,
          data.status,
        );
    }
}

export default ArticleDto;