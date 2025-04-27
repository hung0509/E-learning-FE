import { authenticationApi } from '../api/authentication-api';
import { MESSAGES } from '../constant/message';

export const AuthService = {
  login: async (credential) => {
    try {
      const data = await authenticationApi.login(credential);
      console.log(data);

      const { code, result } = data;

      if (code !== 0) {
        return {
          code: code,
          message: "Tài khoản hoặc mật khẩu chưa chính xác!",
        };
      }

      // ✅ Xử lý logic FE nếu cần, ví dụ:
      localStorage.setItem("token", result.token);

      return {
        code: 0,
        result: result,
      };

    } catch (err) {
      const message = err.response?.data?.message || MESSAGES.ERROR_SERVICE;
      return {
        code: false,
        message,
      };
    }
  },

  logout: async () => {
     try {
      const token = localStorage.getItem("token");

      if (token) {
        await authenticationApi.logout({token: token});
      }
    } catch (err) {
      console.log("Error logout api:", err);
    }
    localStorage.removeItem("token"); 
  },

  loginByGoogle: async (credential) => {
    try {
      const data = await authenticationApi.loginByGoogle(credential);
      console.log(data);

      const { code, result } = data;

      if (code !== 0) {
        return {
          code: code,
          message: "Tài khoản hoặc mật khẩu chưa chính xác!",
        };
      }

      // ✅ Xử lý logic FE nếu cần, ví dụ:
      localStorage.setItem("token", result.token);
      

      return {
        code: 0,
        result: result,
      };

    } catch (err) {
      const message = err.response?.data?.message || MESSAGES.ERROR_SERVICE;
      return {
        code: false,
        message,
      };
    }
  },
}
