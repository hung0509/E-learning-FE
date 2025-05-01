class CommentDto {
    constructor(
        id,
        content,
        lessonId,
        isActive,
        userId,
        firstName,
        lastName,
        avatar,
        createdAt,
        updatedAt
    ) {
        this.id = id;
        this.firstName =  firstName;
        this.lastName = lastName;
        this.avatar = avatar;
        this.content = content;
        this.userId = userId;
        this.lessonId = lessonId;
        this.isActive = isActive;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            avatar: this.avatar,
            createdAt: this.createdAt,
            content: this.content,
            lessonId: this.lessonId,
            userId: this.userId,
            updatedAt: this.updatedAt,
            isActive: this.isActive
        };
    }

    static fromCommentDto(data) {
        return new CommentDto(
            data.id,
            data.content,
            data.lessonId,
            data.isActive,
            data.userId,
            data.firstName,
            data.lastName,
            data.avatar,
            data.createdAt,
            data.updatedAt
        );
    }
}

export default CommentDto;