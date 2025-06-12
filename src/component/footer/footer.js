import './footer.css';

const Footer = () => {
    return (<footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Trang chủ</a></li>
          <li class="nav-item"><a href="/course" class="nav-link px-2 text-muted">Khóa học</a></li>
          <li class="nav-item"><a href="/article" class="nav-link px-2 text-muted">Bài viết</a></li>
          <li class="nav-item"><a href="/about-us" class="nav-link px-2 text-muted">Về chúng tôi</a></li>
        </ul>
        <p class="text-center text-muted">© 2021 Company, Inc</p>
      </footer>);
}

export default Footer;