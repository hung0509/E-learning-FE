class UserInfoDto {
    constructor(
        id,
        firstName,
        lastName,
        gender,
        dateOfBirth,
        address,
        email,
        phone,
        balance,
        avatar,
        createdAt,
        courses = [],
        articles = [],
    ) {
        this.id = id;
        this.firstName =  firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.balance = balance;
        this.avatar = avatar;
        this.courses = courses;
        this.createdAt = createdAt;
        this.articles = articles;
    }

    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            gender: this.gender,
            dateOfBirth: this.dateOfBirth,
            address: this.address,
            email: this.email,
            phone: this.phone,
            balance: this.balance,
            avatar: this.avatar,
            courses: this.courses,
            articles: this.articles,
            createdAt: this.createdAt
        };
    }

    static fromUserInfoResponse(data) {
        return new UserInfoDto(
            data.id,
            data.firstName,
            data.lastName,
            data.gender,
            data.dateOfBirth,
            data.address,
            data.email,
            data.phone,
            data.balance,
            data.avatar,
            data.createdAt,
            data.courses,
            data.articles,
        );
    }
}

export default UserInfoDto;