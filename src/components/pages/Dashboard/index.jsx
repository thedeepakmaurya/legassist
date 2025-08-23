import Profile from "./Profile";
import Queries from "./Queries";

const Dashboard = () => {
  return (
    <section className="mt-8 grid grid-cols-1 md:grid-cols-8 gap-10">
      <Profile />
      <Queries />
    </section>
  );
};

export default Dashboard;
