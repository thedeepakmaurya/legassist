import { AuthProvider } from "@/context/AuthContext";
import Header from "../organisms/Header";

const MainTemplate = ({ children }) => {
  return (
    <AuthProvider>
      <Header />
      <main className="container">{children}</main>
    </AuthProvider>
  );
};

export default MainTemplate;
