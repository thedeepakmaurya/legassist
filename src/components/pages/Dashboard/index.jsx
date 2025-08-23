import Profile from "./Profile";
import Queries from "./Queries";

const Dashboard = () => {
  return (
    <section className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-8">
      <Profile />
      <Queries />
    </section>
  );
};

export default Dashboard;
