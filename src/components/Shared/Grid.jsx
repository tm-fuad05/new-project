const Grid = ({ vertical, horizontal }) => {
  return (
    <div>
      {/* Square grid lines */}
      <div className="absolute inset-0 pointer-events-none z-10 grid grid-cols-4 grid-rows-4 w-full h-full">
        {/* Vertical lines */}
        {[...Array(vertical)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 border-l border-[#1a1a1a]"
            style={{ left: `${(100 / vertical) * i}%` }}
          />
        ))}
        {/* Horizontal lines */}
        {[...Array(horizontal)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 border-t border-[#1a1a1a]"
            style={{ top: `${(100 / horizontal) * i}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
