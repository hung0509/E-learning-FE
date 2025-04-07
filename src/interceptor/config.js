import axios from "axios";

// Tạo một instance của axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/elearning-service", // Thay thế bằng URL API của bạn
  withCredentials: true
});

axiosInstance.interceptors.request.use((config) => {
  const nonAuthEndpoints = ["/auth", "/auth/logout", "/accounts"]; // Các endpoint không cần xác thực
  const nonAuthMethods = ["post"]; // Các phương thức không cần xác thực (có thể mở rộng)

  // Lấy đường dẫn của URL hiện tại
  const url = new URL(config.url, config.baseURL);
  const path = url.pathname; // Ví dụ: "/elearning-service/auth/login"

  console.log(path);
  console.log(path.startsWith("/elearning-service" + nonAuthEndpoints[0]));

  // Kiểm tra nếu đường dẫn bắt đầu bằng /auth và phương thức là POST
  const isNonAuthRequest = nonAuthEndpoints.some(endpoint => path.startsWith("/elearning-service" + endpoint)) &&
                           nonAuthMethods.includes(config.method.toLowerCase());

  // Nếu không phải non-auth request, thêm Authorization token
  if (!isNonAuthRequest) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return config;
});

export default axiosInstance;
