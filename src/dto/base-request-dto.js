class BaseRequestDto {
    constructor(
        page = 0,
        pageSize = 5,
        totalPage = 1,
        totalItems = 0
    ) {
        this.page = page;
        this.pageSize = pageSize;
        this.totalPage = totalPage;
        this.totalItems = totalItems;
    }

    // Hàm tùy chọn để chuyển đổi sang JSON
    toJSON() {
        return {
            page: this.page,
            pageSize: this.password,
            totalPage: this.totalPage,
            totalItems: this.totalItems
        };
    }

    static fromBaseRequestResponse(data) {
        return new BaseRequestDto(
          data.currentPage,
          data.pageSize,
          data.totalPages,
          data.totalItems,
        );
    }

}

export default BaseRequestDto;
