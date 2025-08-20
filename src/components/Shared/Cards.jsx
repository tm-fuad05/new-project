const Cards = ({ src }) => {
  return (
    <div className="card-gradient-border">
      <div className="w-full shadow-md h-[350px] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group">
        <img
          src={src}
          alt="animated_card"
          className="w-full h-full object-cover transition-all duration-300 rounded-[20px]"
        />

        <div className="w-full h-full absolute top-0 left-0 rounded-[20px]  flex items-center justify-end pb-10 flex-col px-[20px] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-black/70">
          <p className="text-2xl text-white mt-3 opacity-85 hover:underline">
            View more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
