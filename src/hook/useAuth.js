import { AuthContext } from "../context/auth-context";
import { AuthService } from "../service/authentication-service";
import { showError, showSuccess } from "../service/toast";
import { jwtDecode } from 'jwt-decode';
import { useContext } from "react";

export const useAuth = () => {
  const { setUserId } = useContext(AuthContext);

  const handleLogin = async (credentials) => {
    try {
      const data = await AuthService.login(credentials);
      if (data.code === 0) {
        setUserId(extractUserId(data.result.token));
        showSuccess("Đăng nhập thành công" + extractUserId(data.result.token));
        window.location.href = "/";
      } else {
        showError("Tên đăng nhập hoặc mật khẩu không chính xác");
      }
    } catch (err) {
      showError(err.message);
      throw err;
    }
  };

  const handleLoginByGoogle = async (credentials) => {
    try {
      const data = await AuthService.loginByGoogle(credentials);
      if (data.code === 0) {
        setUserId(extractUserId(data.result.token));
        // showSuccess("Đăng nhập thành công");
        window.location.href = "/";
      } else {
        showError("Looix");
      }
    } catch (err) {
      showError(err.message);
      throw err;
    }
  };

  const handleLogOut = async () => {
    sessionStorage.removeItem('userId');
    setUserId(null);
    await AuthService.logout();
    window.location.href = '/sign-in';
  }

  const extractUserId = (token) => {
    return jwtDecode(token).userId;
  }

  return { handleLogin, handleLogOut, handleLoginByGoogle };
};

