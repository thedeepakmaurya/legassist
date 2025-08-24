import { analytics } from "@/constants/analytics";

const Stat = () => {
  return (
    <div className="mt-8 lg:mt-2 flex flex-col gap-2 md:gap-4">
      <div className="grid grid-cols-2 gap-10 lg:gap-0">
        {analytics.map(({ title, stat }) => (
          <div key={title} className="">
            <h3 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {stat}
            </h3>
            <p className="text-gray-600">{title}</p>
          </div>
        ))}
      </div>
      <hr className="border-light-gray w-full" />
      <div className="col-span-2 flex items-center gap-1">
        <div>
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <i key={i} className="ri-star-s-fill ri-xl text-amber-300"></i>
            ))}
          <i className="ri-star-half-line ri-lg text-amber-300"></i>
        </div>
        <p className="text-xl font-semibold">
          4.5
          <span className="pl-1 text-base font-normal text-gray-600">
            Average rating
          </span>
        </p>
      </div>
    </div>
  );
};

export default Stat;
