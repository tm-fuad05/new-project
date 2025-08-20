const Banner = () => {
  return (
    // Grid Lines Banner Component
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="relative min-h-screen overflow-hidden">
        {/* Blurry lights */}
        <div className="relative inset-0 pointer-events-none z-20">
          <div className="absolute z-10 right-0 blur-3xl opacity-15 -top-[200px] -right-[150px] w-[500px] h-[450px] rounded-full bg-primary" />
        </div>
        {/* Square grid lines */}
        <div className="absolute inset-0 pointer-events-none z-10 grid grid-cols-4 grid-rows-4 w-full h-full">
          {/* Vertical lines */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 border-l border-[#1a1a1a]"
              style={{ left: `${(100 / 8) * i}%` }}
            />
          ))}
          {/* Horizontal lines */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 right-0 border-t border-[#1a1a1a]"
              style={{ top: `${(100 / 4) * i}%` }}
            />
          ))}
        </div>
        {/* Your content here */}
        <div className="relative z-10">{/* ...hero content... */}</div>
      </div>
    </div>
  );
};

export default Banner;
