class CategoryDto{
    constructor(
       id,
       categoryName
    ) {
        this.id = id;
        this.categoryName = categoryName;
    }

    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            id: this.id,
            categoryName: this.categoryName,
        };
    }

    static fromJson(json) {
        return new CategoryDto(
            json.id,
            json.categoryName,
        )
    }
}

export default CategoryDto;