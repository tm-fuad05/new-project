const Horizontal = ({ width }) => {
  return (
    <div
      className={`w-${width} h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto
      `}
    />
  );
};

export default Horizontal;
