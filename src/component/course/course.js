import './course.css';

const Course = ({data}) => {
    const formatSecondsToHMS = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
      
        const padded = (num) => String(num).padStart(2, '0');
        return `${padded(hours)}:${padded(minutes)}:${padded(seconds)}`;
      }
      

    return (<div
        className="course card text-dark card-has-bg click-col w-75 m-auto">
        <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
                <h4 className="card-title mt-0">
                    <a className="text-dark" href="">
                        <img style={{height: '200px'}} src={data.avatar} alt="" />
                    </a>
                </h4>   
                <div className="card-meta text-dark mb-2 fw-bold">{data.courseName}</div>
                <div className='d-flex justify-content-between info' style={{fontSize: "13px"}}>
                    <i class="bi bi-stopwatch"><span className='px-3'>{formatSecondsToHMS(data.courseDuration)}</span></i>
                    <i class="bi bi-currency-dollar">{data.priceEntered}</i>
                </div>
                <div className='p-3 text-muted'>{data.description}</div>
            </div>
            <div className="card-footer">
                <div className="media d-flex justify-content-between" style={{alignItems: "center"}}>
                    <img
                        className="mr-3 rounded-circle"
                        src={data.userAvatar || 'https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg'}
                        alt="Generic placeholder image"
                        style={{ maxWidth: '50px' }}
                    />
                    <div className="media-body">
                        <h6 className="my-0 text-dark d-block">{data.fullName}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Course;