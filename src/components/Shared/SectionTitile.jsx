import Horizontal from "./Horizontal";

const SectionTitile = ({ subtitle, title }) => {
  return (
    <div className="lg:w-7/12 mx-auto mb-10 text-center">
      <p className="text-sm lg:text-md text-primary">{subtitle}</p>
      <h2 className="text-3xl lg:text-6xl leading-tight text-white mb-5">
        {title}
      </h2>
      <Horizontal width={"7/12"} />
    </div>
  );
};

export default SectionTitile;
