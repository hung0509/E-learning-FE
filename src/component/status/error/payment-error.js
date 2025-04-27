import "./payment-error.css";

const PaymentError = () => {
    return (<div class="page-404 payment-error">
        <div class="outer">
            <div class="middle">
                <div class="inner">
                    <div class="inner-circle"><i class="fa fa-home"></i><span>404</span></div>
                    <span class="inner-status">Oops! You're lost</span>
                    <span class="inner-detail">
                        There is error in the system. Please try later!
                        <a routerLink="/" class="btn btn-info mtl"><i class="fa fa-home"></i>&nbsp;
                            Return home
                        </a> 
                    </span>
                </div>
            </div>
        </div>
    </div>);
}

export default PaymentError;