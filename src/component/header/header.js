import { useContext, useState } from 'react';
import './header.css';
import { AuthContext } from '../../context/auth-context';
import { useAuth } from '../../hook/useAuth';


const Header = () => {
  const [isLogin, setIsLogin] = useState(() => {
    return localStorage.getItem("userId") || null; // Mặc định là false nếu không tìm thấy giá trị
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { handleLogOut } = useAuth();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickLogOut = async () => {

    await handleLogOut();
  }

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

      {isLogin === null ?
        (<div class="col-md-3 text-end">
          <a href='/register' type="button" class="mx-3 link-dark text-decoration-none">Đăng ký</a>
          <a style={{ borderRadius: '18px' }} href='/sign-in' type="button" class="btn btn-custom">Đăng nhập</a>
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
            style={isDropdownOpen ? { position: 'absolute', margin: '0px', transform: 'translate(30px, 32px)', left: '-112px', top: '18px' } : {}}
          >
            <li><a className="dropdown-item" href="/article/post">Tạo bài viết</a></li>
            <li><a className="dropdown-item" href="/my-info">Thông tin cá nhân</a></li>
            <li><a className="dropdown-item" href="/article/post">Đổi mật khẩu</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li onClick={handleClickLogOut}><button className="dropdown-item">Đăng xuất</button></li>
          </ul>
        </div>)
      }
    </header>
  );
}

export default Header;