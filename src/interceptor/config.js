import axios from "axios";

// Tạo một instance của axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/elearning-service", // Thay thế bằng URL API của bạn
  withCredentials: true
});

axiosInstance.interceptors.request.use((config) => {
  const nonAuthEndpointsPost = ["/auth", "/auth/logout", "/accounts", "/auth/reset"]; // Các endpoint không cần xác thực
  const nonAuthEndpointsGet = ["/articles/**", "/courses/**"];

  // Lấy đường dẫn của URL hiện tại
  const url = new URL(config.url, config.baseURL);
  const path = url.pathname; // Ví dụ: "/elearning-service/auth/login"

  console.log(path);

  // Kiểm tra nếu đường dẫn bắt đầu bằng /auth và phương thức là POST
  const isNonAuthRequest = nonAuthEndpointsPost.some(endpoint => path.startsWith("/elearning-service" + endpoint)) &&
    "post".includes(config.method.toLowerCase() &&
  path !== "/elearning-service/accounts/update");

  const isNonAuthGet = nonAuthEndpointsGet.some(ep => {
    const prefix = ep.replace("/**", ""); // xử lý wildcard
    return path.startsWith("/elearning-service" + prefix);
  }) &&  "get".includes(config.method.toLowerCase());

  if (!isNonAuthRequest && !isNonAuthGet) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return config;
});

export default axiosInstance;
