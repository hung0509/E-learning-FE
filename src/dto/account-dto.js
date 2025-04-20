class AccountDto {
    constructor(
        username = '',
        password = '',
        firstName = '',
        lastName = '',
        email = '',
        phone = ''
    ) {
        this.username = username;
        this.password = password;
        this.firstName =  firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }

    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone
        };
    }
}

export default AccountDto;