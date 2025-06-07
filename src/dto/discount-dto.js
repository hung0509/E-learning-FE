
class DiscountDto{
    constructor(
        id ,
        discountCode,
        discountDescription,
        discountRate, 
        isActive,
        expiredDate
    ) {
        this.id = id;
        this.discountCode = discountCode;
        this.discountDescription =  discountDescription;
        this.discountRate = discountRate;
        this.isActive = isActive;
        this.expiredDate = expiredDate;
    }

    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            id: this.id,
            discountCode: this.discountCode,
            discountDescription: this.discountDescription,
            discountRate: this.discountRate,
            isActive: this.isActive,
            expiredDate: this.expiredDate
        };
    }

    static fromJson(json) {
        return new DiscountDto(
            json.id,
            json.discountCode,
            json.discountDescription,
            json.discountRate,
            json.isActive,
            json.expiredDate
        )
    }
}

export default DiscountDto;