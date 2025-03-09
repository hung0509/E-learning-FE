
const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="hover">
        <div className="carousel-inner rounded">
            <div className="carousel-item active">
                <img className="d-block w-100" src="https://th.bing.com/th/id/OIP.ZKmZKD4N07UyIdAi6UckxQHaCq?w=800&h=288&rs=1&pid=ImgDetMain" alt="Second slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="https://static.vecteezy.com/system/resources/previews/000/381/578/original/vector-abstract-colorful-wave-banner-background.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="https://static.vecteezy.com/system/resources/previews/000/381/988/original/vector-abstract-colorful-dotted-banner-background.jpg" alt="Third slide" />
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