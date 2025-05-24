import { AuthContext } from "../context/auth-context";
import { AuthService } from "../service/authentication-service";
import { showError, showSuccess, showWarning } from "../service/toast";
import { jwtDecode } from 'jwt-decode';
import { useContext } from "react";

export const useAuth = () => {
  const { setUserId } = useContext(AuthContext);

  const handleLogin = async (credentials) => {
    try {
      const data = await AuthService.login(credentials);

      console.log(data);
      if (data.code === 0) {
        setUserId(extractUserId(data.result.token));
        showSuccess("Đăng nhập thành công");
        window.location.href = "/";
      } else if (data.code === 12222){
        showWarning("Tài khoản chưa được kích hoạt!");
      }else{
        showError("Tên đăng nhập hoặc mật khẩu chưa chính xác!");
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

