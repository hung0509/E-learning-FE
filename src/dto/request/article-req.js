class TitleRequest{
    constructor(
        title,
        fullNames = [],
    ){
        this.title = title;
        this.fullNames = fullNames;
    }

    toQueryParams() {
        const params = new URLSearchParams();

        if (this.title) params.append('title', this.title);
        if (this.fullNames) params.append('fullNames', this.fullNames);

        return params.toString(); // Trả về: categoryId=2&courseName=test ...
    }
}

export default TitleRequest;