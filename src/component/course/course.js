import './course.css';

const Course = () => {
    return (<div
        className="course card text-dark card-has-bg click-col">
        <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
                <h4 className="card-title mt-0">
                    <a className="text-dark" href="">
                        <img src="https://th.bing.com/th/id/OIP.4Z6gIWroOVvUsziZcJKL6QHaFj?rs=1&pid=ImgDetMain" alt="" />
                    </a>
                </h4>   
                <div className="card-meta text-dark mb-2 fw-bold">Thought Leadership</div>
                <div className='d-flex justify-content-between' style={{fontSize: "13px"}}>
                    <i class="bi bi-stopwatch">October 15, 2020</i>
                    <i class="bi bi-currency-dollar">20$</i>
                </div>
            </div>
            <div className="card-footer">
                <div className="media d-flex justify-content-between" style={{alignItems: "center"}}>
                    <img
                        className="mr-3 rounded-circle"
                        src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80"
                        alt="Generic placeholder image"
                        style={{ maxWidth: '50px' }}
                    />
                    <div className="media-body">
                        <h6 className="my-0 text-dark d-block">Oz Coruhlu</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Course;