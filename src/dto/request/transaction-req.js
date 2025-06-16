class TransactionRequest{
    constructor(
        fromBalance,
        toBalance,
        statusPayment
    ){
        this.fromBalance = fromBalance;
        this.toBalance = toBalance;
        this.statusPayment = statusPayment;
    }

    toQueryParams() {
        const params = new URLSearchParams();

        if (this.fromBalance) params.append('fromBalance', this.fromBalance);
        if (this.toBalance) params.append('toBalance', this.toBalance);
        if (this.statusPayment != 'ALL') params.append('statusPayment', this.statusPayment);

        return params.toString(); // Trả về: categoryId=2&courseName=test ...
    }
}

export default TransactionRequest;