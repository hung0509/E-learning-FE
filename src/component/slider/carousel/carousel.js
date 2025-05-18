
const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="hover">
        <div className="carousel-inner rounded">
            <div className="carousel-item active">
                <img style={{minWidth: '100%',maxHeight: '400px'}} className="d-block" src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png" alt="Second slide" />
            </div>
            <div className="carousel-item">
                <img style={{minWidth: '100%',maxHeight: '400px'}} className="d-block" src="https://files.fullstack.edu.vn/f8-prod/courses/19/66aa28194b52b.png" alt="First slide" />
            </div>
            <div className="carousel-item">
                <img style={{minWidth: '100%',maxHeight: '400px'}} className="d-block " src="https://files.fullstack.edu.vn/f8-prod/courses/27/64e184ee5d7a2.png" alt="Third slide" />
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
    </div>
    )
}

export default Carousel;