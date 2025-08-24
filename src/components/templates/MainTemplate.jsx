import { AuthProvider } from "@/context/AuthContext";
import Header from "../organisms/Header";

const MainTemplate = ({ children }) => {
  return (
    <AuthProvider>
      <Header />
      <main className="p-4 md:px-28 max-w-7xl mx-auto">{children}</main>
    </AuthProvider>
  );
};

export default MainTemplate;
