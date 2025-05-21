
class DocumentDto{
    constructor(
        id ,
        courseId,
        documentName,
        documentUrl = null,
        fileType
    ) {
        this.id = id;
        this.courseId = courseId;
        this.documentName =  documentName;
        this.documentUrl = documentUrl;
        this.fileType = fileType;
    }

    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            id: this.id,
            courseId: this.courseId,
            documentName: this.documentName,
            documentUrl: this.documentUrl,
            fileType: this.fileType,
        };
    }

    static fromJson(json) {
        return new DocumentDto(
            json.id,
            json.courseId,
            json.documentName,
            json.documentUrl,
            json.fileType,
        )
    }
}

export default DocumentDto;