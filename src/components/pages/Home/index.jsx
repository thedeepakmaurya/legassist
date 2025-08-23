import About from "./About";
import Clients from "./Clients";
import Stat from "./Stat";

const HomePage = () => {
  return (
    <>
      <section className="grid md:grid-cols-3 md:gap-12">
        <About />
        <Stat />
      </section>
      <Clients />
    </>
  );
};

export default HomePage;
