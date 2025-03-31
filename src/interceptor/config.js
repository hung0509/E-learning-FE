import axios from "axios";

// Tạo một instance của axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/elearning-serivce", // Thay thế bằng URL API của bạn
});

axiosInstance.interceptors.request.use((config) => {
  // Danh sách các endpoint không cần xác thực
  const nonAuthEndpoints = [];

  // Danh sách các phương thức không cần xác thực
  const nonAuthMethods = ["POST"]; // GET không cần xác thực (có thể thêm các phương thức khác)

  // Kiểm tra URL và phương thức
  if (
    nonAuthEndpoints.some((endpoint) => config.url.includes(endpoint)) &&
    nonAuthMethods.includes(config.method.toLowerCase())
  ) {
    return config; // Nếu URL và phương thức không cần xác thực, bỏ qua thêm token
  }

  // Ngược lại, thêm Authorization token
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;

  