import Header from "../organisms/Header";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default MainTemplate;
