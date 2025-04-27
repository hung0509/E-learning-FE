class ArticleRequest{
    constructor(
        title,
        fullNames = [],
        status
    ){
        this.title = title;
        this.fullNames = fullNames;
        this.status = status;
    }

    toQueryParams() {
        const params = new URLSearchParams();

        if (this.title) params.append('title', this.title);
        if (this.fullNames) params.append('fullNames', this.fullNames);
        if (this.status != 'ALL') params.append('status', this.status);

        return params.toString(); // Trả về: categoryId=2&courseName=test ...
    }
}

export default ArticleRequest;