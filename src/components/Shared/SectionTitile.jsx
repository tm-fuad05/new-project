import Horizontal from "./Horizontal";

const SectionTitile = ({ subtitle, title }) => {
  return (
    <div className="w-7/12 mx-auto mb-10 text-center">
      <p className="text-md text-primary">{subtitle}</p>
      <h2 className="text-5xl leading-tight text-white">{title}</h2>
      <Horizontal />
    </div>
  );
};

export default SectionTitile;
