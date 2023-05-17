const NewsLetter = () => {
  return (
    <div className="news-letter-container flex flex-column gap-3 bt-white bt-white">
      <div className="text-[16px] medium fontWeight-500 opacity-[.98] ">
        Newsletter
      </div>
      <div className="text-[12px] light text-gray-300 ">
        Get the latest Saas products news directly to your inbox!
      </div>
      <input
        type="text"
        className="text-black lg:w-[278px] lg:h-[36px] md:w-[300px] md:h-[36px] rounded-[6px] px-[10px] py-[5px] "
        placeholder="Your Email"
        required
      />
      <button
        type="text"
        className="text-white light lg:w-[278px] lg:h-[36px] md:w-[300px] md:h-[36px] rounded-[6px] px-[10px] py-[5px] bg-[#ef4823] transition duration-250 hover:bg-[#ca391c] active:bg-[#b32712] "
      >
        Subscribe to news letter
      </button>
    </div>
  );
};

export default NewsLetter;
