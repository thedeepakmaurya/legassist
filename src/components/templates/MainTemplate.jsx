import Header from "../organisms/Header";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main className="md:px-28 p-4">{children}</main>
    </>
  );
};

export default MainTemplate;
