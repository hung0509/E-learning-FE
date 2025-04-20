class CourseRequest{
    constructor(
        categoryId,
        courseName = '',
        courseStatus = '',
        level= ''
    ){
        this.categoryId = categoryId;
        this.courseName = courseName;
        this.courseStatus = courseStatus;
        this.level = level;
    }

    toQueryParams() {
        const params = new URLSearchParams();

        if (this.categoryId !== '0') params.append('categoryId', this.categoryId);
        if (this.courseName) params.append('courseName', this.courseName);
        if (this.courseStatus !== 'ALL') params.append('courseStatus', this.courseStatus);
        if (this.level !== 'ALL') params.append('level', this.level);

        return params.toString(); // Trả về: categoryId=2&courseName=test ...
    }
}

export default CourseRequest;