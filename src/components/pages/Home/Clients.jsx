const Clients = () => {
  return (
    <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-6">
      {companies?.map((c, i) => (
        <p
          className="text-center text-3xl font-extrabold tracking-wide uppercase text-gray-300 md:text-4xl"
          key={i}
        >
          {c}
        </p>
      ))}
    </div>
  );
};

export default Clients;

const companies = [
  "Lexora",
  "JurisAI",
  "Veritas",
  "Couns",
  "Trust",
  "ClauseX",
];
