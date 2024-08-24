import Button from "./Button";
import { homePagePara } from "./Constants";

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
          <p className="nunito">{homePagePara}</p>
        </div>
        <div className="flex gap-3">
          <Button>Gallery</Button>
          <Button style="border-[#FFA465] hover:bg-[#FFA465] border-[1px] nunito-but my-4 py-2 px-6 text-black">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TextContainer;
