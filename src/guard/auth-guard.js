import { Navigate } from 'react-router-dom';
import { showInfo } from '../service/toast';
import { AccountService } from '../service/account-service';

const ProtectedRoute = ({ children }) => {
  const roles = AccountService.getFirstRoleFromToken();

  if (roles?.includes("ROLE_ADMIN")) {
    return children;
  }

  showInfo("Bạn không đủ quyền để truy cập vào trang này!");

  return <Navigate to="/404" replace />;
};

export default ProtectedRoute;
