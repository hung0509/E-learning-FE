import './admin-left-bar.css';
const AdminLeftbar = () => {
    return (<div className="admin-left-bar d-flex flex-column flex-shrink-0 p-3 bg-light border" style={{width: '280px'}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <i className="custom-logo bi bi-alexa px-3">Orace</i>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link " aria-current="page">
            <i className="bi bi-house-fill mx-2"></i>
                Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
            <i class="bi bi-book-fill mx-2"></i>
                Courses
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
            <i class="bi bi-people-fill mx-2"></i>
                Users
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
            <i class="bi bi-newspaper mx-2"></i>
              Articles
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
            <i class="bi bi-ticket-fill mx-2"></i>
              Discounts
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
            <i class="bi bi-stack mx-2"></i>
              Instructors
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
            <i class="bi bi-tablet-landscape-fill mx-2"></i>
                Banners
            </a>
          </li>
        </ul>

        <div class="dropdown">
        <hr />
        <a href="#" className="nav-link link-dark  rounded p-3 fs-5">
            <i class="bi bi-box-arrow-in-left mx-2"></i>
            Log out</a>
        </div>
      </div>);
}

export default AdminLeftbar;