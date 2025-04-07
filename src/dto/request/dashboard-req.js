
class DashBoardDto{
    constructor(
        amountUser = 0,
        amountCourse = 0,
        amountArticle = 0,
        amountTeacher = 0,
        amountUserEMonth = [],
    ) {
        this.amountUser = amountUser;
        this.amountCourse = amountCourse;
        this.amountArticle =  amountArticle;
        this.amountTeacher = amountTeacher;
        this.amountUserEMonth = amountUserEMonth;
    }

    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            amountUser: this.amountUser,
            amountCourse: this.amountCourse,
            amountArticle: this.amountArticle,
            amountTeacher: this.amountTeacher,
            amountUserEMonth: this.amountUserEMonth,
        };
    }

    static fromJson(json) {
        return new DashBoardDto(
            json.amountUser,
            json.amountCourse,
            json.amountArticle,
            json.amountTeacher,
            json.amountUserEMonth,
        )
    }
}

export default DashBoardDto;