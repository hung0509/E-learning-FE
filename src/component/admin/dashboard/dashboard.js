import LineChart from '../../chart/line-chart/line-chart';
import PolarAreaChart from '../../chart/pola-chart/pola-chart';
import './dashboard.css';
const Dashboard = () => {

    return (<div className='px-5'>
        <div class="app-header d-flex align-items-center">
            <div class="d-flex py-2">
                <a href="">Home</a>
                <i class="bi bi-chevron-right fs-5 px-2"></i>
                <a href="">Dashboard</a>
            </div>
        </div>

        <div class="container-fluid pt-4 px-4">
            <h4>Dashboard</h4>
            <div class="row g-4">
                <div class="col-sm-6 col-xl-3">
                    <div class="h-100 border bg-light rounded d-flex align-items-end justify-content-between p-4">
                        <div class="ms-3">
                            <p class="mb-2">Tổng số Khóa học</p>
                            <h6 class="mb-0">92 khóa học mới</h6>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <div class="h-100 border bg-light rounded d-flex align-items-end justify-content-between p-4">
                        <div class="ms-3">
                            <p class="mb-2">Tổng số người dùng</p>
                            <h6 class="mb-0">8.263K</h6>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <div class="h-100 border bg-light rounded d-flex align-items-end justify-content-between p-4">
                        <div class="ms-3">
                            <p class="mb-2">Tổng số Blog</p>
                            <h6 class="mb-0">2.352</h6>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <div class="h-100 border bg-light rounded d-flex align-items-end justify-content-between p-4">
                        <div class="ms-3">
                            <p class="mb-2">Người hướng dẫn</p>
                            <h6 class="mb-0">8K</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row my-3">
            <div class="col-sm-12 col-xl-9">
                <LineChart />
            </div>
            <div class="col-sm-12 col-xl-3 align-content-center fs-5 ">
                <p className='opacity-75 fw-bold  rounded p-5 shadow'>  The graph shows the number of views per month by user. 
                This data helps track changes in traffic over different months.</p>
            </div>
        </div>

        <div class="row d-flex justify-content-between my-3">
            <div class="col-sm-12 col-xl-8 align-content-center fs-5 rounded ">
                <p className='opacity-75 fw-bold p-5 shadow'>  The graph shows the number of views per month by user. 
                This data helps track changes in traffic over different months.</p>
            </div>
            <div class="col-sm-12 col-xl-4">
                <PolarAreaChart />
            </div>
        </div>
    </div>);
}

export default Dashboard;
