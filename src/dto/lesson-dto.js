class LessonDto{
    constructor(
        id,
        courseId,
        lessonName,
        urlLesson,
        description,
        lessonTime,
        isActive
    ) {
        this.id = id;
        this.courseId = courseId;
        this.lessonName =  lessonName;
        this.urlLesson = urlLesson;
        this.description = description;
        this.lessonTime = lessonTime;
        this.isActive = isActive;
    }


    static fromJson(json) {
        return new LessonDto(
            json.id,
            json.courseId,
            json.lessonName,
            json.urlLesson,
            json.description,
            json.lessonTime,
            json.isActive
        )
    }
}

export default LessonDto;