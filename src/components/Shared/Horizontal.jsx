const Horizontal = ({ width }) => {
  return (
    <div
      className={`w-${width} h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent absolute z-20 left-1/2 -translate-x-1/2  `}
    />
  );
};

export default Horizontal;
