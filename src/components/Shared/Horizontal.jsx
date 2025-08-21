const Horizontal = ({ width, top, bottom }) => {
  return (
    <div
      className={`w-${width} h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent absolute z-30 left-1/2 -translate-x-1/2 top-${top} bottom-${bottom}`}
    />
  );
};

export default Horizontal;
