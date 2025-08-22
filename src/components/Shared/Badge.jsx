import { GoDotFill } from "react-icons/go";

const Badge = ({ first, second }) => {
  return (
    <div>
      <div className="gradient-border w-fit">
        <div className="gradient-border-inner px-3 py-1 flex items-center gap-2 w-fit mx-auto">
          <GoDotFill className="text-white" />
          <p className="text-white text-xs lg:text-xl">
            {first}{" "}
            <span className="italic text-primary font-medium">{second}</span>
          </p>
        </div>
        {/* Header */}
      </div>
    </div>
  );
};

export default Badge;
