import './admin-left-bar.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

const AdminLeftbar = () => {
  const location = useLocation();

  return (
    <div className="admin-left-bar d-flex flex-column flex-shrink-0 p-3 bg-light border" style={{ width: '280px' }} >
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <i className="custom-logo bi bi-alexa px-3">Orace</i>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="/admin" className={`nav-link ${location.pathname === '/admin' ? '' : 'link-dark'}`} aria-current="page" style={{fontWeight: '600'}}>
            <i className="bi bi-house-fill mx-2"></i>
            Bảng điều khiển
          </a>
        </li>
        <li>
          <a href="/admin/course" className={`nav-link ${location.pathname === '/admin/course' ? '' : 'link-dark'}`} style={{fontWeight: '600'}}>
            <i className="bi bi-book-fill mx-2"></i>
            Khóa học
          </a>
        </li>
        <li>
          <a href="/admin/transaction" className={`nav-link ${location.pathname === '/admin/transaction' ? '' : 'link-dark'}`} style={{fontWeight: '600'}}>
            <i class="bi bi-bookmark-fill mx-2"></i>
            Lịch sử giao dịch
          </a>
        </li>
        <li>
          <a href="/admin/user" className={`nav-link ${location.pathname === '/admin/user' ? '' : 'link-dark'}`} style={{fontWeight: '600'}}>
            <i className="bi bi-people-fill mx-2"></i>
            Người dùng
          </a>
        </li>
        <li>
          <a href="/admin/article" className={`nav-link ${location.pathname === '/admin/article' ? '' : 'link-dark'}`} style={{fontWeight: '600'}}>
            <i className="bi bi-newspaper mx-2"></i>
            Bài viết
          </a>
        </li>
        <li>
          <a href="/admin/discount" className={`nav-link ${location.pathname === '/admin/discount' ? '' : 'link-dark'}`} style={{fontWeight: '600'}}>
            <i className="bi bi-ticket-fill mx-2"></i>
            Phiếu giảm giá
          </a>
        </li>
      </ul>
      <div className="dropdown">
        <hr />
        <a href="/logout" className="nav-link link-dark rounded p-3 fs-5" style={{fontWeight: '600'}}>
          <i className="bi bi-box-arrow-in-left mx-2"></i>
          Đăng xuất
        </a>
      </div>
    </div>
  );
}

export default AdminLeftbar;
