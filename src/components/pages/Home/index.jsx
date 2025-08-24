import About from "./About";
import Clients from "./Clients";
import Stat from "./Stat";

const HomePage = () => {
  return (
    <>
      <section className="grid lg:grid-cols-3 lg:gap-12">
        <About />
        <Stat />
      </section>
      <Clients />
    </>
  );
};

export default HomePage;
