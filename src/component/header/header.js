import { useState } from 'react';
import './header.css';


const Header = () => {
    const [isLogin, setLogin] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between p-3 border-bottom">
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <i class="custom-logo bi bi-alexa px-3"></i>
            </a>

            <div class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 w-50">
                <div class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 w-75">
                    <input type="search" class="form-control " placeholder="Search..." aria-label="Search" />
                </div>
            </div>

            {!isLogin ?
                (<div class="col-md-3 text-end">
                    <a  href='/sign-in' type="button" class="btn me-2">Đăng ký</a>
                    <a style={{borderRadius: '18px'}} href='/register'type="button" class="btn btn-custom">Đăng nhập</a>
                </div>) :
                (<div className="d-flex flex-shrink-0 dropdown">
                    {/* <a className='btn px-3 cursor-pointer'>Khóa học của tôi</a> */}
                    <a
                      href="#"
                      className={`d-block link-dark text-decoration-none dropdown-toggle ${isDropdownOpen ? 'show' : ''}`}
                      id="dropdownUser2"
                      data-bs-toggle="dropdown"
                      aria-expanded={isDropdownOpen}
                      onClick={toggleDropdown}
                    >
                      <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                    </a>
                    <ul
                      className={`dropdown-menu text-small shadow ${isDropdownOpen ? 'show' : ''}`}
                      aria-labelledby="dropdownUser2"
                      style={isDropdownOpen ? { position: 'absolute', margin: '0px', transform: 'translate(30px, 32px)' } : {}}
                    >
                      <li><a className="dropdown-item" href="#">Profile</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                  </div>)
            }
        </header>
    );
}

export default Header;