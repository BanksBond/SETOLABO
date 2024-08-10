function TextContainer() {
  return (
    <div className="mt-24 ml-12 flex items-center relative top-[26%]">
      <div className="flex flex-col">
        <h5 className="kalam ml-2">MAGGY MOON</h5>
        <div>
          <div className="kumbh-sans">
            <h1>JAPANESE BASED</h1>
            <h1>
              MODEL<span className="and"> & </span>STYLIST
            </h1>
          </div>
          <p className="nunito">
            Japanese-based model and stylist Maggy Moon expresses his style
            through vibrant colors and themed photo shoots. Her portfolio
            website has a playful vibe and shows visitors exactly who he is.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#FFA465] hover:bg-orange-200 nunito-but my-4 py-2 px-6 text-white">
            Gallery
          </button>
          <button className="border-[#FFA465] hover:bg-[#FFA465] border-[1px] nunito-but my-4 py-2 px-6 text-black">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextContainer;
