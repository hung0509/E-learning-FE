class AuthDto {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            username: this.username,
            password: this.password
        };
    }
}

export default AuthDto;
