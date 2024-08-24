import TextContainer from "./TextContainer";
import image1 from "../images/image1.jpg";
import Profile from "./Profile";
import Booking from "./Booking";

// eslint-disable-next-line react/prop-types
function Container({ nav }) {
  return (
    <div className="flex absolute z-[-1]">
      <div className="textContainer fixed basis-[35.9027778%]">
        {nav === 0 && <TextContainer />}
        {nav === 1 && <Profile />}
        {nav === 3 && <Booking />}
      </div>
      <div className="imageContainer fixed basis-[64.09722222222223%]">
        <div className="fixed truncate white-box">
          <img className="model" src={image1} alt="Model" />
        </div>
      </div>
    </div>
  );
}

export default Container;
